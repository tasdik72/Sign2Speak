import { useRef, useState, useCallback, useEffect } from "react";

type CameraType = 'user' | 'environment';

export function useCamera() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isActive, setIsActive] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const [cameraType, setCameraType] = useState<CameraType>('user');
  const [availableCameras, setAvailableCameras] = useState<MediaDeviceInfo[]>([]);
  const [currentDeviceId, setCurrentDeviceId] = useState<string | null>(null);
  const [currentFacingMode, setCurrentFacingMode] = useState<CameraType>('user');

  // Cleanup function to stop all tracks in the stream
  const stopAllTracks = useCallback((mediaStream: MediaStream | null) => {
    if (mediaStream) {
      mediaStream.getTracks().forEach(track => {
        track.stop();
        mediaStream.removeTrack(track);
      });
    }
  }, []);

  const getAvailableCameras = useCallback(async () => {
    try {
      const devices = await navigator.mediaDevices.enumerateDevices();
      const videoDevices = devices.filter(device => device.kind === 'videoinput');
      setAvailableCameras(videoDevices);
      return videoDevices;
    } catch (err) {
      console.error('Error enumerating devices:', err);
      setError('Could not access camera devices');
      return [];
    }
  }, []);

  const startCamera = useCallback(async (type: CameraType = currentFacingMode, deviceId?: string) => {
    // If camera is already active, don't restart it
    if (isActive) {
      return;
    }

    setIsLoading(true);
    setError(null);
    
    try {
      // Stop any existing stream first
      if (streamRef.current) {
        stopAllTracks(streamRef.current);
        streamRef.current = null;
      }

      const constraints: MediaStreamConstraints = {
        video: {
          width: { ideal: 640 },
          height: { ideal: 480 },
          ...(deviceId 
            ? { deviceId: { exact: deviceId } }
            : { facingMode: type })
        },
        audio: false,
      };

      const mediaStream = await navigator.mediaDevices.getUserMedia(constraints);
      
      // Store the new stream
      streamRef.current = mediaStream;
      
      // Update the current device ID if we're using a specific device
      if (deviceId) {
        setCurrentDeviceId(deviceId);
      } else {
        // If we're using facingMode, try to find the matching device ID
        const tracks = mediaStream.getVideoTracks();
        if (tracks.length > 0) {
          const settings = tracks[0].getSettings();
          if (settings.deviceId) {
            setCurrentDeviceId(settings.deviceId);
          }
        }
      }

      // Set up video element
      if (videoRef.current) {
        videoRef.current.srcObject = mediaStream;
        try {
          await videoRef.current.play();
        } catch (err) {
          console.error('Error playing video:', err);
          throw new Error('Could not play video stream');
        }
      }
      
      // Clear any previous errors when camera starts successfully
      setError(null);
      setCameraType(type);
      setCurrentFacingMode(type);
      setIsActive(true);
      
      // Update available cameras list
      await getAvailableCameras();
    } catch (err) {
      console.error('Error starting camera:', err);
      setError('Could not access camera. Please check permissions.');
      throw err;
    } finally {
      setIsLoading(false);
    }
  }, [isActive, currentFacingMode, currentDeviceId, getAvailableCameras, stopAllTracks]);

  const stopCamera = useCallback(() => {
    try {
      if (streamRef.current) {
        // Stop all tracks in the stream
        streamRef.current.getTracks().forEach(track => {
          track.stop();
        });
        streamRef.current = null;
      }
      
      // Clear the video element
      if (videoRef.current) {
        videoRef.current.pause();
        videoRef.current.srcObject = null;
      }
      
      // Reset states
      setIsActive(false);
      setError(null);
      
    } catch (err) {
      console.error('Error stopping camera:', err);
      setError('Error stopping camera');
    }
  }, []);

  // Switch between front and back camera
  const toggleCamera = useCallback(async () => {
    if (availableCameras.length < 2) return;

    try {
      setIsLoading(true);
      
      // Get current camera index
      const currentIndex = availableCameras.findIndex(
        cam => cam.deviceId === currentDeviceId
      );
      
      // Get next camera
      const nextIndex = (currentIndex + 1) % availableCameras.length;
      const nextCamera = availableCameras[nextIndex];
      
      // Determine if it's front or back camera based on the label
      const isBackCamera = nextCamera.label.toLowerCase().includes('back') || 
                         nextCamera.label.toLowerCase().includes('rear');
      
      await startCamera(
        isBackCamera ? 'environment' : 'user',
        nextCamera.deviceId
      );
    } catch (err) {
      console.error('Error switching camera:', err);
      setError('Failed to switch cameras. Please try again.');
    } finally {
      setIsLoading(false);
    }
  }, [availableCameras, currentDeviceId, startCamera]);

  useEffect(() => {
    // Get available cameras when component mounts
    getAvailableCameras();

    // Cleanup function
    return () => {
      if (streamRef.current) {
        stopAllTracks(streamRef.current);
      }
    };
  }, [getAvailableCameras, stopAllTracks]);

  return {
    videoRef,
    isActive,
    isLoading,
    error, 
    cameraType,
    availableCameras,
    currentDeviceId,
    startCamera, 
    stopCamera, 
    switchCamera: toggleCamera,
    hasMultipleCameras: availableCameras.length > 1
  };
}
