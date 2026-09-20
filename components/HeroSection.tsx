"use client";

import React from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { SITE_CONFIG } from "@/lib/config";
import { useLanguage } from "@/lib/LanguageContext";

interface HeroSectionProps {
  onSelectPackage?: () => void;
}

const HERO_STARS = [
  { top: "14%", left: "6%", size: 14, type: "sparkle", color: "text-[#c8ff00]/60", delay: "0s", dur: "3s" },
  { top: "22%", left: "15%", size: 4, type: "dot", color: "bg-white/60", delay: "1.2s", dur: "4s" },
  { top: "18%", left: "30%", size: 12, type: "sparkle", color: "text-white/50", delay: "2.1s", dur: "3.5s" },
  { top: "12%", left: "74%", size: 16, type: "sparkle", color: "text-[#c8ff00]/75", delay: "0.8s", dur: "2.8s" },
  { top: "26%", left: "88%", size: 11, type: "sparkle", color: "text-white/50", delay: "1.7s", dur: "3.2s" },
  { top: "34%", left: "94%", size: 3.5, type: "dot", color: "bg-[#c8ff00]/70", delay: "0.4s", dur: "4.5s" },
  { top: "42%", left: "8%", size: 3.5, type: "dot", color: "bg-white/50", delay: "2.6s", dur: "3.8s" },
  { top: "58%", left: "4%", size: 14, type: "sparkle", color: "text-white/45", delay: "1.5s", dur: "3.6s" },
  { top: "68%", left: "18%", size: 4, type: "dot", color: "bg-[#c8ff00]/60", delay: "0.9s", dur: "4.2s" },
  { top: "45%", left: "84%", size: 15, type: "sparkle", color: "text-[#c8ff00]/65", delay: "2.3s", dur: "3s" },
  { top: "62%", left: "91%", size: 12, type: "sparkle", color: "text-white/45", delay: "1.1s", dur: "3.4s" },
  { top: "74%", left: "84%", size: 3.5, type: "dot", color: "bg-white/50", delay: "0.5s", dur: "4s" },
  { top: "30%", left: "24%", size: 11, type: "sparkle", color: "text-[#c8ff00]/55", delay: "1.9s", dur: "3.1s" },
  { top: "70%", left: "38%", size: 3.5, type: "dot", color: "bg-white/40", delay: "2.8s", dur: "3.9s" },
  { top: "28%", left: "68%", size: 4, type: "dot", color: "bg-[#c8ff00]/65", delay: "1.4s", dur: "3.7s" },
  { top: "80%", left: "10%", size: 11, type: "sparkle", color: "text-white/45", delay: "2.4s", dur: "3.3s" },
];

export default function HeroSection({ onSelectPackage }: HeroSectionProps) {
  const { t, isAr } = useLanguage();

  const handleScrollToPlans = (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    const plansEl = document.getElementById("packages");
    if (plansEl) {
      const navOffset = 70;
      const elementPosition = plansEl.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = Math.max(0, elementPosition - navOffset);
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    } else {
      window.location.hash = "#packages";
    }
  };

  return (
    <section id="hero" className="relative min-h-screen bg-[#070707] bg-cyber-grid pt-16 sm:pt-20 md:pt-22 pb-4 sm:pb-6 overflow-hidden flex flex-col justify-between">
      {/* Subtle Random Twinkling Cosmic Stars in the Background */}
      <div className="absolute inset-0 pointer-events-none select-none z-0 overflow-hidden">
        {HERO_STARS.map((star, idx) => (
          <div
            key={`hero-star-${idx}`}
            className="absolute animate-pulse"
            style={{
              top: star.top,
              left: star.left,
              animationDelay: star.delay,
              animationDuration: star.dur,
            }}
          >
            {star.type === "sparkle" ? (
              <svg
                width={star.size}
                height={star.size}
                viewBox="0 0 24 24"
                fill="currentColor"
                className={`${star.color} filter drop-shadow-[0_0_6px_currentColor]`}
              >
                <path d="M12 0 C12 7, 7 12, 0 12 C7 12, 12 17, 12 24 C12 17, 17 12, 24 12 C17 12, 12 7, 12 0 Z" />
              </svg>
            ) : (
              <span
                className={`block rounded-full ${star.color} filter drop-shadow-[0_0_6px_currentColor]`}
                style={{ width: star.size, height: star.size }}
              />
            )}
          </div>
        ))}
      </div>


      {/* Atmospheric lighting accents */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-[#c8ff00]/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-[#c8ff00]/8 rounded-full blur-[140px] pointer-events-none" />

      {/* Main Hero Container - Centered Typography & Call to Action */}
      <div className="relative w-full max-w-4xl mx-auto px-4 sm:px-6 md:px-8 z-10 flex-1 min-h-0 flex flex-col items-center justify-center text-center pt-20 sm:pt-28 md:pt-32 pb-4 sm:pb-6">
        {/* Main Headline */}
        <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.18] tracking-tight mb-3 sm:mb-4 text-center">
          <span className="block">{t("hero_title_1")}</span>
          <span className="text-[#c8ff00] drop-shadow-[0_0_20px_rgba(200,255,0,0.45)] block mt-1.5 sm:mt-2">
            {t("hero_title_2")}
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-xs sm:text-sm md:text-base text-zinc-400 max-w-xl leading-relaxed mb-6 sm:mb-8 text-center mx-auto px-2">
          {t("hero_subtitle")}
        </p>

        {/* Buttons Row - Full width stacked on mobile, row on tablet/desktop */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-4 w-full sm:w-auto max-w-xs sm:max-w-none mx-auto">
          <a
            href="#packages"
            onClick={handleScrollToPlans}
            className="w-full sm:w-auto px-7 py-3 bg-[#c8ff00] hover:bg-[#b8ec00] text-black font-extrabold text-xs sm:text-sm tracking-wide transition-all duration-300 shadow-[0_0_25px_rgba(200,255,0,0.35)] hover:shadow-[0_0_35px_rgba(200,255,0,0.6)] active:scale-95 flex items-center justify-center cursor-pointer"
          >
            <span>{t("hero_cta_primary")}</span>
          </a>

          <a
            href="#about"
            className="w-full sm:w-auto px-7 py-3 bg-[#0a0a0a] hover:bg-zinc-900 text-white border border-zinc-750 hover:border-zinc-500 font-bold text-xs sm:text-sm transition-all duration-300 text-center flex items-center justify-center"
          >
            <span>{t("hero_cta_secondary")}</span>
          </a>
        </div>
      </div>

      {/* Bottom Sleek Metrics Bar - 100% Symmetrical & Centered */}
      <div className="relative z-20 w-full max-w-[1720px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 mt-1 sm:mt-2 shrink-0">
        <div className="bg-[#0b0b0b]/95 border-y border-zinc-800 backdrop-blur-md py-2.5 sm:py-3 px-4 md:px-8">
          <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-5 gap-3 md:gap-0 items-center" dir="ltr">
            {/* Stat 1: سنوات خبرة */}
            <div className="flex flex-col items-center justify-center text-center md:border-r border-zinc-800/80 px-2 sm:px-4 py-1">
              <div className="text-xl sm:text-2xl md:text-3xl font-extrabold font-mono text-white">
                {t("hero_stat_1_val")}
              </div>
              <div className="text-[10px] sm:text-xs text-zinc-400 mt-0.5 font-medium">{t("hero_stat_1_lbl")}</div>
            </div>

            {/* Stat 2: عملاء حول العالم */}
            <div className="flex flex-col items-center justify-center text-center md:border-r border-zinc-800/80 px-2 sm:px-4 py-1">
              <div className="text-xl sm:text-2xl md:text-3xl font-extrabold font-mono text-white">
                {t("hero_stat_2_val")}
              </div>
              <div className="text-[10px] sm:text-xs text-zinc-400 mt-0.5 font-medium">{t("hero_stat_2_lbl")}</div>
            </div>

            {/* Stat 3: برامج مخصصة */}
            <div className="flex flex-col items-center justify-center text-center md:border-r border-zinc-800/80 px-2 sm:px-4 py-1">
              <div className="text-xl sm:text-2xl md:text-3xl font-extrabold font-mono text-white">
                {t("hero_stat_3_val")}
              </div>
              <div className="text-[10px] sm:text-xs text-zinc-400 mt-0.5 font-medium">{t("hero_stat_3_lbl")}</div>
            </div>

            {/* Stat 4: نسبة الالتزام */}
            <div className="flex flex-col items-center justify-center text-center md:border-r border-zinc-800/80 px-2 sm:px-4 py-1">
              <div className="text-xl sm:text-2xl md:text-3xl font-extrabold font-mono text-white flex items-baseline justify-center gap-1">
                <span>86</span>
                <span className="text-[#c8ff00]">%</span>
              </div>
              <div className="text-[10px] sm:text-xs text-zinc-400 mt-0.5 font-medium">{t("hero_stat_4_lbl")}</div>
            </div>

            {/* Slogan on far right */}
            <div className="col-span-2 sm:col-span-2 md:col-span-1 flex flex-col justify-center items-center text-center px-2 sm:px-4 py-1" dir="rtl">
              <p className="text-[11px] sm:text-xs md:text-xs lg:text-sm font-semibold text-zinc-300 leading-snug">
                {t("hero_stat_quote_1")}
                <br />
                <span className="text-[#c8ff00] font-bold">{t("hero_stat_quote_2")}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
