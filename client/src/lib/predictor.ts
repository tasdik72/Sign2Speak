// Expanded gesture map for common conversational ASL gestures
// ASL gesture mapping: includes alphabet, numbers, common conversational signs, handshapes, and variants
// Expanded gesture map with all known MediaPipe hand gesture labels
// Note: Only these gestures can be detected by the default MediaPipe model
// Gesture map with natural, conversational meanings for deaf users.
// Each gesture includes a comment describing the handshape and a suggested meaning for real-world use.
const gestureMap: Record<string, string> = {
  // Fist: All fingers curled in, thumb over fingers.
  // Meaning: "Stop", "No", or simply "Fist"
  fist: "Stop",

  // Thumb Up: Fist with thumb extended upward.
  // Meaning: "Yes", "Good", "Like", "Thumbs Up"
  thumb_up: "Yes",

  // Thumb Down: Fist with thumb pointing downward.
  // Meaning: "No", "Bad", "Dislike", "Thumbs Down"
  thumb_down: "No",

  // Open Palm: Fingers extended and together, palm facing forward.
  // Meaning: "Hello", "Hi", "Open Hand"
  open_palm: "Hello",

  // Palm: Same as open_palm, sometimes used for "Stop" or "Wait"
  palm: "Stop",

  // Wave: Open palm moving side-to-side.
  // Meaning: "Hello", "Goodbye", "Attention"
  wave: "Hello",

  // Peace: Index and middle fingers extended, others closed (V shape).
  // Meaning: "Peace", "Victory", or "Number 2"
  peace: "Peace",

  // OK: Index finger and thumb form a circle, other fingers extended.
  // Meaning: "OK", "Perfect", "Alright"
  ok: "OK",

  // Point: Index finger extended, others closed.
  // Meaning: "You", "There", "Pointing"
  point: "You",

  // Finger Gun: Index and thumb extended, others closed (like a gun).
  // Meaning: "Shoot", "Fun", "Playful"
  finger_gun: "Shoot",

  // Rock: Index and pinky extended, others closed (rock sign).
  // Meaning: "Rock On", "Music", "I Love You" (in some contexts)
  rock: "Rock On",

  // Spock: All fingers extended, middle and ring separated (Vulcan salute).
  // Meaning: "Live Long and Prosper"
  spock: "Live Long and Prosper",

  // Call Me: Thumb and pinky extended, others closed (phone hand).
  // Meaning: "Call Me", "Phone"
  call_me: "Call Me",

  // Live Long: Same as spock, alternate label.
  // Meaning: "Live Long and Prosper"
  live_long: "Live Long and Prosper",

  // Victory: Same as peace, alternate label.
  // Meaning: "Victory", "Peace"
  victory: "Victory",

  // Love You: Thumb, index, and pinky extended (ASL "I Love You").
  // Meaning: "I Love You"
  iloveyou: "I Love You",

  // Stop: Open palm facing forward.
  // Meaning: "Stop"
  stop: "Stop",

  // One: Index finger extended, others closed.
  // Meaning: "One"
  one: "One",

  // Two: Index and middle fingers extended, others closed.
  // Meaning: "Two"
  two: "Two",

  // Three: Index, middle, and ring fingers extended.
  // Meaning: "Three"
  three: "Three",

  // Four: All fingers except thumb extended.
  // Meaning: "Four"
  four: "Four",

  // Five: All fingers extended.
  // Meaning: "Five", "High Five"
  five: "Five"
};

export function mapGesture(label: string): string {
  return gestureMap[label?.toLowerCase()] || "Unknown";
}

export function getFeedback(sign: string, score: number, isHandDetected: boolean): string {
  if (!isHandDetected) return "Hand not detected, please show your hand.";
  if (sign === "Unknown") return "Try again with a supported sign.";
  if (score < 0.5) return "Move closer or adjust lighting.";
  return "";
}