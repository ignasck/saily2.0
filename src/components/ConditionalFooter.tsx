"use client";

import { usePathname } from "next/navigation";
import Footer from "./Footer";

export default function ConditionalFooter() {
  const pathname = usePathname();
  
  // Paslepiame Footer'į Smart Search puslapyje, kad jis atrodytų kaip ChatGPT (Full-screen app)
  if (pathname === "/smart-search") {
    return null;
  }
  
  return <Footer />;
}
