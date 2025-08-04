# Sign2Speak

Sign2Speak is a modern, fullstack web application for real-time American Sign Language (ASL) gesture recognition and learning. It leverages AI, computer vision, and an accessible UI to help users learn, practice, and communicate using ASL.

---

## Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Architecture](#architecture)
- [Folder Structure](#folder-structure)
- [Setup & Usage](#setup--usage)
- [Configuration](#configuration)
- [Contributing](#contributing)
- [FAQ](#faq)
- [Contact](#contact)

---

## Features
- Real-time ASL gesture recognition using MediaPipe and TensorFlow.js
- Intuitive web interface built with React, TypeScript, and Tailwind CSS
- Educational content, guided lessons, and gesture feedback
- Accessible, responsive, and mobile-friendly design
- Backend API for user/session management and data
- Modular codebase for easy extension

## Tech Stack
- **Frontend:** React, TypeScript, Tailwind CSS, Vite
- **Backend:** Node.js, Express, Drizzle ORM
- **AI/ML:** MediaPipe, TensorFlow.js
- **Other:** Zod (validation), WS (WebSockets), Passport (auth), Recharts (charts)

## Architecture
- **Client:** Handles UI, gesture capture, and real-time feedback
- **Server:** Provides API endpoints, session management, and business logic
- **Shared:** Type definitions and schema shared between client and server
- **Model:** (Optional) Large gesture recognition model file for advanced features

## Folder Structure
```
TaskifyPro/
├── client/         # Frontend React app
│   └── src/
│       ├── components/   # UI and functional components
│       ├── hooks/        # Custom React hooks
│       ├── lib/          # Utility and core logic (gesture, predictor, etc.)
│       ├── pages/        # Page-level components/routes
│       └── types/        # TypeScript types
├── server/         # Backend API, routes, server logic
├── shared/         # Shared types/schema
├── gesture_recognizer.task # (optional) Model file
├── package.json    # Project metadata/scripts
├── README.md       # Project documentation
```

## Setup & Usage
### Prerequisites
- Node.js (v18+ recommended)
- npm (or yarn)

### Installation
```bash
npm install
```

### Development
```bash
npm run dev
```
- Starts backend and frontend in development mode

### Build
```bash
npm run build
```
- Builds frontend and backend for production

### Start (Production)
```bash
npm start
```
- Runs the production build

## Configuration
- Environment variables and secrets should be set in `.env` files (not included by default)
- See `drizzle.config.ts`, `tailwind.config.ts`, and other config files for advanced setup

## Contributing
- Fork the repo and create a feature branch
- Submit pull requests for review
- For major changes, open an issue first to discuss your proposal

## FAQ
**Q: What gestures are supported?**
A: The app supports a wide range of ASL gestures as defined in the `predictor.ts` gesture map.

**Q: How do I add new gestures?**
A: Update the gesture map in `client/src/lib/predictor.ts` and retrain the model if needed.

**Q: Is my data private?**
A: The app does not store personal data by default. Review server code for details.

## Contact
**Author:** Abu Yousuf Md Tasdikujjaman (<mdtasdikujjaman@gmail.com>)

For issues, suggestions, or contributions, please use the project's GitHub repository.

## License
MIT
