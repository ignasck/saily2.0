"use client";

import { useParams, useRouter } from "next/navigation";
import Link from "next/link";

const resourcesData: Record<string, { title: string; description: string; content?: string }> = {
  "what-is-esim": {
    title: "What is an eSIM?",
    description: "Discover how an eSIM works and why it’s useful.",
    content: `How does an eSIM work?

An eSIM uses preinstalled software on your device to work just like a physical SIM. Once you activate it, you can connect to a cell network, make calls, and use mobile data. Most modern phones will have built-in eSIMs, but check our list of eSIM-compatible phones to see if yours does.

To start using an eSIM, just buy an eSIM plan and complete a quick setup. No need to remove your current SIM card — it can stay where it is, whether you decide to keep using it or not.`
  },
  "blog": {
    title: "Blog",
    description: "Read articles, guides, and product updates.",
    content: "Welcome to our blog! Here you will find the best tips for traveling abroad, saving on roaming charges, and getting the most out of your Saily eSIM. Stay tuned for new posts."
  },
  "about-us": {
    title: "About Us",
    description: "Learn more about who we are and what we do.",
    content: "Saily is a modern eSIM provider designed to make global connectivity seamless. Our mission is to ensure travelers never have to worry about expensive roaming charges or hunting for local SIM cards again."
  },
  "press": {
    title: "Press Area",
    description: "The latest news, insights, and brand assets.",
    content: "Are you a journalist or a media representative? Find our latest press releases, brand guidelines, and high-resolution logos here. For media inquiries, please contact press@saily-clone.com."
  },
  "affiliate": {
    title: "Affiliate Program",
    description: "Partner with Saily and earn commissions.",
    content: "Join the Saily Affiliate Program today! If you have a travel blog, YouTube channel, or a large social media following, you can earn a percentage of every sale made through your unique referral link."
  },
  "creators": {
    title: "Creators Program",
    description: "Promote Saily and get paid for every referral.",
    content: "Are you a digital creator? The Saily Creators Program gives you exclusive access to sponsorships, free eSIMs for your travels, and the opportunity to monetize your audience."
  },
  "reviews": {
    title: "Saily Reviews",
    description: "Find out what people are saying about us!",
    content: "⭐️⭐️⭐️⭐️⭐️ 'Saily completely changed how I travel. I had 5G connection the moment I landed in Tokyo!' - Alex T.\n\n⭐️⭐️⭐️⭐️⭐️ 'Super easy to install and the prices are unbeatable.' - Maria S."
  },
  "careers": {
    title: "Careers",
    description: "Join our team and build the future of travel.",
    content: "We are always looking for talented engineers, designers, and marketers to join our remote-first team. Check out our open positions below and help us connect the world."
  }
};

export default function ResourcePage() {
  const params = useParams();
  const router = useRouter();
  const slug = params?.slug as string;
  const [activeTab, setActiveTab] = (params?.slug === "what-is-esim") ? (require("react").useState("iphone")) : [null, null];
  
  const pageData = resourcesData[slug];

  if (!pageData) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh]">
        <h1 className="text-3xl font-bold mb-4">Page not found</h1>
        <p className="text-zinc-500 mb-8">The resource you are looking for does not exist.</p>
        <button onClick={() => router.push("/")} className="bg-black text-white px-6 py-3 rounded-full font-bold hover:bg-zinc-800 transition-colors">
          Go to Homepage
        </button>
      </div>
    );
  }

  return (
    <main className="flex-1 flex flex-col bg-white">
      {/* Hero Section */}
      <section className="bg-zinc-50 py-20 px-8 md:px-16 border-b border-zinc-100">
        <div className="max-w-4xl mx-auto">
          <Link href="/" className="text-zinc-500 hover:text-black transition-colors mb-8 inline-flex items-center gap-2 text-sm font-medium">
            <span>←</span> Back to home
          </Link>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">{pageData.title}</h1>
          <p className="text-xl text-zinc-600 max-w-2xl leading-relaxed">{pageData.description}</p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 px-8 md:px-16 flex-1">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white p-8 md:p-12 rounded-3xl border border-zinc-100 shadow-sm">
            <h2 className="text-2xl font-bold mb-6">Overview</h2>
            <div className="prose prose-zinc max-w-none text-lg text-zinc-600 whitespace-pre-wrap leading-relaxed">
              {pageData.content}
            </div>
            
            {slug === "what-is-esim" && (
              <div className="mt-16 pt-16 border-t border-zinc-100">
                <p className="text-zinc-400 font-medium mb-2 text-sm">How to use the Saily eSIM service</p>
                <h2 className="text-4xl font-bold mb-4">How to set up an eSIM</h2>
                <p className="text-zinc-500 mb-8">Follow these steps to start using an eSIM on your iPhone or Android.</p>
                
                {/* Tabs */}
                <div className="flex gap-4 mb-12">
                  <button 
                    onClick={() => setActiveTab("iphone")}
                    className={`${activeTab === "iphone" ? "bg-black text-white" : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200"} px-6 py-2 rounded-full font-bold text-sm transition-colors`}
                  >
                    On iPhone
                  </button>
                  <button 
                    onClick={() => setActiveTab("android")}
                    className={`${activeTab === "android" ? "bg-black text-white" : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200"} px-6 py-2 rounded-full font-bold text-sm transition-colors`}
                  >
                    On Android
                  </button>
                  <button 
                    onClick={() => setActiveTab("qr")}
                    className={`${activeTab === "qr" ? "bg-black text-white" : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200"} px-6 py-2 rounded-full font-bold text-sm transition-colors`}
                  >
                    With a QR code
                  </button>
                </div>

                <h3 className="text-2xl font-bold mb-10">
                  {activeTab === "iphone" && "Set up an eSIM on your iPhone with the Saily app"}
                  {activeTab === "android" && "Set up an eSIM on your Android with the Saily app"}
                  {activeTab === "qr" && "Set up an eSIM using a QR code"}
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Step 1 */}
                  <div className="bg-zinc-50/50 rounded-2xl p-6 border border-zinc-100">
                    <span className="text-zinc-300 font-bold mb-4 block">1</span>
                    {activeTab === "qr" ? (
                      <>
                        <h4 className="font-bold mb-2">Scan the QR code to download Saily</h4>
                        <p className="text-zinc-500 text-xs mb-6">Use your phone to <span className="underline cursor-pointer">scan the QR and download the Saily app</span>.</p>
                      </>
                    ) : (
                      <>
                        <h4 className="font-bold mb-2">Pick an eSIM data plan for your trip</h4>
                        <p className="text-zinc-500 text-xs mb-6">Select the country you're heading to and choose a plan.</p>
                      </>
                    )}
                    
                    {/* Visual 1 */}
                    {activeTab === "qr" ? (
                      <div className="bg-white rounded-xl border border-zinc-200 p-4 flex items-center justify-center aspect-square max-w-[120px] mx-auto">
                        <div className="w-full h-full bg-zinc-900 rounded flex items-center justify-center">
                          <div className="w-3/4 h-3/4 bg-white rounded-sm flex flex-wrap p-1">
                            {[...Array(9)].map((_, i) => <div key={i} className="w-1/3 h-1/3 border border-zinc-100 bg-zinc-900"></div>)}
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="bg-white rounded-xl border border-zinc-200 p-2 flex flex-col gap-2 opacity-60">
                        <div className="h-8 bg-zinc-50 rounded-lg"></div>
                        <div className={`h-10 bg-white rounded-lg border-2 ${activeTab === "android" ? "border-yellow-400" : "border-zinc-900"} flex items-center px-2 gap-2`}>
                          <div className={`w-3 h-3 rounded-full border-2 ${activeTab === "android" ? "border-yellow-400" : "border-zinc-900"}`}></div>
                          <div className="flex flex-col">
                            <span className="text-[10px] font-bold">{activeTab === "android" ? "5 GB" : "3 GB"}</span>
                            <span className="text-[8px] text-zinc-400">30 days</span>
                          </div>
                        </div>
                        <div className="h-8 bg-zinc-50 rounded-lg"></div>
                      </div>
                    )}
                  </div>

                  {/* Step 2 */}
                  <div className="bg-zinc-50/50 rounded-2xl p-6 border border-zinc-100">
                    <span className="text-zinc-300 font-bold mb-4 block">2</span>
                    {activeTab === "qr" ? (
                      <>
                        <h4 className="font-bold mb-2">Buy an eSIM data plan for your trip</h4>
                        <p className="text-zinc-500 text-xs mb-6">Get a mobile data plan for the country you'll be visiting.</p>
                      </>
                    ) : (
                      <>
                        <h4 className="font-bold mb-2">Download the Saily eSIM app</h4>
                        <p className="text-zinc-500 text-xs mb-6">Get the app, tap "Install eSIM," and follow the steps on the screen {activeTab === "android" ? "to set it up." : "."}</p>
                      </>
                    )}

                    {/* Visual 2 */}
                    {activeTab === "android" ? (
                      <div className="bg-white rounded-xl border border-zinc-200 p-4 flex items-center justify-center">
                        <div className="flex gap-2">
                          <div className="w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center text-xs font-bold">1</div>
                          <div className="w-8 h-8 rounded-full bg-zinc-100 flex items-center justify-center text-xs font-bold text-zinc-400">2</div>
                          <div className="w-8 h-8 rounded-full bg-zinc-100 flex items-center justify-center text-xs font-bold text-zinc-400">3</div>
                        </div>
                      </div>
                    ) : activeTab === "qr" ? (
                      <div className="bg-white rounded-xl border border-zinc-200 p-2 flex flex-col gap-2 opacity-60">
                        <div className="h-14 bg-zinc-50 rounded-lg flex items-center px-3 gap-2">
                           <div className="w-6 h-6 rounded-full bg-zinc-200"></div>
                           <div className="h-2 w-20 bg-zinc-200 rounded-full"></div>
                        </div>
                      </div>
                    ) : (
                      <div className="bg-white rounded-xl border border-zinc-200 p-4 flex items-center justify-center">
                        <div className="flex flex-col items-center gap-2">
                          <div className="w-10 h-10 rounded-full bg-saily flex items-center justify-center">
                            <svg className="w-5 h-5 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span className="text-[10px] font-bold">eSIM installed</span>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Step 3 */}
                  <div className="bg-zinc-50/50 rounded-2xl p-6 border border-zinc-100">
                    <span className="text-zinc-300 font-bold mb-4 block">3</span>
                    <h4 className="font-bold mb-2">Your plan will automatically activate</h4>
                    <p className="text-zinc-500 text-xs mb-6">
                      {activeTab === "qr" ? "Get online the moment you arrive at your destination." : "Get ready for your trip — your plan will activate when you arrive."}
                    </p>

                    {/* Visual 3 */}
                    {activeTab === "android" ? (
                      <div className="bg-white rounded-xl border border-zinc-200 p-4 flex items-center justify-center">
                        <div className="w-12 h-12 rounded-full bg-yellow-400 flex items-center justify-center">
                           <svg className="w-6 h-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                      </div>
                    ) : (
                      <div className="bg-white rounded-xl border border-zinc-200 p-3 flex flex-col gap-2">
                        <div className="flex justify-between items-center mb-1">
                          <div className="flex items-center gap-2">
                            <span className="text-sm">🇹🇭</span>
                            <span className="text-[10px] font-bold">Thailand</span>
                          </div>
                          <span className="text-[8px] bg-green-50 text-green-700 px-1 rounded-full font-bold">Active</span>
                        </div>
                        <div className="flex justify-between text-[8px]">
                          <span className="text-zinc-400">Remaining data</span>
                          <span className="font-bold text-zinc-600">5 / 5 GB</span>
                        </div>
                        <div className="h-1 bg-zinc-100 rounded-full overflow-hidden">
                          <div className="h-full bg-green-500 w-full"></div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}
            
            {slug === "blog" && (
              <div className="mt-8">
                {/* Popular Articles */}
                <h2 className="text-3xl font-bold mb-10">Popular articles</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-20">
                  {[
                    {
                      title: "10+ fun and surprising facts about France",
                      category: "Travel",
                      date: "Mar 31, 2026",
                      readTime: "17 min read",
                      author: "Malcolm Higgins",
                      image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&q=80&w=800"
                    },
                    {
                      title: "How much data Netflix uses and tips to reduce data consumption",
                      category: "Mobile Connectivity",
                      date: "Mar 30, 2026",
                      readTime: "10 min read",
                      author: "Giedrė Palubinskaitė",
                      image: "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?auto=format&fit=crop&q=80&w=800"
                    },
                    {
                      title: "Data usage on an iPhone: How to check and reduce it",
                      category: "Device",
                      date: "Dec 31, 2025",
                      readTime: "11 min read",
                      author: "Malcolm Higgins",
                      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=800"
                    }
                  ].map((post, i) => (
                    <div key={i} className="group cursor-pointer">
                      <div className="relative aspect-[16/10] overflow-hidden rounded-2xl mb-4 bg-zinc-100">
                        <img src={post.image} alt={post.title} className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" />
                      </div>
                      <div className="flex flex-col gap-2">
                        <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest bg-zinc-50 self-start px-2 py-0.5 rounded-full">{post.category}</span>
                        <div className="flex gap-3 text-xs text-zinc-400 font-medium">
                          <span>{post.date}</span>
                          <span>•</span>
                          <span className="flex items-center gap-1">📖 {post.readTime}</span>
                        </div>
                        <h3 className="text-lg font-bold leading-tight group-hover:text-saily transition-colors">{post.title}</h3>
                        <div className="flex items-center gap-2 mt-2">
                          <div className="w-6 h-6 rounded-full bg-zinc-200 overflow-hidden">
                            <img src={`https://ui-avatars.com/api/?name=${post.author}&background=random`} alt={post.author} />
                          </div>
                          <span className="text-xs font-semibold text-zinc-500">{post.author}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Recent Articles */}
                <h2 className="text-3xl font-bold mb-10">Recent articles</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                  {[
                    {
                      title: "O2 roaming in the USA: Charges, packages, and coverage",
                      category: "Mobile Connectivity",
                      date: "Apr 27, 2026",
                      readTime: "14 min read",
                      author: "Ugnė Zieniūtė",
                      image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&q=80&w=800"
                    },
                    {
                      title: "Is it safe for Americans to travel to Turkey in 2026?",
                      category: "Travel",
                      date: "Apr 27, 2026",
                      readTime: "20 min read",
                      author: "Monika Grigutytė",
                      image: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&q=80&w=800"
                    },
                    {
                      title: "Safety tips for international students: How to stay alert and make your university experience fun",
                      category: "Travel",
                      date: "Apr 26, 2026",
                      readTime: "14 min read",
                      author: "Kamilė Vieželytė",
                      image: "https://images.unsplash.com/photo-1525921429624-479b6a26d84d?auto=format&fit=crop&q=80&w=800"
                    }
                  ].map((post, i) => (
                    <div key={i} className="group cursor-pointer">
                      <div className="relative aspect-[16/10] overflow-hidden rounded-2xl mb-4 bg-zinc-100">
                        <img src={post.image} alt={post.title} className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" />
                      </div>
                      <div className="flex flex-col gap-2">
                        <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest bg-zinc-50 self-start px-2 py-0.5 rounded-full">{post.category}</span>
                        <div className="flex gap-3 text-xs text-zinc-400 font-medium">
                          <span>{post.date}</span>
                          <span>•</span>
                          <span className="flex items-center gap-1">📖 {post.readTime}</span>
                        </div>
                        <h3 className="text-lg font-bold leading-tight group-hover:text-saily transition-colors">{post.title}</h3>
                        <div className="flex items-center gap-2 mt-2">
                          <div className="w-6 h-6 rounded-full bg-zinc-200 overflow-hidden">
                            <img src={`https://ui-avatars.com/api/?name=${post.author}&background=random`} alt={post.author} />
                          </div>
                          <span className="text-xs font-semibold text-zinc-500">{post.author}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="mt-12 pt-8 border-t border-zinc-100">
              <button onClick={() => router.back()} className="text-saily hover:text-saily-hover font-bold transition-colors">
                ← Go back
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
