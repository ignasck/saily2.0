import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";
import db from "@/data/db.json";

// Inicializuojame Gemini AI
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");

// Paprastas rate-limiteris (tik demonstracijai, produkcijoje geriau naudoti Redis/Upstash)
const rateLimitMap = new Map<string, number[]>();
const LIMIT = 5; // 5 užklausos
const WINDOW = 60 * 1000; // per 1 minutę

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
    
    // Išvalome senus įrašus
    const timestamps = (rateLimitMap.get(ip) || []).filter(t => now - t < WINDOW);
    
    if (timestamps.length >= LIMIT) {
      await sendDiscordLog(`⚠️ **Rate Limit!** Kažkas bandė spamminti.`);
      return NextResponse.json(
        { error: "Per daug užklausų. Palaukite minutę." },
        { status: 429 }
      );
    }
    
    timestamps.push(now);
    rateLimitMap.set(ip, timestamps);

    const { message, history } = await req.json();

    if (!process.env.GEMINI_API_KEY) {
      await sendDiscordLog("❌ **Klaida:** Trūksta GEMINI_API_KEY!");
      return NextResponse.json(
        { error: "Missing Gemini API Key. Please check your .env.local file." },
        { status: 500 }
      );
    }

    const systemPrompt = `
      Tu esi 'Saily Smart Assistant'. Tavo tikslas – padėti keliautojams rasti geriausią eSIM planą.
      
      NAUDOK TIK ŠIUOS DUOMENIS APIE PLANUS:
      ${JSON.stringify(db.destinations)}
      
      TAISYKLĖS:
      1. Tavo šūkis: "Planning a trip shouldn't be stressful."
      2. Jei vartotojas klausia apie konkrečią šalį ar gigabaitus, rekomenduok geriausią eSIM planą iš duomenų bazės.
      3. NESUDARYK detalaus kelionės plano (itinerary), nebent vartotojas to aiškiai paprašo (pvz. "suplanuok kelionę", "ką veikti", "noriu plano").
      4. Niekada neišgalvok kainų. Naudok tikslias kainas iš pateiktų duomenų.
      5. BŪK ŽMOGIŠKAS: Jei vartotojas klausia ko nors „ne į temą“ (pvz. apie orus, politiką, maistą ar gyvenimą), mandagiai atsakyk, kad tavo „stichija“ yra kelionės ir eSIM, bet gali trumpai pakomentuoti, jei tai susiję su kelionėmis. Pavyzdžiui: „Orai Kaune svarbu, bet jei planuoji kelionę svetur – aš tau padėsiu su ryšiu!“.
      6. Atsakinėk profesionaliai, bet draugiškai. Naudok Emoji.
      7. Jei vartotojo poreikis neaiškus, paklausk, į kur vyksta ir kiek laiko truks kelionė.
      8. SVARBU: Kiekvieno atsakymo pabaigoje, jei buvo paminėta šalis, pridėk kodą formatu [[PLAN:id]], kur 'id' yra šalies kodas (pvz. 'jp', 'us', 'eu').
      9. Tavo pagrindinis prioritetas – Saily eSIM.
    `;

    // Sukuriame modelio instanciją
    const model = genAI.getGenerativeModel({ 
      model: "gemini-2.5-flash", // 2.5-flash 
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

    // Logas į Discord
    await sendDiscordLog(`👤 **Vartotojas:** ${message}\n🤖 **AI:** ${responseText.slice(0, 500)}...`);

    return NextResponse.json({ response: responseText });
  } catch (error: any) {
    console.error("Gemini API Error:", error);
    await sendDiscordLog(`🔥 **KLAIDA API:** ${error.message || "Nežinoma klaida"}`);
    return NextResponse.json(
      { error: "Atsiprašome, įvyko klaida apdorojant jūsų užklausą." },
      { status: 500 }
    );
  }
}
