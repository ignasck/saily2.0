import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-zinc-950 text-zinc-400 py-16 px-8 md:px-16 mt-auto">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-12">
        <div className="flex flex-col gap-6 md:w-1/3">
          <Link href="/" className="text-3xl font-bold tracking-tighter text-white">
            Saily <span className="text-saily">2.0</span>
          </Link>
          <p className="text-zinc-500 max-w-sm leading-relaxed">
            AI-powered travel assistant for the modern explorer. Stay connected anywhere in the world with instant eSIMs.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:w-2/3">
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-bold">Product</h4>
            <Link href="/plans" className="hover:text-saily transition-colors">Global Plans</Link>
            <Link href="/smart-search" className="hover:text-saily transition-colors">Smart Search ✨</Link>
            <Link href="/help" className="hover:text-saily transition-colors">Help Center</Link>
          </div>
          
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-bold">Company</h4>
            <Link href="/resources/about-us" className="hover:text-saily transition-colors">About Us</Link>
            <Link href="/resources/careers" className="hover:text-saily transition-colors">Careers</Link>
            <Link href="/resources/press" className="hover:text-saily transition-colors">Press</Link>
          </div>
          
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-bold">Legal</h4>
            <Link href="#" className="hover:text-saily transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-saily transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-saily transition-colors">Cookies</Link>
          </div>
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto mt-16 pt-8 border-t border-zinc-800 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm">© {new Date().getFullYear()} Saily 2.0. All rights reserved.</p>
        <div className="flex gap-4">
           {/* Social mock icons */}
           <div className="w-8 h-8 rounded-full bg-zinc-800 hover:bg-saily hover:text-black flex items-center justify-center transition-colors cursor-pointer text-sm font-bold">𝕏</div>
           <div className="w-8 h-8 rounded-full bg-zinc-800 hover:bg-saily hover:text-black flex items-center justify-center transition-colors cursor-pointer text-sm font-bold">in</div>
           <div className="w-8 h-8 rounded-full bg-zinc-800 hover:bg-saily hover:text-black flex items-center justify-center transition-colors cursor-pointer text-sm font-bold">f</div>
        </div>
      </div>
    </footer>
  );
}
