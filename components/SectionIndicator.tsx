"use client";

import React, { useState, useEffect } from "react";
import { useLanguage } from "@/lib/LanguageContext";

interface SectionItem {
  id: string;
  labelAr: string;
  labelEn: string;
}

const SECTIONS: SectionItem[] = [
  { id: "hero", labelAr: "الرئيسية", labelEn: "Hero" },
  { id: "about", labelAr: "عن الكابتن", labelEn: "About" },
  { id: "process", labelAr: "طريقة العمل", labelEn: "Process" },
  { id: "certificates", labelAr: "الشهادات", labelEn: "Certifications" },
  { id: "services", labelAr: "الخدمات", labelEn: "Services" },
  { id: "packages", labelAr: "الباقات", labelEn: "Packages" },
  { id: "faq", labelAr: "الأسئلة الشائعة", labelEn: "FAQ" },
];

export default function SectionIndicator() {
  const [activeId, setActiveId] = useState<string>("hero");
  const { isAr } = useLanguage();

  useEffect(() => {
    let ticking = false;

    const updateActiveSection = () => {
      // 1. If user is at or near the very top of the page -> Always "hero"
      if (window.scrollY < 180) {
        setActiveId("hero");
        ticking = false;
        return;
      }

      // 2. If user is near the bottom of the page -> Always "faq"
      const isNearBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 120;
      if (isNearBottom) {
        setActiveId("faq");
        ticking = false;
        return;
      }

      // 3. Anchor line: 38% down from top of viewport
      const anchorPoint = window.innerHeight * 0.38;

      for (let i = SECTIONS.length - 1; i >= 0; i--) {
        const el = document.getElementById(SECTIONS[i].id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= anchorPoint) {
            setActiveId(SECTIONS[i].id);
            ticking = false;
            return;
          }
        }
      }

      setActiveId("hero");
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateActiveSection);
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    // Initial checks for immediate hydration and font/image settling
    updateActiveSection();
    const timer1 = setTimeout(updateActiveSection, 150);
    const timer2 = setTimeout(updateActiveSection, 600);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  const handleScrollTo = (id: string) => {
    if (id === "hero") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setActiveId("hero");
      return;
    }

    const element = document.getElementById(id);
    if (element) {
      const navOffset = 70;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = Math.max(0, elementPosition - navOffset);

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setActiveId(id);
    }
  };

  const isPlansSection = activeId === "packages";

  return (
    <>
      {/* 1. RIGHT SIDE INDICATOR: Slides OUT to the right and hides ONLY in section plans */}
      <aside
        aria-label="Section navigation indicator"
        className={`fixed right-3 sm:right-5 top-1/2 -translate-y-1/2 z-40 hidden sm:flex flex-col items-end gap-3.5 select-none transition-all duration-500 ease-out ${
          isPlansSection
            ? "translate-x-20 opacity-0 pointer-events-none"
            : "translate-x-0 opacity-100 pointer-events-auto"
        }`}
      >
        {SECTIONS.map((section) => {
          const isActive = activeId === section.id;
          const label = isAr ? section.labelAr : section.labelEn;

          return (
            <button
              key={`side-${section.id}`}
              type="button"
              onClick={() => handleScrollTo(section.id)}
              aria-label={`Scroll to ${label}`}
              className="group relative flex items-center justify-end py-1.5 px-1 focus:outline-none cursor-pointer"
            >
              {/* Tooltip on Hover to the left of the line */}
              <span className="absolute right-full mr-3.5 px-2.5 py-1 bg-[#0a0a0a]/95 border border-zinc-800 text-zinc-300 group-hover:text-white text-[11px] font-mono tracking-wider uppercase rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none shadow-[0_4px_16px_rgba(0,0,0,0.9)] translate-x-1 group-hover:translate-x-0">
                {label}
              </span>

              {/* Horizontal Indicator Line - Lights up when active & Expands on Hover */}
              <span
                className={`block rounded-full transition-all duration-300 ease-out ${
                  isActive
                    ? "w-8 sm:w-10 h-[3px] bg-[#c8ff00] shadow-[0_0_16px_#c8ff00,0_0_4px_#c8ff00] group-hover:w-12 sm:group-hover:w-14"
                    : "w-3.5 sm:w-4.5 h-[2px] bg-zinc-600/75 group-hover:w-8 sm:group-hover:w-10 group-hover:bg-[#c8ff00]/90 group-hover:shadow-[0_0_10px_rgba(200,255,0,0.6)]"
                }`}
              />
            </button>
          );
        })}
      </aside>

      {/* 2. BOTTOM FLOATING DOCK: Slides UP from the bottom ONLY in section plans */}
      <div
        aria-label="Section navigation bottom dock"
        className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-40 transition-all duration-500 ease-out select-none ${
          isPlansSection
            ? "translate-y-0 opacity-100 pointer-events-auto"
            : "translate-y-20 opacity-0 pointer-events-none"
        }`}
      >
        <div className="bg-[#0a0a0a]/95 backdrop-blur-md border border-zinc-800 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.9)] flex items-center gap-3 sm:gap-3.5">
          {SECTIONS.map((section) => {
            const isActive = activeId === section.id;
            const label = isAr ? section.labelAr : section.labelEn;

            return (
              <button
                key={`bottom-${section.id}`}
                type="button"
                onClick={() => handleScrollTo(section.id)}
                aria-label={`Scroll to ${label}`}
                className="group relative flex flex-col items-center justify-center px-1 py-1 focus:outline-none cursor-pointer"
              >
                {/* Tooltip on Hover above the line */}
                <span className="absolute bottom-full mb-3 px-2.5 py-1 bg-[#0a0a0a]/95 border border-zinc-800 text-zinc-300 group-hover:text-white text-[11px] font-mono tracking-wider uppercase rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none shadow-[0_4px_16px_rgba(0,0,0,0.9)] translate-y-1 group-hover:translate-y-0">
                  {label}
                </span>

                {/* Horizontal Indicator Line */}
                <span
                  className={`block rounded-full transition-all duration-300 ease-out ${
                    isActive
                      ? "w-8 sm:w-10 h-[3px] bg-[#c8ff00] shadow-[0_0_16px_#c8ff00,0_0_4px_#c8ff00] group-hover:w-12"
                      : "w-3.5 sm:w-4.5 h-[2px] bg-zinc-600/75 group-hover:w-8 group-hover:bg-[#c8ff00]/90 group-hover:shadow-[0_0_10px_rgba(200,255,0,0.6)]"
                  }`}
                />
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
}

