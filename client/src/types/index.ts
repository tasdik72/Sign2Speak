export interface DetectedSign {
  text: string;
  confidence: number;
  timestamp: number;
}

export interface GestureResult {
  categoryName: string;
  score: number;
}

export interface HandLandmark {
  x: number;
  y: number;
  z: number;
}

export interface ModelState {
  isLoaded: boolean;
  isLoading: boolean;
  error: string | null;
}

export interface CameraState {
  isActive: boolean;
  isLoading: boolean;
  error: string | null;
  stream: MediaStream | null;
}

export interface SpeechState {
  isEnabled: boolean;
  isSupported: boolean;
  voices: SpeechSynthesisVoice[];
  selectedVoice: SpeechSynthesisVoice | null;
}

export interface LearnModeSign {
  word: string;
  description: string;
  instructions: string;
  category: 'letter' | 'word';
}

export const SUPPORTED_SIGNS = {
  letters: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''),
  words: [
    { text: 'Hello', category: 'common', accuracy: 95 },
    { text: 'Thanks', category: 'common', accuracy: 92 },
    { text: 'Help', category: 'essential', accuracy: 89 },
    { text: 'Yes', category: 'common', accuracy: 94 },
    { text: 'No', category: 'common', accuracy: 93 },
    { text: 'Please', category: 'common', accuracy: 90 },
    { text: 'Sorry', category: 'common', accuracy: 88 },
    { text: 'Good', category: 'common', accuracy: 91 },
    { text: 'Bad', category: 'common', accuracy: 87 },
    { text: 'More', category: 'common', accuracy: 86 }
  ]
};
