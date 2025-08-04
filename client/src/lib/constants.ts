export const APP_CONFIG = {
  name: 'Sign2Speak',
  version: '1.0.0',
  description: 'Translate ASL to Speech Instantly',
  camera: {
    width: 640,
    height: 480,
    fps: 10
  },
  ai: {
    confidenceThreshold: 0.7,
    predictionInterval: 300 // milliseconds
  },
  speech: {
    rate: 1.0,
    pitch: 1.0,
    volume: 1.0,
    lang: 'en-US'
  }
};

export const MEDIAPIPE_CONFIG = {
  modelAssetPath: 'https://storage.googleapis.com/mediapipe-models/gesture_recognizer/gesture_recognizer/float16/1/gesture_recognizer.task',
  runningMode: 'VIDEO' as const,
  numHands: 1,
  minHandDetectionConfidence: 0.5,
  minHandPresenceConfidence: 0.5,
  minTrackingConfidence: 0.5
};

export const LEARN_MODE_SIGNS: Array<{
  word: string;
  description: string;
  instructions: string;
  category: 'letter' | 'word';
}> = [
  {
    word: 'Hello',
    description: 'Practice this common greeting sign',
    instructions: 'Raise your hand with palm facing forward, then move it side to side in a small wave motion.',
    category: 'word'
  },
  {
    word: 'Thanks',
    description: 'Express gratitude with this sign',
    instructions: 'Touch your chin with your fingertips, then move your hand forward and down.',
    category: 'word'
  },
  {
    word: 'Help',
    description: 'Request assistance with this essential sign',
    instructions: 'Place your right fist on your left palm, then lift both hands together.',
    category: 'word'
  },
  {
    word: 'A',
    description: 'The first letter of the ASL alphabet',
    instructions: 'Make a fist with your thumb resting against the side of your index finger.',
    category: 'letter'
  }
];
