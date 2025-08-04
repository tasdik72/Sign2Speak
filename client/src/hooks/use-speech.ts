import { useState, useCallback, useRef } from "react";

export function useSpeech(defaultLang = "en-US") {
  const [isEnabled, setIsEnabled] = useState(true);
  const [lang, setLang] = useState(defaultLang);
  const lastSpoken = useRef<string>("");

  const speak = useCallback((text: string) => {
    if (!isEnabled || !text) return;
    window.speechSynthesis.cancel();
    const utter = new window.SpeechSynthesisUtterance(text);
    utter.lang = lang;
    utter.rate = 1.0;
    utter.pitch = 1.0;
    utter.volume = 1.0;
    window.speechSynthesis.speak(utter);
    lastSpoken.current = text;
  }, [isEnabled, lang]);

  const toggle = () => setIsEnabled((v) => !v);
  const setLanguage = (l: string) => setLang(l);

  return { isEnabled, speak, toggle, lang, setLanguage };
}
