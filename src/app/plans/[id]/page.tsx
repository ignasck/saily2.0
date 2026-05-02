"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import db from "@/data/db.json";
import Link from "next/link";

export default function DestinationPage() {
  const params = useParams();
  const router = useRouter();
  const id = params?.id as string;
  
  const dest = db.destinations.find((d) => d.id === id);
  const [selectedPlan, setSelectedPlan] = useState<any>(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    if (dest && dest.plans.length > 0) {
      setSelectedPlan(dest.plans[0]);
    }
  }, [dest]);

  if (!dest) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[50vh]">
        <h1 className="text-2xl font-bold">Destination not found</h1>
        <button onClick={() => router.back()} className="mt-4 text-saily hover:underline">
          Go back
        </button>
      </div>
    );
  }

  const getFlagEmoji = (countryCode: string) => {
    if (!countryCode || countryCode.length !== 2) return "🌍";
    const codePoints = countryCode
      .toUpperCase()
      .split("")
      .map((char) => 127397 + char.charCodeAt(0));
    return String.fromCodePoint(...codePoints);
  };

  const icon = dest.type === "country" ? getFlagEmoji(dest.code) : "🌍";

  return (
    <main className="flex-1 flex flex-col px-4 md:px-16 py-12 bg-white text-foreground min-h-screen">
      <div className="max-w-6xl w-full mx-auto flex flex-col lg:flex-row gap-12">
        
        {/* Left Content */}
        <div className="flex-1 flex flex-col">
          <Link href="/plans" className="text-zinc-500 hover:text-black transition-colors mb-8 inline-flex items-center gap-2">
            <span>←</span> Back to plans
          </Link>
          
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 bg-zinc-50 rounded-full flex items-center justify-center text-4xl shadow-sm border border-zinc-100">
              {icon}
            </div>
            <h1 className="text-4xl font-bold">{dest.name} eSIM</h1>
          </div>
          
          <p className="text-lg text-zinc-600 mb-10">
            Get a travel eSIM for {dest.name} and enjoy reliable and affordable internet access on your trip.
          </p>

          <h2 className="text-2xl font-bold mb-6">Get an eSIM data plan for {dest.name}</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-16">
            {dest.plans.map((plan: any, idx: number) => {
              const isSelected = selectedPlan?.gb === plan.gb && selectedPlan?.duration === plan.duration;
              const isBestChoice = idx === Math.floor(dest.plans.length / 2); // Mock best choice
              const originalPrice = (plan.price * 1.05).toFixed(2); // Mock original price for discount display
              
              return (
                <button
                  key={`${plan.gb}-${plan.duration}`}
                  onClick={() => setSelectedPlan(plan)}
                  className={`relative flex flex-col p-6 rounded-2xl border-2 transition-all text-left ${
                    isSelected
                      ? "border-saily bg-yellow-50/30"
                      : "border-zinc-200 hover:border-zinc-300 bg-white"
                  }`}
                >
                  {isBestChoice && (
                    <div className="absolute -top-3 left-6 bg-black text-white text-xs font-bold px-3 py-1 rounded-full">
                      Best Choice
                    </div>
                  )}
                  {plan.gb >= 10 && (
                    <div className="absolute -top-3 right-6 bg-green-100 text-green-800 text-xs font-bold px-3 py-1 rounded-full">
                      Save 5%
                    </div>
                  )}

                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <span className="block text-2xl font-bold">{plan.gb} GB</span>
                      <span className="block text-zinc-500">{plan.duration} days</span>
                    </div>
                  </div>
                  
                  <div className="mt-auto pt-4 border-t border-zinc-100 flex flex-col">
                    {plan.gb >= 10 ? (
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-zinc-400 line-through text-sm">US${originalPrice}</span>
                        <span className="text-xl font-bold">US${plan.price}</span>
                      </div>
                    ) : (
                      <span className="text-xl font-bold mb-1">US${plan.price}</span>
                    )}
                    <span className="text-saily text-sm font-semibold">✨ 3% in Saily credits</span>
                  </div>
                </button>
              );
            })}
          </div>

          <div className="flex flex-col gap-8">
            <div>
              <h3 className="text-xl font-bold mb-2">Can I activate my plan later?</h3>
              <p className="text-zinc-600">
                All plans have a 30-day activation period. If you get a plan today and don't activate it until a later date, it will be activated automatically.
              </p>
            </div>

            <div className="border-t border-zinc-100 pt-8">
              <h3 className="text-xl font-bold mb-4">Key features</h3>
              <ul className="list-disc pl-5 text-zinc-600 space-y-2">
                <li>Affordable data plans, starting from US${Math.min(...dest.plans.map((p: any) => p.price))}.</li>
                <li>Reliable connection from {dest.name}'s best networks.</li>
                <li>Works with all eSIM-compatible smartphones.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Right Sticky Sidebar (Checkout) */}
        <div className="w-full lg:w-1/3">
          <div className="sticky top-8 bg-zinc-50 rounded-3xl p-6 border border-zinc-100 shadow-sm flex flex-col">
            <div className="flex items-center gap-3 pb-6 border-b border-zinc-200 mb-6">
              <div className="text-3xl">{icon}</div>
              <h3 className="text-xl font-bold">{dest.name} eSIM</h3>
            </div>
            
            {selectedPlan && (
              <>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-lg font-bold">{selectedPlan.gb} GB</span>
                  <span className="text-lg font-bold">US${(selectedPlan.price * quantity).toFixed(2)}</span>
                </div>
                <div className="text-zinc-500 mb-6">{selectedPlan.duration} days</div>
                
                <div className="flex flex-col gap-2 mb-8">
                  <span className="text-sm font-semibold">Choose number of eSIMs</span>
                  <div className="flex items-center justify-between bg-white border border-zinc-200 rounded-xl p-2">
                    <button 
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="w-10 h-10 rounded-lg flex items-center justify-center hover:bg-zinc-100 font-bold"
                    >
                      -
                    </button>
                    <div className="flex flex-col items-center">
                      <span className="font-bold">{quantity}</span>
                      <span className="text-xs text-zinc-500">How many travelers?</span>
                    </div>
                    <button 
                      onClick={() => setQuantity(quantity + 1)}
                      className="w-10 h-10 rounded-lg flex items-center justify-center hover:bg-zinc-100 font-bold"
                    >
                      +
                    </button>
                  </div>
                </div>

                <button className="w-full bg-saily hover:bg-saily-hover text-black font-bold py-4 rounded-full transition-all shadow-sm hover:shadow-md mb-4 text-lg">
                  Go to Checkout
                </button>
                
                <div className="flex flex-col gap-3 text-sm text-zinc-500 font-medium">
                  <div className="flex items-center gap-2">
                    <span>📱</span> Device Compatibility
                  </div>
                  <div className="flex items-center gap-2">
                    <span>⭐️</span> 4.7 (97,400+ reviews)
                  </div>
                  <div className="flex items-center gap-2">
                    <span>🔒</span> Secure Payment Guaranteed
                  </div>
                </div>
              </>
            )}
          </div>
        </div>

      </div>
    </main>
  );
}
