"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden flex items-center ml-4">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-zinc-900"
        aria-label="Toggle Menu"
      >
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {isOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-[88px] left-0 right-0 bg-white border-b border-zinc-100 shadow-xl z-50 p-6 flex flex-col gap-6 overflow-hidden"
          >
            <Link href="/plans" onClick={() => setIsOpen(false)} className="text-xl font-bold">Plans</Link>
            <Link href="/smart-search" onClick={() => setIsOpen(false)} className="text-xl font-bold text-saily">Smart Search ✨</Link>
            <Link href="/help" onClick={() => setIsOpen(false)} className="text-xl font-bold">Help</Link>
            
            <div className="h-px bg-zinc-100 my-2"></div>
            
            <p className="text-sm font-bold text-zinc-400 uppercase tracking-wider">Resources</p>
            <div className="flex flex-col gap-4 pl-2 border-l-2 border-saily/30">
              <Link href="/resources/what-is-esim" onClick={() => setIsOpen(false)} className="text-zinc-600 font-medium">What is an eSIM?</Link>
              <Link href="/resources/blog" onClick={() => setIsOpen(false)} className="text-zinc-600 font-medium">Blog</Link>
              <Link href="/resources/about-us" onClick={() => setIsOpen(false)} className="text-zinc-600 font-medium">About Us</Link>
            </div>
            
            <Link 
              href="/smart-search" 
              onClick={() => setIsOpen(false)}
              className="w-full text-center bg-saily hover:bg-saily-hover text-black font-bold py-4 rounded-full mt-4 block"
            >
              Get Started
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
