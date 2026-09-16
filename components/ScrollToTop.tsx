"use client";

import React, { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const { isAr } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      // Show button once user scrolls down past 350px
      if (window.scrollY > 350) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const label = isAr ? "العودة للأعلى" : "Back to top";

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label={label}
      title={label}
      className={`fixed bottom-6 right-6 z-40 w-12 h-12 rounded-full bg-[#0d0d0d]/90 hover:bg-[#c8ff00] text-zinc-300 hover:text-black border border-zinc-700 hover:border-[#c8ff00] backdrop-blur-md shadow-[0_6px_25px_rgba(0,0,0,0.85)] hover:shadow-[0_0_30px_rgba(200,255,0,0.55)] flex items-center justify-center transition-all duration-300 cursor-pointer active:scale-90 group ${
        isVisible
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <ArrowUp className="w-5 h-5 stroke-[2.5] transition-transform duration-300 group-hover:-translate-y-1" />
    </button>
  );
}
