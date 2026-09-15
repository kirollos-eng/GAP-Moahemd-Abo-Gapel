"use client";

import React from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { SITE_CONFIG } from "@/lib/config";
import CoachImagePlaceholder from "./CoachImagePlaceholder";
import { useLanguage } from "@/lib/LanguageContext";

interface HeroSectionProps {
  onSelectPackage?: () => void;
}

export default function HeroSection({ onSelectPackage }: HeroSectionProps) {
  const { t, isAr } = useLanguage();

  return (
    <section className="relative min-h-[92vh] md:min-h-screen bg-[#070707] bg-cyber-grid pt-24 md:pt-28 pb-6 md:pb-10 overflow-hidden flex flex-col justify-between">
      {/* Giant Background Watermark "MOHAMED ABO GAPEL" - Textured White Stencil (Full Visibility, Increased Scale) */}
      <div className="absolute inset-x-0 top-14 md:top-18 lg:top-20 flex items-center justify-center pointer-events-none select-none z-0 px-2">
        <span className="watermark-textured-white text-[10vw] sm:text-[11.5vw] md:text-[12.8vw] lg:text-[13.8vw] font-black uppercase whitespace-nowrap tracking-tight text-center block w-full leading-none scale-y-110">
          {SITE_CONFIG.coachName}
        </span>
      </div>

      {/* Atmospheric lighting accents */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-[#c8ff00]/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-[#c8ff00]/8 rounded-full blur-[140px] pointer-events-none" />

      {/* HUD Corner Marker Top-Left: STRATEGY / TRAINING / NUTRITION */}
      <div className="absolute top-24 left-6 md:left-12 font-mono text-[10px] md:text-[11px] text-zinc-500 hidden sm:flex flex-col gap-0.5 select-none pointer-events-none z-10 text-left">
        <div className="flex items-center gap-1.5 text-zinc-400">
          <span className="text-[#c8ff00] font-bold">+</span>
          <span>STRATEGY</span>
        </div>
        <div className="pl-3">TRAINING</div>
        <div className="pl-3">NUTRITION</div>
      </div>

      {/* HUD Right Edge Marker: 009, notches, 017 */}
      <div className="absolute top-1/3 right-4 md:right-8 font-mono text-[11px] text-zinc-600 hidden md:flex flex-col items-center gap-1 select-none pointer-events-none z-10">
        <span className="text-zinc-400">009</span>
        <div className="w-[1px] h-3 bg-zinc-800" />
        <div className="w-[1px] h-3 bg-zinc-800" />
        <div className="w-[1px] h-3 bg-zinc-800" />
        <span className="text-zinc-500">017</span>
      </div>

      {/* Main Hero Container - Matches exact layout: Text on LEFT, Coach on RIGHT */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-center" dir="ltr">
          {/* LEFT Column: Hero Typography & Buttons (lg:col-span-6) */}
          <div className="lg:col-span-6 flex flex-col items-start text-right z-20 order-2 lg:order-1 pt-4 lg:pt-0" dir={isAr ? "rtl" : "ltr"}>
            {/* Main Headline */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white leading-[1.04] tracking-tight mb-5">
              <span>{t("hero_title_1")}</span>
              <br />
              <span>{t("hero_title_2")}</span>
              <br />
              <span className="text-[#c8ff00] neon-glow-text inline-block mt-0.5">
                {t("hero_title_3")}
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-base md:text-lg text-zinc-400 max-w-lg leading-relaxed mb-8">
              {t("hero_subtitle")}
            </p>

            {/* Buttons Row */}
            <div className="flex flex-wrap items-center gap-3.5 w-full sm:w-auto">
              <button
                onClick={() =>
                  onSelectPackage
                    ? onSelectPackage()
                    : (window.location.hash = "#packages")
                }
                className="w-full sm:w-auto px-8 py-3.5 bg-[#c8ff00] hover:bg-[#b8ec00] text-black font-extrabold text-sm md:text-base tracking-wide transition-all duration-300 shadow-[0_0_25px_rgba(200,255,0,0.35)] hover:shadow-[0_0_35px_rgba(200,255,0,0.65)] active:scale-95 flex items-center justify-center gap-2.5 cursor-pointer"
              >
                <span>{t("hero_cta_primary")}</span>
                {isAr ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
              </button>

              <a
                href="#about"
                className="w-full sm:w-auto px-7 py-3.5 bg-[#0a0a0a] hover:bg-zinc-900 text-white border border-zinc-700 hover:border-zinc-400 font-bold text-sm md:text-base transition-all duration-300 text-center flex items-center justify-center gap-2"
              >
                <span>{t("hero_cta_secondary")}</span>
              </a>
            </div>
          </div>

          {/* RIGHT Column: Coach Photo & Glowing S-Curve (lg:col-span-6) */}
          <div className="lg:col-span-6 relative flex items-center justify-center min-h-[460px] md:min-h-[580px] order-1 lg:order-2">
            {/* SVG Glowing Yellow-Green Trajectory Curve swooping across from left behind coach */}
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

              {/* Fast Glowing Energy Pulse Circle: appears, shoots quickly along curve, disappears, and repeats */}
              <g>
                {/* Outer Neon Glow Circle */}
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

                {/* Inner Bright White Particle */}
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
              className="z-10"
            />

            {/* HUD Tags around Coach matching Image 1 */}
            <div className="absolute bottom-20 left-4 text-zinc-500 font-mono text-[10px] hidden md:block z-20 text-left">
              <div className="text-zinc-400">FOCUS</div>
              <div className="text-zinc-400">DISCIPLINE</div>
              <div className="text-zinc-400">RESULTS</div>
            </div>

            <div className="absolute bottom-10 right-4 text-zinc-500 font-mono text-[10px] hidden md:block text-right z-20">
              <div className="text-zinc-400">BUILT ON SCIENCE</div>
              <div className="text-zinc-500">DRIVEN BY DISCIPLINE.</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Sleek Metrics Bar matching Image 1 */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-6 md:mt-10">
        <div className="bg-[#0b0b0b]/95 border-y border-zinc-800 backdrop-blur-md py-4 md:py-6 px-4 md:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-5 gap-4 md:gap-6 items-center" dir="ltr">
            {/* Stat 1: سنوات خبرة */}
            <div className="border-l border-zinc-800/90 pl-4 text-right">
              <div className="text-2xl md:text-4xl font-extrabold font-mono text-white">
                {t("hero_stat_1_val")}
              </div>
              <div className="text-xs text-zinc-400 mt-0.5">{t("hero_stat_1_lbl")}</div>
            </div>

            {/* Stat 2: عملاء حول العالم */}
            <div className="border-l border-zinc-800/90 pl-4 text-right">
              <div className="text-2xl md:text-4xl font-extrabold font-mono text-white">
                {t("hero_stat_2_val")}
              </div>
              <div className="text-xs text-zinc-400 mt-0.5">{t("hero_stat_2_lbl")}</div>
            </div>

            {/* Stat 3: برامج مخصصة */}
            <div className="border-l border-zinc-800/90 pl-4 text-right">
              <div className="text-2xl md:text-4xl font-extrabold font-mono text-white">
                {t("hero_stat_3_val")}
              </div>
              <div className="text-xs text-zinc-400 mt-0.5">{t("hero_stat_3_lbl")}</div>
            </div>

            {/* Stat 4: نسبة الالتزام */}
            <div className="border-l border-zinc-800/90 pl-4 text-right">
              <div className="text-2xl md:text-4xl font-extrabold font-mono text-white flex items-baseline gap-1">
                <span>92</span>
                <span className="text-[#c8ff00]">%</span>
              </div>
              <div className="text-xs text-zinc-400 mt-0.5">{t("hero_stat_4_lbl")}</div>
            </div>

            {/* Slogan on far right */}
            <div className="col-span-2 sm:col-span-2 md:col-span-1 flex flex-col justify-center text-right">
              <p className="text-xs md:text-sm font-semibold text-zinc-300 leading-snug">
                {t("hero_stat_quote_1")}
                <br />
                <span className="text-[#c8ff00]">{t("hero_stat_quote_2")}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
