"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import db from "@/data/db.json";

type Message = {
  role: "assistant" | "user";
  content: string;
  planId?: string; // Papildomas laukas, jei AI pasiūlo planą
};

export default function SmartSearchPage() {
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hello! I'm your Saily AI assistant.\n\nAre you looking for a specific eSIM destination, or do you have a question about how Saily works? I can scan all our plans and help articles in seconds."
    }
  ]);
  
  const chatContainerRef = useRef<HTMLDivElement>(null);

  // 1. Užkrauname buvusią sesiją iš localStorage
  useEffect(() => {
    const saved = localStorage.getItem("saily_chat_session");
    if (saved) {
      try {
        setMessages(JSON.parse(saved));
      } catch (e) {
        console.error("Klaida kraunant sesiją");
      }
    }
  }, []);

  // 2. Išsaugome sesiją, kai pasikeičia žinutės
  useEffect(() => {
    if (messages.length > 1) {
      localStorage.setItem("saily_chat_session", JSON.stringify(messages));
    }
  }, [messages]);

  // 3. Paprastas puslapio scrollinimas į apačią (nes Input box yra fixed apačioje)
  useEffect(() => {
    if (messages.length > 1) {
      const scrollDown = () => {
        window.scrollTo({
          top: document.body.scrollHeight,
          behavior: "smooth"
        });
      };
      
      scrollDown();
      setTimeout(scrollDown, 350);
    }
  }, [messages, isLoading]);

  const handleSendMessage = async (text: string) => {
    if (!text.trim()) return;

    const newMessages: Message[] = [...messages, { role: "user", content: text }];
    setMessages(newMessages);
    setInputValue("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: text,
          history: newMessages.slice(1, -1).map(m => ({ role: m.role, content: m.content })), 
        }),
      });

      const data = await response.json();

      if (response.ok) {
        let aiText = data.response;
        let foundPlanId = undefined;

        // Ieškome specialaus kodo [[PLAN:id]]
        const planMatch = aiText.match(/\[\[PLAN:([a-zA-Z0-9_-]+)\]\]/);
        if (planMatch) {
          foundPlanId = planMatch[1];
          // Pašaliname kodą iš matomo teksto
          aiText = aiText.replace(planMatch[0], "").trim();
        }

        setMessages((prev) => [...prev, { role: "assistant", content: aiText, planId: foundPlanId }]);
      } else {
        setMessages((prev) => [...prev, { role: "assistant", content: "Oops! " + (data.error || "Something went wrong.") }]);
      }
    } catch (error) {
      console.error("Error calling chat API:", error);
      setMessages((prev) => [...prev, { role: "assistant", content: "Oops! Network error. Please try again later." }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !isLoading) {
      handleSendMessage(inputValue);
    }
  };

  // Helperis rasti plano informaciją
  const getDestinationInfo = (id: string) => {
    return db.destinations.find((d) => d.id.toLowerCase() === id.toLowerCase());
  };

  const getFlagEmoji = (countryCode: string) => {
    if (!countryCode || countryCode.length !== 2) return "🌍";
    const codePoints = countryCode
      .toUpperCase()
      .split("")
      .map((char) => 127397 + char.charCodeAt(0));
    return String.fromCodePoint(...codePoints);
  };

  return (
    <main className="flex-1 flex flex-col bg-white min-h-[calc(100vh-88px)] pb-32 relative">
      <div className="flex-1 flex flex-col max-w-4xl w-full mx-auto px-6 py-4 md:py-8">
        
        {/* Header / Intro */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-10 flex flex-col items-center"
        >
          <div className="w-16 h-16 bg-saily/20 rounded-full flex items-center justify-center text-3xl mb-4 shadow-inner">
            ✨
          </div>
          <h1 className="text-4xl font-bold tracking-tight mb-2">Smart Search</h1>
          <p className="text-zinc-500">
            Find travel plans or product help instantly.
          </p>
        </motion.div>

        {/* Chat Area */}
        <div className="flex flex-col gap-6">
          {messages.map((msg, index) => {
            const dest = msg.planId ? getDestinationInfo(msg.planId) : null;

            return (
              <motion.div 
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.3 }}
                key={index} 
                className={`flex gap-4 items-end ${msg.role === "user" ? "flex-row-reverse" : "flex-row"}`}
              >
                {msg.role === "assistant" && (
                  <div className="w-10 h-10 rounded-full bg-saily flex-shrink-0 flex items-center justify-center text-xl shadow-sm border border-saily-hover">
                    ✨
                  </div>
                )}
                
                <div className="flex flex-col gap-3 max-w-[80%]">
                  <div 
                    className={`p-5 rounded-3xl shadow-sm leading-relaxed whitespace-pre-wrap ${
                      msg.role === "user" 
                        ? "bg-zinc-900 text-white rounded-br-sm" 
                        : "bg-zinc-50 border border-zinc-100 text-zinc-800 rounded-bl-sm"
                    }`}
                  >
                    {msg.content}
                  </div>

                  {/* Interaktyvi AI Kortelė (Actionable Card) */}
                  {dest && (
                    <motion.div 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      transition={{ delay: 0.3 }}
                      className="bg-white border-2 border-saily/30 rounded-2xl p-4 shadow-sm flex items-center justify-between gap-4 w-full"
                    >
                      <div className="flex items-center gap-4">
                        <div className="text-4xl bg-zinc-50 w-12 h-12 rounded-full flex items-center justify-center border border-zinc-100">
                          {dest.type === "country" ? getFlagEmoji(dest.code) : "🌍"}
                        </div>
                        <div>
                          <h4 className="font-bold text-lg">{dest.name} eSIM</h4>
                          <p className="text-sm text-zinc-500">Starts from US${Math.min(...dest.plans.map(p => p.price))}</p>
                        </div>
                      </div>
                      <Link 
                        href={`/plans/${dest.id}`}
                        className="bg-black hover:bg-zinc-800 text-white font-bold py-2 px-4 rounded-full transition-colors whitespace-nowrap"
                      >
                        View Plans
                      </Link>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            );
          })}
          
          {isLoading && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex gap-4 items-end"
            >
              <div className="w-10 h-10 rounded-full bg-saily flex-shrink-0 flex items-center justify-center text-xl shadow-sm border border-saily-hover">
                ✨
              </div>
              <div className="bg-zinc-50 border border-zinc-100 p-5 rounded-3xl rounded-bl-sm text-zinc-500 shadow-sm flex gap-1">
                <span className="animate-bounce">●</span>
                <span className="animate-bounce" style={{ animationDelay: "0.2s" }}>●</span>
                <span className="animate-bounce" style={{ animationDelay: "0.4s" }}>●</span>
              </div>
            </motion.div>
          )}
        </div>

        {/* Fixed Input Box Area at the bottom of the screen */}
        <div className="fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-md border-t border-zinc-100 p-4 z-50">
          <div className="max-w-3xl mx-auto flex flex-col gap-2">
            
            {/* Action Chips / Suggestions - rodomi virš įvesties lauko, jei tuščia */}
            {messages.length <= 1 && (
              <div className="flex flex-wrap gap-2 justify-center mb-2">
                <button 
                  onClick={() => handleSendMessage("Do you have plans for USA?")}
                  className="text-xs font-semibold text-zinc-500 bg-white hover:bg-zinc-50 hover:text-black border border-zinc-200 px-3 py-1.5 rounded-full transition-colors whitespace-nowrap"
                >
                  🇺🇸 USA Plans?
                </button>
                <button 
                  onClick={() => handleSendMessage("Find me the cheapest plan for Europe")}
                  className="text-xs font-semibold text-zinc-500 bg-white hover:bg-zinc-50 hover:text-black border border-zinc-200 px-3 py-1.5 rounded-full transition-colors whitespace-nowrap"
                >
                  🌍 Europe Plans?
                </button>
              </div>
            )}

            <div className="relative group">
              <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none transition-colors group-focus-within:text-saily">
                <span className="text-xl">💬</span>
              </div>
              
              <input 
                type="text" 
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                disabled={isLoading}
                placeholder={isLoading ? "AI is thinking..." : "E.g. I need data in Japan..."}
                className="w-full bg-white border-2 border-zinc-200 focus:border-saily focus:ring-4 focus:ring-saily/10 rounded-full py-4 pl-12 pr-28 text-base outline-none transition-all shadow-sm disabled:opacity-50"
              />
              
              <button 
                onClick={() => handleSendMessage(inputValue)}
                disabled={isLoading || !inputValue.trim()}
                className="absolute inset-y-2 right-2 bg-saily hover:bg-saily-hover disabled:bg-zinc-200 disabled:text-zinc-400 text-black font-bold px-4 rounded-full transition-all flex items-center shadow-sm"
              >
                Send
              </button>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}
