# Development Process: Saily 2.0 - AI-Powered Travel Assistant 🗺️

## Project Overview
The goal was to create a modern, high-fidelity replica of the Saily application with an added **AI-powered Smart Search** feature. The project focuses on a "mobile-first" approach, mirroring the premium aesthetics of Nord Security products (minimalism, vibrant yellow accents, and smooth animations).

### Tech Stack:
- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **AI Engine**: Google Gemini API (`gemini-3.1-flash-lite-preview`)
- **Animations**: Framer Motion

---

## 🤖 How AI was Used

During this project, I used an AI coding agent as a pair programmer. My strategy was to provide high-level architectural goals and then iterate on specific features through detailed prompts.

### Examples of Prompts:
- **Initial Setup**: *"Create the foundation for Saily 2.0 using Next.js, Tailwind, and TypeScript. Focus on a minimalist design with Saily's signature yellow/white color palette."*
- **Dynamic Data**: *"Generate a JSON database for eSIM plans and create a dynamic route /plans/[id] that fetches and displays country-specific data."*
- **AI Integration**: *"Integrate Gemini AI to act as a 'Saily Smart Assistant'. It must answer travel questions and recommend eSIM plans from our local DB using a specific [[PLAN:id]] format."*
- **Mobile Optimization**: *"The chat input must be fixed at the bottom on mobile devices, similar to a native iOS/Android app. Ensure natural scrolling behavior."*

---

## ✅ What Worked vs ❌ What Didn't

### ✅ Successes:
- **Rapid Prototyping**: The AI was exceptionally fast at generating the initial project structure and UI components (cards, buttons, layouts).
- **Complex UI Components**: The AI successfully built the interactive "Resources" tabs and the "Help Center" accordion with very little manual adjustment.
- **Logic Implementation**: Setting up the API routes and the Gemini integration worked smoothly on the first try.

### ❌ Challenges & Manual Fixes:
1. **Model Versioning**: The AI initially tried to use restricted beta versions (Gemini 2.5), which resulted in strict quota limits. I manually updated it to **Gemini 3.1 Flash-Lite-Preview**, which offers the best efficiency and higher limits for my developer environment.
2. **Syntax Errors**: During the addition of Framer Motion animations, the AI left an unclosed `<div>` tag when it meant to use `<motion.div>`. I had to point out the specific parsing error for the AI to fix it.
3. **UX Behavior (The Scroll Bug)**: The AI implemented an "auto-scroll to bottom" feature for the chat, but it initially triggered on page load, forcing the user to the bottom of the screen immediately. I had to manually guide the AI to only trigger scrolling after a message is sent.
4. **Mobile Layout (Sticky Footer)**: On mobile (F12 simulator), the chat input was disappearing or pushing the content incorrectly. It took 3-4 iterations of manual CSS overrides and specific "Sticky/Fixed" prompts to achieve the native app feel.
5. **Language Logic**: The AI was initially mixing English and Lithuanian in its responses because the system instructions were in Lithuanian. I had to implement a strict "Language Match" rule in the system prompt.

---

## 🚀 Where AI Helped Most

- **Design System**: Converting Saily's visual identity into Tailwind configurations and reusable components was a breeze.
- **Content Generation**: Populating the Blog and Help Center with realistic travel data saved hours of manual writing.
- **Security Features**: The AI helped implement a **Rate Limiter** (5 requests per minute) and a **Discord Webhook** logger to monitor app activity and technical errors in real-time.

---

## 🛠️ Manual Intervention & Overrides

I had to step in whenever the "logic" of the user experience felt off. For example, the AI initially wanted to provide a full 7-day travel itinerary every time someone asked for a simple eSIM price. I manually adjusted the **System Prompt** to ensure the AI only plans itineraries when explicitly asked (*"Plan my trip"*) and stays focused on eSIM sales for general queries.

I also manually handled the **GitHub deployment** and **Environment Variable** setup (using `.env.local` and Render.com secrets) to ensure the API keys are never leaked in the public repository.

---

## Verdict
Working with AI allowed me to focus on the **Product Vision** and **User Experience** while the agent handled the heavy lifting of boilerplate code. The key was knowing when to stop the AI from over-automating and ensuring the final result felt like a polished, hand-crafted application.

**Developed by Ignas 🚀**
