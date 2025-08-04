import { GestureRecognizer, FilesetResolver } from '@mediapipe/tasks-vision';
import { MEDIAPIPE_CONFIG } from './constants';
import type { GestureResult } from '../types';

export let gestureRecognizer: GestureRecognizer | null = null;

export async function initializeMediaPipe(): Promise<GestureRecognizer> {
  if (gestureRecognizer) {
    return gestureRecognizer;
  }

  try {
    const vision = await FilesetResolver.forVisionTasks(
      'https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@latest/wasm'
    );

    gestureRecognizer = await GestureRecognizer.createFromOptions(vision, {
      baseOptions: {
        modelAssetPath: MEDIAPIPE_CONFIG.modelAssetPath,
      },
      runningMode: MEDIAPIPE_CONFIG.runningMode,
      numHands: MEDIAPIPE_CONFIG.numHands,
      minHandDetectionConfidence: MEDIAPIPE_CONFIG.minHandDetectionConfidence,
      minHandPresenceConfidence: MEDIAPIPE_CONFIG.minHandPresenceConfidence,
      minTrackingConfidence: MEDIAPIPE_CONFIG.minTrackingConfidence,
    });
    // Do not attach to window. Use only the module-level export for gestureRecognizer.
    return gestureRecognizer;
  } catch (error) {
    console.error('Failed to initialize MediaPipe:', error);
    throw new Error('Failed to load gesture recognition model');
  }
}

export function recognizeGesture(
  videoElement: HTMLVideoElement,
  timestamp: number
): GestureResult[] {
  if (!gestureRecognizer) {
    console.warn('Gesture recognizer not initialized');
    return [];
  }

  try {
    const results = gestureRecognizer.recognizeForVideo(videoElement, timestamp);
    
    if (results && results.gestures && results.gestures.length > 0 && results.gestures[0].length > 0) {
      return results.gestures[0].map(gesture => ({
        categoryName: gesture.categoryName,
        score: gesture.score
      }));
    }
  } catch (error) {
    console.error('MediaPipe recognition error:', error);
  }

  return [];
}

export function cleanup() {
  if (gestureRecognizer) {
    gestureRecognizer.close();
    gestureRecognizer = null;
  }
}
