import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";
import db from "@/data/db.json";

// Initialize Gemini AI
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");

// Simple rate-limiter (for demonstration, in production use Redis/Upstash)
const rateLimitMap = new Map<string, number[]>();
const LIMIT = 5; // 5 requests
const WINDOW = 60 * 1000; // per 1 minute

async function sendDiscordLog(content: string) {
  const webhookUrl = process.env.DISCORD_WEBHOOK_URL;
  if (!webhookUrl) return;

  try {
    await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ content }),
    });
  } catch (err) {
    console.error("Discord logging failed:", err);
  }
}

export async function POST(req: Request) {
  try {
    const ip = req.headers.get("x-forwarded-for") || "anonymous";
    const now = Date.now();
    
    // Clean up old timestamps
    const timestamps = (rateLimitMap.get(ip) || []).filter(t => now - t < WINDOW);
    
    if (timestamps.length >= LIMIT) {
      await sendDiscordLog(`⚠️ **Rate Limit!** Someone tried to spam.`);
      return NextResponse.json(
        { error: "Too many requests. Please wait a minute." },
        { status: 429 }
      );
    }
    
    timestamps.push(now);
    rateLimitMap.set(ip, timestamps);

    const { message, history } = await req.json();

    if (!process.env.GEMINI_API_KEY) {
      await sendDiscordLog("❌ **Error:** Missing GEMINI_API_KEY!");
      return NextResponse.json(
        { error: "Missing Gemini API Key. Please check your .env.local file." },
        { status: 500 }
      );
    }

    const systemPrompt = `
      You are the 'Saily Smart Assistant'. Your goal is to help travelers find the best eSIM plan.
      
      USE ONLY THIS DATA FOR PLANS:
      ${JSON.stringify(db.destinations)}
      
      RULES:
      1. Your slogan: "Planning a trip shouldn't be stressful."
      2. LANGUAGE: You MUST respond in the same language the user uses. If they write in English, respond in English. If they write in Lithuanian, respond in Lithuanian. Never mix languages in a single response.
      3. If the user asks about a specific country or data amounts (GB), recommend the best eSIM plan from the database.
      4. DO NOT create a detailed itinerary unless the user explicitly asks for it (e.g., "plan my trip", "what to do there", "I want a plan").
      5. Never invent prices. Use only exact prices from the provided data.
      6. BE HUMAN: If the user asks something off-topic (e.g., about weather, politics, food, or life), politely respond that your expertise is travel and eSIM, but you can comment briefly if it relates to travel.
      7. Respond professionally but in a friendly manner. Use Emojis.
      8. If the user's needs are unclear, ask where they are going and how long the trip will last.
      9. IMPORTANT: At the end of every response, if a country was mentioned, add a code in the format [[PLAN:id]], where 'id' is the country code (e.g., 'jp', 'us', 'eu').
      10. Your main priority is Saily eSIM.
    `;

    // Create model instance
    const model = genAI.getGenerativeModel({ 
      model: "gemini-3.1-flash-lite-preview", 
      systemInstruction: systemPrompt 
    });

    // Formatuojame pokalbių istoriją, kad Gemini suprastų kontekstą
    const formattedHistory = history.map((msg: any) => ({
      role: msg.role === "user" ? "user" : "model",
      parts: [{ text: msg.content }],
    }));

    // Inicijuojame pokalbį
    const chat = model.startChat({
      history: formattedHistory,
    });

    // Siunčiame vartotojo žinutę
    const result = await chat.sendMessage(message);
    const responseText = result.response.text();

    // Log to Discord
    await sendDiscordLog(`👤 **User:** ${message}\n🤖 **AI:** ${responseText.slice(0, 500)}...`);

    return NextResponse.json({ response: responseText });
  } catch (error: any) {
    console.error("Gemini API Error:", error);
    await sendDiscordLog(`🔥 **API ERROR:** ${error.message || "Unknown error"}`);
    return NextResponse.json(
      { error: "Sorry, an error occurred while processing your request." },
      { status: 500 }
    );
  }
}
