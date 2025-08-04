import { useState, useEffect, useRef } from "react";
import { GestureRecognizer, FilesetResolver } from "@mediapipe/tasks-vision";
import { mapGesture, getFeedback } from "@/lib/predictor";

const MODEL_URL = "https://storage.googleapis.com/mediapipe-models/gesture_recognizer/gesture_recognizer/float16/1/gesture_recognizer.task";

export function useModel(videoRef: React.RefObject<HTMLVideoElement>, isActive: boolean) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<{ sign: string; confidence: number; feedback: string; rawLabel?: string }>({ sign: "", confidence: 0, feedback: "", rawLabel: "" });
  const recognizerRef = useRef<GestureRecognizer | null>(null);

  // Load model once
  useEffect(() => {
    let isMounted = true;
    (async () => {
      try {
        const vision = await FilesetResolver.forVisionTasks("https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@latest/wasm");
        const recognizer = await GestureRecognizer.createFromOptions(vision, {
          baseOptions: { modelAssetPath: MODEL_URL },
          runningMode: "VIDEO",
          numHands: 1,
        });
        if (isMounted) {
          recognizerRef.current = recognizer;
          setIsLoaded(true);
        }
      } catch (err) {
        setError("Failed to load model");
      }
    })();
    return () => { isMounted = false; };
  }, []);

  // Detection loop
  useEffect(() => {
    if (!isActive || !isLoaded || !videoRef.current) return;
    let interval: NodeJS.Timeout | null = null;
    interval = setInterval(() => {
      try {
        const recognizer = recognizerRef.current;
        if (!recognizer) return;
        const results = recognizer.recognizeForVideo(videoRef.current!, Date.now());
        if (results.gestures?.[0]?.[0]) {
          const { categoryName, score } = results.gestures[0][0];
          const sign = mapGesture(categoryName);
          const feedback = getFeedback(sign, score, true);
          setResult({ sign, confidence: score, feedback, rawLabel: categoryName });
        } else {
          setResult({ sign: "Unknown", confidence: 0, feedback: getFeedback("Unknown", 0, false) });
        }
      } catch {
        setResult({ sign: "Unknown", confidence: 0, feedback: "Prediction error" });
      }
    }, 30);
    return () => { if (interval) clearInterval(interval); };
  }, [isActive, isLoaded, videoRef]);

  return { isLoaded, error, ...result };
}
