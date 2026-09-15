"use client";

import React from "react";
import { SITE_CONFIG } from "@/lib/config";
import CoachImagePlaceholder from "./CoachImagePlaceholder";
import { useLanguage } from "@/lib/LanguageContext";

export default function ServicesSection() {
  const { t, isAr } = useLanguage();

  return (
    <section id="services" className="relative bg-[#070707] py-20 md:py-28 border-t border-zinc-900 overflow-hidden">
      {/* Background Cyber Grid */}
      <div className="absolute inset-0 bg-cyber-grid opacity-30 pointer-events-none" />

      {/* Atmospheric neon spot */}
      <div className="absolute top-1/2 -left-28 w-96 h-96 bg-[#c8ff00]/6 rounded-full blur-[160px] pointer-events-none" />

      {/* Giant Background Watermark "SERVICES" - Textured White Stencil */}
      <div className="absolute inset-x-0 top-4 sm:top-6 md:top-8 flex items-center justify-center pointer-events-none select-none overflow-hidden z-0">
        <span className="watermark-textured-white text-[24vw] uppercase whitespace-nowrap tracking-wider">
          SERVICES
        </span>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Header HUD Badges */}
        <div className="flex flex-col items-start mb-12 md:mb-16">
          <div className="flex items-center gap-2 font-mono text-[11px] tracking-widest text-zinc-400 uppercase">
            <span className="text-[#c8ff00] font-bold">+</span>
            <span>{t("services_badge")}</span>
          </div>
          <p className="text-zinc-500 font-mono text-[10px] md:text-xs tracking-wider uppercase mt-1">
            {t("services_subbadge")}
          </p>
        </div>

        {/* Main Grid: Content (01, 02, 03), Coach Placeholder */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* 3 Pillars Column (lg:col-span-7) */}
          <div className="lg:col-span-7 space-y-10 md:space-y-14 relative order-2 lg:order-1">
            {/* Curved Neon Trajectory Line on the starting edge (Right in RTL, Left in LTR) */}
            <svg
              className={`absolute top-6 ${
                isAr ? "-right-3 sm:-right-5 md:-right-6 scale-x-[-1]" : "-left-3 md:-left-6"
              } w-8 h-[88%] hidden sm:block pointer-events-none overflow-visible z-0`}
              viewBox="0 0 40 500"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M 15 10 C 35 120, -10 200, 20 280 C 45 360, 5 440, 18 490"
                stroke="#c8ff00"
                strokeWidth="2.5"
                strokeOpacity="0.8"
                className="filter drop-shadow-[0_0_8px_#c8ff00]"
              />
              <circle cx="15" cy="10" r="4.5" fill="#c8ff00" className="neon-glow-bullet" />
              <circle cx="20" cy="280" r="4.5" fill="#c8ff00" className="neon-glow-bullet" />
              <circle cx="18" cy="490" r="4.5" fill="#c8ff00" className="neon-glow-bullet" />
            </svg>

            {/* Block 01: NUTRITION */}
            <div className={`relative group ${isAr ? "pr-6 sm:pr-10 text-right" : "pl-6 sm:pl-10 text-left"}`}>
              {/* Block Header: Badge Number + Title Starting at the same point */}
              <div className="relative z-10 flex items-center gap-3 mb-3">
                <span className="font-mono text-xs md:text-sm font-bold text-[#c8ff00] bg-[#c8ff00]/10 border border-[#c8ff00]/30 px-2 py-0.5 rounded shrink-0">
                  01
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                  {t("service_01_title")}{" "}
                  <span className="text-[#c8ff00]">{t("service_01_highlight")}</span>
                </h3>
              </div>

              {/* Bullet Points: Unified starting edge */}
              <ul className="relative z-10 space-y-2.5 text-zinc-300 text-xs sm:text-sm md:text-base leading-relaxed max-w-xl">
                <li className="flex items-start gap-2.5">
                  <span className="text-[#c8ff00] font-bold mt-0.5 shrink-0 text-base select-none">•</span>
                  <span>{t("service_01_pt_1")}</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#c8ff00] font-bold mt-0.5 shrink-0 text-base select-none">•</span>
                  <span>{t("service_01_pt_2")}</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#c8ff00] font-bold mt-0.5 shrink-0 text-base select-none">•</span>
                  <span>{t("service_01_pt_3")}</span>
                </li>
              </ul>
            </div>

            {/* Block 02: TRAINING */}
            <div className={`relative group ${isAr ? "pr-6 sm:pr-10 text-right" : "pl-6 sm:pl-10 text-left"}`}>
              {/* Block Header */}
              <div className="relative z-10 flex items-center gap-3 mb-3">
                <span className="font-mono text-xs md:text-sm font-bold text-[#c8ff00] bg-[#c8ff00]/10 border border-[#c8ff00]/30 px-2 py-0.5 rounded shrink-0">
                  02
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                  {t("service_02_title")}{" "}
                  <span>{t("service_02_highlight_1")}</span>{" "}
                  <span className="text-[#c8ff00]">{t("service_02_highlight_2")}</span>
                </h3>
              </div>

              {/* Bullet Points */}
              <ul className="relative z-10 space-y-2.5 text-zinc-300 text-xs sm:text-sm md:text-base leading-relaxed max-w-xl">
                <li className="flex items-start gap-2.5">
                  <span className="text-[#c8ff00] font-bold mt-0.5 shrink-0 text-base select-none">•</span>
                  <span>{t("service_02_pt_1")}</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#c8ff00] font-bold mt-0.5 shrink-0 text-base select-none">•</span>
                  <span>{t("service_02_pt_2")}</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#c8ff00] font-bold mt-0.5 shrink-0 text-base select-none">•</span>
                  <span>{t("service_02_pt_3")}</span>
                </li>
              </ul>
            </div>

            {/* Block 03: SUPPORT */}
            <div className={`relative group ${isAr ? "pr-6 sm:pr-10 text-right" : "pl-6 sm:pl-10 text-left"}`}>
              {/* Block Header */}
              <div className="relative z-10 flex items-center gap-3 mb-3">
                <span className="font-mono text-xs md:text-sm font-bold text-[#c8ff00] bg-[#c8ff00]/10 border border-[#c8ff00]/30 px-2 py-0.5 rounded shrink-0">
                  03
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                  {t("service_03_title")}{" "}
                  <span>{t("service_03_highlight_1")}</span>{" "}
                  <span className="text-[#c8ff00]">{t("service_03_highlight_2")}</span>
                </h3>
              </div>

              {/* Bullet Points */}
              <ul className="relative z-10 space-y-2.5 text-zinc-300 text-xs sm:text-sm md:text-base leading-relaxed max-w-xl">
                <li className="flex items-start gap-2.5">
                  <span className="text-[#c8ff00] font-bold mt-0.5 shrink-0 text-base select-none">•</span>
                  <span>{t("service_03_pt_1")}</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#c8ff00] font-bold mt-0.5 shrink-0 text-base select-none">•</span>
                  <span>{t("service_03_pt_2")}</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#c8ff00] font-bold mt-0.5 shrink-0 text-base select-none">•</span>
                  <span>{t("service_03_pt_3")}</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#c8ff00] font-bold mt-0.5 shrink-0 text-base select-none">•</span>
                  <span>{t("service_03_pt_4")}</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Coach Column (lg:col-span-5) */}
          <div className="lg:col-span-5 relative flex flex-col items-center justify-center order-1 lg:order-2">
            <CoachImagePlaceholder
              src={SITE_CONFIG.coachImages.services}
              alt="كابتن محمد أحمد - مسرح البطولات"
              variant="services"
              poseLabel="صورة الكابتن (البطولات)"
            />
          </div>
        </div>

        {/* Big Impact Promise Card: "0% COPY-PASTE" */}
        <div className="mt-16 bg-[#0c0c0c] border border-zinc-800 p-6 md:p-10 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          {/* Glowing top line */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#c8ff00] to-transparent" />

          {/* Left HUD Promise Tag */}
          <div className="font-mono text-xs text-zinc-400 border border-zinc-800 px-4 py-3 bg-zinc-950/70 flex flex-col gap-0.5 text-left self-start md:self-auto">
            <div className="text-zinc-300 font-bold tracking-wider">OUR PROMISE</div>
            <div className="text-zinc-500">NO TEMPLATES.</div>
            <div className="text-[#c8ff00] font-semibold">JUST RESULTS.</div>
          </div>

          {/* Main 0% COPY-PASTE typography */}
          <div className="text-center md:text-right flex-1">
            <div className="flex flex-wrap items-baseline justify-center md:justify-start gap-3 md:gap-4 mb-2">
              <span className="text-6xl sm:text-7xl md:text-8xl font-black font-mono text-[#c8ff00] tracking-tight neon-glow-text">
                0%
              </span>
              <span className="text-4xl sm:text-5xl md:text-7xl font-black font-mono tracking-widest text-zinc-100 uppercase">
                COPY-PASTE
              </span>
            </div>
            <p className="text-base md:text-lg text-zinc-300 font-medium">
              {t("services_copypaste_sub")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
