# Saily 2.0 - AI-Powered Travel Assistant ✨

A premium, next-generation travel assistant inspired by Saily (Nord Security). Built with Next.js 15 and Google Gemini AI, this application offers a "stress-free" travel planning experience with smart eSIM recommendations, interactive itineraries, and a pixel-perfect mobile-first design.

---

### 🎥 Watch the Demo Video
[![Saily 2.0 Demo](https://img.shields.io/badge/YouTube-Watch%20Demo-red?style=for-the-badge&logo=youtube)](https://www.youtube.com/watch?v=poDNPC8I-p8)


## ✨ Features

- **Smart Search AI**: Integrated with **Gemini 3.1 Flash-Lite-Preview** to provide real-time travel advice, eSIM plan recommendations, and itinerary planning.
- **Saily-like UI**: High-fidelity design following Saily's branding guidelines—featuring minimal aesthetics, vibrant yellow accents, and smooth Framer Motion animations.
- **Mobile-First Experience**: Fully responsive interface with a custom hamburger menu and a "Sticky/Fixed" chat input field for a native app-like feel.
- **Plan Recommendation Tool**: The AI analyzes user needs and suggests the most cost-effective eSIM plans directly from the integrated database.
- **Interactive Resources**: A dedicated section for eSIM education with interactive tabs (iPhone/Android/QR) and a fully populated travel blog.
- **Session Persistence**: Chat history is automatically saved to `localStorage`, ensuring your travel plans are preserved even after a page refresh.

## 🛠️ Tech Stack

### AI & Logic
- **Engine**: Google Gemini API (`gemini-3.1-flash-lite-preview`)
- **Persistence**: Browser LocalStorage
- **Data**: JSON-based destination & plan database

### Frontend
- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Tooling**: Vite / PostCSS

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+)
- npm
- A Google Gemini API Key

### 1. Setup Environment
Create a `.env.local` file in the root directory and add your API key:
```env
GEMINI_API_KEY=your_actual_key_here
```

### 2. Installation
Install dependencies:
```bash
npm install
```

### 3. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser. Use the F12 mobile simulator for the best experience!

## 📂 Project Structure

```
├── src/
│   ├── app/                # Next.js App Router (Pages & API)
│   │   ├── api/chat/       # Gemini AI Integration Route
│   │   ├── smart-search/   # AI Assistant Interface
│   │   ├── plans/          # Destination & Plan Browser
│   │   └── resources/      # Guides & Blog Pages
│   ├── components/         # Reusable UI Components
│   │   ├── MobileMenu.tsx  # Responsive Navigation
│   │   └── Footer.tsx      # Saily-styled Footer
│   ├── data/
│   │   └── db.json         # eSIM Plans Database
│   └── lib/                # Utility Functions
```

## 📜 Assignment Context

This project was developed as a technical challenge to reimagine the Saily experience. It meets and exceeds the following requirements:

- **AI Integration**: Implements a complex AI agent that handles both specific data (plans) and general knowledge (travel tips).
- **UX/UI**: Matches the professional visual identity of Nord Security products.
- **Planning**: Fulfils the promise: *"Planning a trip shouldn't be stressful. Let our AI analyze your preferences, recommend the perfect plans, and organize your itinerary in seconds."*

## 🔮 Future Improvements

- **Real Payments**: Integration with Stripe for actual eSIM purchasing.
- **User Accounts**: Cloud-based synchronization for cross-device travel planning.
- **Offline Maps**: Ability to download travel itineraries for offline use via the Saily app.

Developed by Ignas 🚀
