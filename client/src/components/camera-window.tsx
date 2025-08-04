import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useCamera } from "@/hooks/use-camera";
import { useModel } from "@/hooks/use-model";
import { useSpeech } from "@/hooks/use-speech";
import { X, Volume2, VolumeX, CameraOff } from "lucide-react";
import { cn } from "@/lib/utils";

interface CameraWindowProps {
  isOpen: boolean;
  onClose: () => void;
}

interface DetectedSign {
  text: string;
  confidence: number;
  timestamp: number;
}

export function CameraWindow({ isOpen, onClose }: CameraWindowProps) {
  // Destructure all hooks only once, including rawLabel
  const { videoRef, isActive, isLoading, error, startCamera, stopCamera } = useCamera();
  const { isLoaded, sign, confidence, feedback, rawLabel } = useModel(videoRef, isActive);
  const { isEnabled: voiceOn, speak, toggle: toggleVoice, lang, setLanguage } = useSpeech();
  const lastSpokenRef = useRef<string>("");
  const [recentSigns, setRecentSigns] = useState<DetectedSign[]>([]);

  // Start camera on open
  useEffect(() => { if (isOpen) startCamera(); }, [isOpen, startCamera]);
  // Stop camera on close
  const handleClose = () => {
    try {
      stopCamera();
    } finally {
      onClose();
    }
  };

  // Always speak recognized sign, even if repeated
  useEffect(() => {
    if (voiceOn && sign && sign !== "Unknown" && !feedback) {
      speak(sign);
    }
  }, [sign, feedback, voiceOn, speak]);

  // Track recent signs
  useEffect(() => {
    if (sign && sign !== "Unknown" && !feedback) {
      setRecentSigns(prev => {
        if (prev.length > 0 && prev[0].text === sign) return prev;
        return [
          { text: sign, confidence: confidence * 100, timestamp: Date.now() },
          ...prev.slice(0, 4)
        ];
      });
    }
  }, [sign, confidence, feedback]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center">
      <div className="relative w-full h-full bg-white dark:bg-[#111827] rounded-none shadow-none flex flex-col items-center justify-center overflow-hidden">
        {/* Title bar and close button */}
        <div className="absolute top-0 left-0 w-full flex items-center justify-between px-6 py-4 z-10">
          <div className="flex items-center gap-2">
            <span
              className={
                `inline-block w-3 h-3 rounded-full border-2 shadow ` +
                (sign && sign !== "Unknown" ? 'bg-green-500 border-green-700' : 'bg-red-500 border-red-700')
              }
              title={sign && sign !== "Unknown" ? 'Hand detected' : 'No hand detected'}
            />
            <h2 className="text-base font-semibold text-black dark:text-white bg-white/80 dark:bg-[#111827]/80 px-3 py-1 rounded shadow">Sign2Speak Detection</h2>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={handleClose}
            className="bg-white hover:bg-white/90 text-black rounded-full p-2 shadow-lg"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </Button>
        </div>

        {/* Video and overlay container */}
        <div className="relative w-full h-full flex-1 flex items-center justify-center">
          <video
            ref={videoRef}
            width={window.innerWidth}
            height={window.innerHeight}
            className={cn(
              "w-full h-full object-cover",
              !isActive && "opacity-30"
            )}
            playsInline
            muted
          />
          {/* Overlay: Camera not active (only over video area) */}
          {!isActive && (
  <div className="absolute inset-0 flex flex-col items-center justify-center z-20 pointer-events-none">
    <CameraOff className="h-20 w-20 opacity-80" />
<span className="mt-6 text-base font-normal text-gray-500 dark:text-gray-400">Camera is off</span>
  </div>
)}
        </div>

        {/* Controls */}
        <div className="absolute bottom-0 left-0 w-full flex justify-center gap-4 px-6 pb-6 z-10">
          <Button
            onClick={isActive ? stopCamera : startCamera}
            disabled={isLoading}
            className={cn(
              "btn-hover px-6 py-3 text-base font-semibold",
              isActive
                ? "bg-red-500 hover:bg-red-600"
                : "bg-teal-500 hover:bg-teal-600"
            )}
          >
            {isLoading ? "Loading..." : isActive ? "Stop Camera" : "Start Camera"}
          </Button>
          <Button
            onClick={toggleVoice}
            variant="secondary"
            className="btn-hover px-6 py-3 text-base font-semibold inline-flex items-center gap-2"
          >
            {voiceOn ? (
              <Volume2 className="h-5 w-5" />
            ) : (
              <VolumeX className="h-5 w-5" />
            )}
            <span>{voiceOn ? "Voice On" : "Voice Off"}</span>
          </Button>
          <select
            value={lang}
            onChange={e => setLanguage(e.target.value)}
            className="rounded-xl px-2 py-1 ml-2 bg-white text-black"
            aria-label="Select language"
          >
            <option value="en-US">English</option>
            <option value="es-ES">Español</option>
            <option value="fr-FR">Français</option>
          </select>
        </div>

        {/* Captions and feedback */}
        {isActive && (
  <div className="absolute left-1/2 bottom-28 -translate-x-1/2 w-full max-w-xl px-4 z-20 flex flex-col items-center">
    <div className="bg-white dark:bg-[#111827] bg-opacity-95 rounded-lg shadow px-4 py-2 text-base font-medium text-center text-black dark:text-white border border-primary min-h-[2rem] transition-all">
      {sign || <span className="text-gray-400">Waiting for sign...</span>}
    </div>
    <div className="text-sm text-gray-900 dark:text-gray-100 mt-2">
      Confidence: {Math.round(confidence * 100)}%
    </div>
    {feedback && (
      <div className="text-sm text-yellow-500 mt-2">{feedback}</div>
    )}
    {rawLabel && (
      <div className="text-xs text-gray-400 mt-1">Raw label: {rawLabel}</div>
    )}
  </div>
)}

        {/* Recent signs */}
        {/* Removed recent signs box as requested */}

        {/* Error */}
        {error && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-yellow-500 bg-white rounded-lg px-4 py-2 shadow-lg z-50">
            {error}
          </div>
        )}
      </div>
    </div>
  );
}