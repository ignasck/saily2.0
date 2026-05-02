import Link from "next/link";

export default function Home() {
  return (
    <>

      <main className="flex-1 flex flex-col items-center">
        {/* Hero Section */}
        <section className="w-full flex flex-col items-center justify-center text-center px-4 py-20 md:py-32">
          <div className="max-w-4xl flex flex-col items-center space-y-10">
            <div className="inline-block px-4 py-1.5 rounded-full bg-yellow-50 text-yellow-800 font-medium text-sm mb-4">
              ✨ Your AI-Powered Travel Assistant
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight">
              Travel smarter,<br />
              <span className="relative">
                not harder.
                <span className="absolute bottom-2 left-0 w-full h-3 bg-saily/40 -z-10 rounded-full"></span>
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-zinc-500 max-w-2xl leading-relaxed">
              Planning a trip shouldn't be stressful. Let our AI analyze your preferences, 
              recommend the perfect plans, and organize your itinerary in seconds.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full justify-center mt-8">
              <Link href="/plans" className="bg-saily hover:bg-saily-hover text-black font-semibold py-4 px-8 rounded-2xl text-lg transition-all duration-300 shadow-sm hover:shadow-md w-full sm:w-auto text-center">
                Find my perfect plan
              </Link>
            </div>
          </div>
        </section>

        {/* Why Choose Saily Section */}
        <section className="w-full max-w-7xl px-8 md:px-16 py-20 border-t border-zinc-100">
          <p className="text-zinc-400 font-medium mb-2">Why choose Saily?</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-16">Stay connected while traveling</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-16">
            {/* Feature 1 */}
            <div className="flex flex-col gap-4">
              <div className="w-8 h-8 text-zinc-900">
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-xl font-bold">International data plans</h3>
              <p className="text-zinc-500 leading-relaxed">
                Get cellular data that works for your budget and itinerary. From 1 GB to unlimited plans, Saily's got you covered!
              </p>
            </div>

            {/* Feature 2 */}
            <div className="flex flex-col gap-4">
              <div className="w-8 h-8 text-zinc-900">
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold">Easy to use</h3>
              <p className="text-zinc-500 leading-relaxed">
                Just download the Saily eSIM app, install the eSIM, and buy an eSIM data plan — it will activate automatically the moment you reach your destination.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="flex flex-col gap-4">
              <div className="w-8 h-8 text-zinc-900">
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold">Avoid roaming charges</h3>
              <p className="text-zinc-500 leading-relaxed">
                If you want to avoid costly roaming, eSIM technology offers a good alternative. Know how much your internet connection will cost before you take off!
              </p>
            </div>

            {/* Feature 4 */}
            <div className="flex flex-col gap-4">
              <div className="w-8 h-8 text-zinc-900">
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1V5a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1V5a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2" />
                </svg>
              </div>
              <h3 className="text-xl font-bold">One eSIM for all your travels</h3>
              <p className="text-zinc-500 leading-relaxed">
                Add new destinations to your existing Saily eSIM — no need to install new eSIMs every time. Just top up and connect!
              </p>
            </div>

            {/* Feature 5 */}
            <div className="flex flex-col gap-4">
              <div className="w-8 h-8 text-zinc-900">
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
              </div>
              <h3 className="text-xl font-bold">Get mobile data usage alerts</h3>
              <p className="text-zinc-500 leading-relaxed">
                Don't risk running out of eSIM data at the worst possible moment — we'll notify you when you've used up 80% of your plan.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="flex flex-col gap-4">
              <div className="w-8 h-8 text-zinc-900">
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <h3 className="text-xl font-bold">Global and regional plans</h3>
              <p className="text-zinc-500 leading-relaxed">
                Stay online wherever you go — get a Global eSIM data plan or an eSIM data plan for Europe to explore entire regions and beyond.
              </p>
            </div>
          </div>
        </section>
        {/* How Does Saily Work Section */}
        <section className="w-full max-w-7xl px-8 md:px-16 py-20 border-t border-zinc-100 bg-zinc-50/30">
          <p className="text-zinc-400 font-medium mb-2">How to use the Saily eSIM service</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How does Saily work?</h2>
          <p className="text-zinc-500 mb-12">
            Don't have the Saily eSIM app yet? Download it from the App Store or Google Play.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="bg-white rounded-3xl border border-zinc-100 p-8 shadow-sm flex flex-col gap-6">
              <div className="w-10 h-10 rounded-full border border-zinc-100 flex items-center justify-center font-bold text-zinc-400">1</div>
              <div>
                <h3 className="text-xl font-bold mb-3 leading-tight">Choose a Saily data plan for your trip</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">Select your destination and pick your travel eSIM data plan.</p>
              </div>
              {/* Visual Mockup for Step 1 */}
              <div className="mt-4 flex flex-col gap-3 opacity-50">
                <div className="h-14 bg-zinc-50 rounded-xl border border-zinc-100"></div>
                <div className="h-14 bg-white rounded-xl border-2 border-zinc-900 flex items-center px-4 gap-3">
                  <div className="w-4 h-4 rounded-full border-4 border-zinc-900"></div>
                  <div className="flex flex-col">
                    <span className="text-xs font-bold">3 GB</span>
                    <span className="text-[10px] text-zinc-500">30 days</span>
                  </div>
                </div>
                <div className="h-14 bg-zinc-50 rounded-xl border border-zinc-100"></div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-white rounded-3xl border border-zinc-100 p-8 shadow-sm flex flex-col gap-6">
              <div className="w-10 h-10 rounded-full border border-zinc-100 flex items-center justify-center font-bold text-zinc-400">2</div>
              <div>
                <h3 className="text-xl font-bold mb-3 leading-tight">Download Saily and set up your eSIM</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">Set up the eSIM on your device by following the instructions in the app.</p>
              </div>
              {/* Visual Mockup for Step 2 */}
              <div className="mt-4 flex-grow flex items-center justify-center bg-zinc-50/50 rounded-2xl p-8">
                <div className="flex flex-col items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-saily flex items-center justify-center shadow-sm">
                    <svg className="w-8 h-8 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="font-bold text-sm">eSIM installed</span>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-white rounded-3xl border border-zinc-100 p-8 shadow-sm flex flex-col gap-6">
              <div className="w-10 h-10 rounded-full border border-zinc-100 flex items-center justify-center font-bold text-zinc-400">3</div>
              <div>
                <h3 className="text-xl font-bold mb-3 leading-tight">Enjoy staying connected!</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">Your plan will activate when you reach your destination or 30 days after purchase.</p>
              </div>
              {/* Visual Mockup for Step 3 */}
              <div className="mt-4 bg-zinc-50/50 rounded-2xl p-4 flex flex-col gap-4">
                <div className="bg-white p-3 rounded-xl border border-zinc-100 shadow-sm flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-xl">🇹🇭</span>
                    <span className="font-bold text-xs">Thailand</span>
                  </div>
                  <span className="text-[10px] bg-green-50 text-green-700 px-2 py-0.5 rounded-full font-bold">Active</span>
                </div>
                <div className="flex justify-between text-[10px] px-1">
                  <span className="text-zinc-400">Remaining data</span>
                  <span className="font-bold">5 / 5 GB</span>
                </div>
                <div className="h-1 bg-zinc-200 rounded-full overflow-hidden">
                  <div className="h-full bg-green-500 w-full"></div>
                </div>
                <div className="flex justify-between text-[10px] px-1">
                  <span className="text-zinc-400">Expires in</span>
                  <span className="font-bold">29 days, 7 hours</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <footer className="py-8 text-center text-zinc-400 text-sm">
        &copy; {new Date().getFullYear()} Saily 2.0 clone. For educational purposes.
      </footer>
    </>
  );
}
