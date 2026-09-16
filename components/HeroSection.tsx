"use client";

import React from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { SITE_CONFIG } from "@/lib/config";
import CoachImagePlaceholder from "./CoachImagePlaceholder";
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
    <section id="hero" className="relative min-h-[92vh] md:min-h-screen bg-[#070707] bg-cyber-grid pt-24 md:pt-28 pb-6 md:pb-10 overflow-hidden flex flex-col justify-between">
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

      {/* Giant Background Watermark "MOHAMED ABO GAPEL" - Textured White Stencil (Full Visibility, Increased Scale) */}
      <div className="absolute inset-x-0 top-14 md:top-18 lg:top-20 flex items-center justify-center pointer-events-none select-none z-0 px-2">
        <span className="watermark-textured-white text-[10vw] sm:text-[11.5vw] md:text-[12.8vw] lg:text-[13.8vw] font-black uppercase whitespace-nowrap tracking-tight text-center block w-full leading-none scale-y-110">
          {SITE_CONFIG.coachName}
        </span>
      </div>

      {/* Atmospheric lighting accents */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-[#c8ff00]/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-[#c8ff00]/8 rounded-full blur-[140px] pointer-events-none" />


      {/* Main Hero Container - Full Width, Coach in the CENTER, Typography on the far LEFT */}
      <div className="relative w-full max-w-[1720px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 z-10 my-auto min-h-[520px] md:min-h-[620px] flex items-center">
        {/* CENTER: Coach Silhouette / Photo Container (Mathematically Centered in Viewport) */}
        <div className="lg:absolute lg:left-1/2 lg:-translate-x-1/2 lg:bottom-0 w-full max-w-[460px] md:max-w-[540px] h-[460px] md:h-[600px] flex items-end justify-center z-10 pointer-events-none mb-6 lg:mb-0">
          {/* SVG Glowing Yellow-Green Trajectory Curve swooping across behind coach */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none z-10 overflow-visible"
            viewBox="0 0 500 500"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M -50 320 C 80 340, 140 220, 260 250 C 360 280, 420 180, 480 120"
              stroke="#c8ff00"
              strokeWidth="2.2"
              strokeDasharray="6 6"
              className="opacity-40"
            />
            <path
              d="M 20 380 C 140 380, 180 260, 320 230 C 400 200, 440 120, 470 90"
              stroke="#c8ff00"
              strokeWidth="2.8"
              className="opacity-80 filter drop-shadow-[0_0_10px_#c8ff00]"
            />

            {/* Fast Glowing Energy Pulse Circle */}
            <g>
              <circle r="6" fill="#c8ff00" className="filter drop-shadow-[0_0_14px_#c8ff00]">
                <animateMotion
                  path="M 20 380 C 140 380, 180 260, 320 230 C 400 200, 440 120, 470 90"
                  dur="2.6s"
                  repeatCount="indefinite"
                  calcMode="spline"
                  keyTimes="0; 0.65; 1"
                  keySplines="0.4 0 0.2 1; 0.4 0 0.2 1"
                />
                <animate
                  attributeName="opacity"
                  values="0; 0.3; 1; 1; 0; 0"
                  keyTimes="0; 0.08; 0.22; 0.58; 0.68; 1"
                  dur="2.6s"
                  repeatCount="indefinite"
                />
              </circle>
              <circle r="3" fill="#ffffff" className="filter drop-shadow-[0_0_8px_#ffffff]">
                <animateMotion
                  path="M 20 380 C 140 380, 180 260, 320 230 C 400 200, 440 120, 470 90"
                  dur="2.6s"
                  repeatCount="indefinite"
                  calcMode="spline"
                  keyTimes="0; 0.65; 1"
                  keySplines="0.4 0 0.2 1; 0.4 0 0.2 1"
                />
                <animate
                  attributeName="opacity"
                  values="0; 0.4; 1; 1; 0; 0"
                  keyTimes="0; 0.08; 0.22; 0.58; 0.68; 1"
                  dur="2.6s"
                  repeatCount="indefinite"
                />
              </circle>
            </g>
          </svg>

          {/* Coach Silhouette / Photo Container */}
          <CoachImagePlaceholder
            src={SITE_CONFIG.coachImages.hero}
            alt="كابتن محمد أبو جبل (GAP)"
            variant="hero"
            poseLabel="صورة كابتن محمد أبو جبل"
            className="z-10 pointer-events-auto"
          />
        </div>

        {/* 12-Column Responsive Layout: Text on the far LEFT, Coach in the CENTER, HUD on the RIGHT */}
        <div
          className="grid grid-cols-1 lg:grid-cols-12 gap-6 xl:gap-8 items-center w-full relative z-20"
          dir="ltr"
        >
          {/* Typography & Call to Action (Left-Aligned matching coach image mockup) */}
          <div className="lg:col-span-4 xl:col-span-4 flex flex-col items-start text-left z-20 pt-6 lg:pt-14">
            {/* Main Headline (Left-aligned) */}
            <h1 className="text-3xl sm:text-4xl lg:text-[42px] xl:text-[46px] font-black text-white leading-[1.12] tracking-tight mb-4 text-left">
              <span>{t("hero_title_1")}</span>
              <br />
              <span>{t("hero_title_2")}</span>
              <br />
              <span className="text-[#c8ff00] drop-shadow-[0_0_15px_rgba(200,255,0,0.4)] inline-block mt-0.5">
                {t("hero_title_3")}
              </span>
            </h1>

            {/* Subtitle (Left-aligned) */}
            <p className="text-xs sm:text-sm text-zinc-400 max-w-sm leading-relaxed mb-6 text-left">
              {t("hero_subtitle")}
            </p>

            {/* Buttons Row (Left-aligned flush with text) */}
            <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
              <a
                href="#packages"
                onClick={handleScrollToPlans}
                className="w-full sm:w-auto px-6 py-2.5 sm:px-7 sm:py-3 bg-[#c8ff00] hover:bg-[#b8ec00] text-black font-extrabold text-xs sm:text-sm tracking-wide transition-all duration-300 shadow-[0_0_20px_rgba(200,255,0,0.3)] hover:shadow-[0_0_30px_rgba(200,255,0,0.5)] active:scale-95 flex items-center justify-center cursor-pointer"
              >
                <span>{t("hero_cta_primary")}</span>
              </a>

              <a
                href="#about"
                className="w-full sm:w-auto px-6 py-2.5 sm:px-7 sm:py-3 bg-[#0a0a0a] hover:bg-zinc-900 text-white border border-zinc-750 hover:border-zinc-500 font-bold text-xs sm:text-sm transition-all duration-300 text-center flex items-center justify-center"
              >
                <span>{t("hero_cta_secondary")}</span>
              </a>
            </div>
          </div>

          {/* Dedicated Center Spacing for Coach Body */}
          <div className="hidden lg:block lg:col-span-4 xl:col-span-4 pointer-events-none" />

          {/* Opposite Column (On the RIGHT): Clean Spacing */}
          <div
            className="hidden lg:block lg:col-span-4 xl:col-span-4 pointer-events-none z-20"
          />
        </div>
      </div>

      {/* Bottom Sleek Metrics Bar - 100% Symmetrical & Centered */}
      <div className="relative z-20 w-full max-w-[1720px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 mt-6 md:mt-10">
        <div className="bg-[#0b0b0b]/95 border-y border-zinc-800 backdrop-blur-md py-4 md:py-6 px-4 md:px-8">
          <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-5 gap-4 md:gap-0 items-center" dir="ltr">
            {/* Stat 1: سنوات خبرة */}
            <div className="flex flex-col items-center justify-center text-center md:border-r border-zinc-800/80 px-2 sm:px-4 py-2">
              <div className="text-2xl md:text-3xl lg:text-4xl font-extrabold font-mono text-white">
                {t("hero_stat_1_val")}
              </div>
              <div className="text-xs sm:text-sm text-zinc-400 mt-1 font-medium">{t("hero_stat_1_lbl")}</div>
            </div>

            {/* Stat 2: عملاء حول العالم */}
            <div className="flex flex-col items-center justify-center text-center md:border-r border-zinc-800/80 px-2 sm:px-4 py-2">
              <div className="text-2xl md:text-3xl lg:text-4xl font-extrabold font-mono text-white">
                {t("hero_stat_2_val")}
              </div>
              <div className="text-xs sm:text-sm text-zinc-400 mt-1 font-medium">{t("hero_stat_2_lbl")}</div>
            </div>

            {/* Stat 3: برامج مخصصة */}
            <div className="flex flex-col items-center justify-center text-center md:border-r border-zinc-800/80 px-2 sm:px-4 py-2">
              <div className="text-2xl md:text-3xl lg:text-4xl font-extrabold font-mono text-white">
                {t("hero_stat_3_val")}
              </div>
              <div className="text-xs sm:text-sm text-zinc-400 mt-1 font-medium">{t("hero_stat_3_lbl")}</div>
            </div>

            {/* Stat 4: نسبة الالتزام */}
            <div className="flex flex-col items-center justify-center text-center md:border-r border-zinc-800/80 px-2 sm:px-4 py-2">
              <div className="text-2xl md:text-3xl lg:text-4xl font-extrabold font-mono text-white flex items-baseline justify-center gap-1">
                <span>92</span>
                <span className="text-[#c8ff00]">%</span>
              </div>
              <div className="text-xs sm:text-sm text-zinc-400 mt-1 font-medium">{t("hero_stat_4_lbl")}</div>
            </div>

            {/* Slogan on far right */}
            <div className="col-span-2 sm:col-span-2 md:col-span-1 flex flex-col justify-center items-center text-center px-2 sm:px-4 py-2" dir="rtl">
              <p className="text-xs md:text-sm font-semibold text-zinc-300 leading-snug">
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
