"use client";

import { useState } from "react";
import Link from "next/link";
import db from "@/data/db.json";

type Tab = "country" | "region" | "ultra";

export default function Plans() {
  const [activeTab, setActiveTab] = useState<Tab>("country");
  const [searchQuery, setSearchQuery] = useState("");

  // Helper to get flag emoji from 2-letter country code
  const getFlagEmoji = (countryCode: string) => {
    if (!countryCode || countryCode.length !== 2) return "🌍";
    const codePoints = countryCode
      .toUpperCase()
      .split("")
      .map((char) => 127397 + char.charCodeAt(0));
    return String.fromCodePoint(...codePoints);
  };

  const countries = db.destinations.filter((d) => d.type === "country");
  const regions = db.destinations.filter((d) => d.type === "region" || d.type === "global");
  const ultra = db.destinations.filter((d) => d.type === "ultra");

  const getLowestPrice = (plans: { price: number }[]) => {
    if (!plans || plans.length === 0) return 0;
    return Math.min(...plans.map((p) => p.price));
  };

  const filteredDestinations = () => {
    const list = activeTab === "country" ? countries : activeTab === "region" ? regions : ultra;
    if (!searchQuery.trim()) return list;
    return list.filter(d => 
      d.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
      d.id.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };

  return (
    <main className="flex-1 flex flex-col px-4 md:px-16 py-12 bg-zinc-50 relative min-h-screen">
      <div className="max-w-6xl w-full mx-auto flex flex-col md:flex-row gap-12">
        
        {/* Left Side: Title and Tabs */}
        <div className="w-full md:w-1/3 flex flex-col">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">
            Where are you <br /> traveling to?
          </h1>

          <div className="flex flex-col gap-3">
            <button
              onClick={() => { setActiveTab("country"); setSearchQuery(""); }}
              className={`flex items-center justify-between font-semibold py-4 px-6 rounded-2xl transition-all duration-300 w-full text-left ${
                activeTab === "country"
                  ? "bg-black text-white shadow-md"
                  : "bg-white text-zinc-900 hover:bg-zinc-100 border border-zinc-100"
              }`}
            >
              <span>Country</span>
              <span className={activeTab === "country" ? "text-white/50" : "text-zinc-400"}>→</span>
            </button>
            
            <button
              onClick={() => { setActiveTab("region"); setSearchQuery(""); }}
              className={`flex items-center justify-between font-semibold py-4 px-6 rounded-2xl transition-all duration-300 w-full text-left ${
                activeTab === "region"
                  ? "bg-black text-white shadow-md"
                  : "bg-white text-zinc-900 hover:bg-zinc-100 border border-zinc-100"
              }`}
            >
              <span>Region</span>
              <span className={activeTab === "region" ? "text-white/50" : "text-zinc-400"}>→</span>
            </button>

            <button
              onClick={() => { setActiveTab("ultra"); setSearchQuery(""); }}
              className={`flex items-center justify-between font-semibold py-4 px-6 rounded-2xl transition-all duration-300 w-full shadow-sm text-left ${
                activeTab === "ultra"
                  ? "bg-saily-hover text-black shadow-md border border-saily-hover"
                  : "bg-saily text-black hover:bg-saily-hover border border-saily"
              }`}
            >
              <span className="flex items-center gap-2">
                <span>✨</span> Ultra Plan
              </span>
              <span className="text-black/50">→</span>
            </button>
          </div>
        </div>

        {/* Right Side: Search and List */}
        <div className="w-full md:w-2/3">
          {/* Search Bar */}
          <div className="relative mb-6">
            <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-zinc-400">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input 
              type="text"
              placeholder={`Search ${activeTab}...`}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border border-zinc-100 rounded-2xl py-4 pl-12 pr-4 shadow-sm outline-none focus:ring-2 focus:ring-saily transition-all"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {filteredDestinations().length > 0 ? (
              filteredDestinations().map((dest) => (
                <Link
                  key={dest.id}
                  href={`/plans/${dest.id}`}
                  className={`flex items-center p-4 rounded-2xl shadow-sm border transition-all text-left ${
                    activeTab === "ultra" 
                    ? "bg-gradient-to-r from-saily/20 to-white border-saily/30 w-full sm:col-span-2" 
                    : "bg-white border-zinc-100 hover:shadow-md hover:border-zinc-200"
                  }`}
                >
                  <div className={`w-12 h-12 flex flex-col items-center justify-center rounded-full mr-4 ${activeTab === "ultra" ? "bg-saily text-2xl" : "bg-zinc-50"}`}>
                    {activeTab === "country" ? getFlagEmoji(dest.code) : "🌍"}
                    {activeTab === "region" && <span className="text-[10px] leading-tight font-bold text-zinc-500">{dest.code}</span>}
                  </div>
                  <div className="flex flex-col">
                    <span className="font-bold text-lg">{dest.name}</span>
                    <span className="text-zinc-500 text-sm">
                      From US${getLowestPrice(dest.plans)} {dest.countriesCount ? `• ${dest.countriesCount} countries` : ""}
                    </span>
                  </div>
                </Link>
              ))
            ) : (
              <div className="col-span-full py-20 text-center flex flex-col items-center gap-4">
                <span className="text-5xl">🔍</span>
                <p className="text-zinc-500 font-medium">No destinations found matching "{searchQuery}"</p>
                <button 
                  onClick={() => setSearchQuery("")}
                  className="text-saily font-bold hover:underline"
                >
                  Clear search
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
