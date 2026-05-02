import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import ConditionalFooter from "@/components/ConditionalFooter";
import MobileMenu from "@/components/MobileMenu";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Saily 2.0 - AI-Powered Travel Assistant",
  description: "Travel smarter with Saily 2.0 AI-powered travel assistant.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-white text-foreground">
        <header className="w-full flex items-center justify-between py-6 px-8 md:px-16">
          <Link href="/" className="text-2xl font-bold tracking-tighter">
            Saily <span className="text-saily">2.0</span>
          </Link>
          <nav className="hidden md:flex gap-8 font-medium items-center">
            
            {/* Resources Dropdown */}
            <div className="group relative py-6 -my-6">
              <Link href="#" className="hover:text-saily transition-colors flex items-center gap-1">
                Resources
                <svg className="w-4 h-4 text-zinc-400 group-hover:text-saily transition-transform group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
              
              {/* Mega Menu Container */}
              <div className="absolute top-[100%] -left-1/2 w-[600px] bg-white border border-zinc-100 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] rounded-2xl p-8 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 translate-y-2 group-hover:translate-y-0">
                <div className="grid grid-cols-2 gap-x-8 gap-y-8">
                  
                  {/* Column 1 */}
                  <div className="flex flex-col gap-6">
                    <Link href="/resources/what-is-esim" className="group/item flex flex-col gap-1.5">
                      <span className="font-bold text-zinc-900 group-hover/item:text-saily transition-colors">What is an eSIM?</span>
                      <span className="text-sm text-zinc-500 leading-relaxed">Discover how an eSIM works and why it’s useful.</span>
                    </Link>
                    <Link href="/resources/blog" className="group/item flex flex-col gap-1.5">
                      <span className="font-bold text-zinc-900 group-hover/item:text-saily transition-colors">Blog</span>
                      <span className="text-sm text-zinc-500 leading-relaxed">Read articles, guides, and product updates.</span>
                    </Link>
                    <Link href="/resources/about-us" className="group/item flex flex-col gap-1.5">
                      <span className="font-bold text-zinc-900 group-hover/item:text-saily transition-colors">About Us</span>
                      <span className="text-sm text-zinc-500 leading-relaxed">Learn more about who we are and what we do.</span>
                    </Link>
                    <Link href="/resources/press" className="group/item flex flex-col gap-1.5">
                      <span className="font-bold text-zinc-900 group-hover/item:text-saily transition-colors">Press Area</span>
                      <span className="text-sm text-zinc-500 leading-relaxed">The latest news, insights, and brand assets.</span>
                    </Link>
                  </div>

                  {/* Column 2 */}
                  <div className="flex flex-col gap-6">
                    <Link href="/resources/affiliate" className="group/item flex flex-col gap-1.5">
                      <span className="font-bold text-zinc-900 group-hover/item:text-saily transition-colors">Affiliate Program</span>
                      <span className="text-sm text-zinc-500 leading-relaxed">Partner with Saily and earn commissions.</span>
                    </Link>
                    <Link href="/resources/creators" className="group/item flex flex-col gap-1.5">
                      <span className="flex items-center gap-2 font-bold text-zinc-900 group-hover/item:text-saily transition-colors">
                        Creators Program
                        <span className="bg-zinc-100 text-zinc-800 text-[10px] px-2 py-0.5 rounded-full uppercase tracking-wider border border-zinc-200">New</span>
                      </span>
                      <span className="text-sm text-zinc-500 leading-relaxed">Promote Saily and get paid for every referral.</span>
                    </Link>
                    <Link href="/resources/reviews" className="group/item flex flex-col gap-1.5">
                      <span className="font-bold text-zinc-900 group-hover/item:text-saily transition-colors">Saily Reviews</span>
                      <span className="text-sm text-zinc-500 leading-relaxed">Find out what people are saying about us!</span>
                    </Link>
                    <Link href="/resources/careers" className="group/item flex flex-col gap-1.5">
                      <span className="font-bold text-zinc-900 group-hover/item:text-saily transition-colors">Careers</span>
                      <span className="text-sm text-zinc-500 leading-relaxed">Join our team and build the future of travel.</span>
                    </Link>
                  </div>

                </div>
              </div>
            </div>

            <Link href="/plans" className="hover:text-saily transition-colors">Plans</Link>
            <Link href="/smart-search" className="text-saily hover:text-saily-hover transition-colors font-bold">Smart Search ✨</Link>
            <Link href="/help" className="hover:text-saily transition-colors">Help</Link>
          </nav>
          <div className="hidden md:block">
            <Link href="/smart-search" className="inline-block bg-saily hover:bg-saily-hover text-black font-semibold py-3 px-6 rounded-full transition-all duration-300 shadow-sm hover:shadow-md">
              Get Started
            </Link>
          </div>
          <MobileMenu />
        </header>
        {children}
        <ConditionalFooter />
      </body>
    </html>
  );
}
