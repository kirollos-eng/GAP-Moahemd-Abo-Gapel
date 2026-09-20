"use client";

import React from "react";
import { useLanguage } from "@/lib/LanguageContext";

export default function ServicesSection() {
  const { t, isAr } = useLanguage();

  const services = [
    {
      num: "01",
      watermark: "NUTRITION",
      titleMain: t("service_01_title"),
      titleHighlight: t("service_01_highlight"),
      specMain: t("service_01_spec_main"),
      specSub: t("service_01_spec_sub"),
    },
    {
      num: "02",
      watermark: "TRAINING",
      titleMain: t("service_02_title"),
      titleHighlight: t("service_02_highlight"),
      specMain: t("service_02_spec_main"),
      specSub: t("service_02_spec_sub"),
    },
    {
      num: "03",
      watermark: "SUPPORT",
      titleMain: t("service_03_title"),
      titleHighlight: t("service_03_highlight"),
      specMain: t("service_03_spec_main"),
      specSub: t("service_03_spec_sub"),
    },
  ];

  // Arabic Path (RTL):
  // Col 1 (NUTRITION) is at x=1000, Col 2 (TRAINING) is at x=600, Col 3 (SUPPORT) is at x=200.
  // Station dots at y=70.
  // After Col 3 at (200, 70), line loops down the left side, sweeps inward, and lands cleanly ABOVE 0% COPY-PASTE at (600, 368).
  const arabicPath =
    "M 1160 100 C 1110 100, 1060 70, 1000 70 C 910 70, 870 145, 800 145 C 730 145, 690 70, 600 70 C 510 70, 470 145, 400 145 C 330 145, 290 70, 200 70 C 110 70, 45 130, 45 220 C 45 295, 80 360, 200 365 C 330 368, 460 368, 600 368";

  // English Path (LTR):
  // Col 1 (NUTRITION) is at x=200, Col 2 (TRAINING) is at x=600, Col 3 (SUPPORT) is at x=1000.
  // Station dots at y=70.
  // After Col 3 at (1000, 70), line loops down the right side, sweeps inward, and lands cleanly ABOVE 0% COPY-PASTE at (600, 368).
  const englishPath =
    "M 40 100 C 90 100, 140 70, 200 70 C 290 70, 330 145, 400 145 C 470 145, 510 70, 600 70 C 690 70, 730 145, 800 145 C 870 145, 910 70, 1000 70 C 1090 70, 1155 130, 1155 220 C 1155 295, 1120 360, 1000 365 C 870 368, 740 368, 600 368";

  const currentPath = isAr ? arabicPath : englishPath;

  // Mobile Zigzag Path (< md):
  // Clean S-curve zigzag connecting:
  // Node 1 (Service 1) -> Node 2 (Service 2) -> Node 3 (Service 3) -> Landing (Center above 0% COPY-PASTE)
  const mobileArPath =
    "M 260 75 C 260 170, 100 170, 100 265 C 100 360, 260 360, 260 455 C 260 535, 180 545, 180 595";
  const mobileEnPath =
    "M 100 75 C 100 170, 260 170, 260 265 C 260 360, 100 360, 100 455 C 100 535, 180 545, 180 595";

  const mobileCurrentPath = isAr ? mobileArPath : mobileEnPath;
  const pt1X = isAr ? "260" : "100";
  const pt2X = isAr ? "100" : "260";
  const pt3X = isAr ? "260" : "100";

  return (
    <section
      id="services"
      className="relative bg-[#070707] py-16 md:py-24 border-t border-zinc-900 overflow-hidden scroll-mt-20 md:scroll-mt-24"
    >
      {/* Background Cyber Grid */}
      <div className="absolute inset-0 bg-cyber-grid opacity-20 pointer-events-none" />

      {/* Atmospheric neon spots */}
      <div className="absolute top-1/4 -left-28 w-96 h-96 bg-[#c8ff00]/6 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-1/3 -right-28 w-[500px] h-[500px] bg-[#c8ff00]/4 rounded-full blur-[180px] pointer-events-none" />

      {/* Giant Background Watermark "SERVICES" */}
      <div className="absolute inset-x-0 top-1 md:top-4 flex items-center justify-center pointer-events-none select-none z-0 overflow-hidden opacity-[0.20] md:opacity-[0.24]">
        <span className="watermark-textured-white text-[24vw] sm:text-[22vw] md:text-[22vw] uppercase whitespace-nowrap tracking-normal block leading-none">
          SERVICES
        </span>
      </div>

      <div className="relative w-full max-w-[1720px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 z-10">
        {/* Full Interactive Canvas: Wraps 3 Columns AND 0% COPY-PASTE */}
        <div className="relative" dir={isAr ? "rtl" : "ltr"}>

          {/* ===================== DESKTOP: Continuous Glowing Zigzag SVG Line ===================== */}
          <div className="hidden md:block absolute inset-0 pointer-events-none z-0" dir="ltr">
            <svg
              className="w-full h-full overflow-visible"
              viewBox="0 0 1200 520"
              fill="none"
              preserveAspectRatio="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Outer Neon Glow Path */}
              <path
                d={currentPath}
                stroke="#c8ff00"
                strokeWidth="7"
                strokeOpacity="0.22"
                className="filter blur-[6px]"
              />

              {/* Core Sharp Glowing Zigzag Neon Path */}
              <path
                d={currentPath}
                stroke="#c8ff00"
                strokeWidth="2.8"
                strokeOpacity="0.9"
                className="filter drop-shadow-[0_0_12px_#c8ff00]"
              />

              {/* Animated Light Photon traveling along the entire path to 0% COPY-PASTE */}
              <circle r="4.5" fill="#ffffff" className="filter drop-shadow-[0_0_14px_#ffffff]">
                <animateMotion
                  dur="4.8s"
                  repeatCount="indefinite"
                  path={currentPath}
                  calcMode="spline"
                  keyTimes="0; 0.5; 1"
                  keySplines="0.4 0 0.2 1; 0.4 0 0.2 1"
                />
              </circle>

              {/* POINT 1 (Center of Col 1: x=1000 in AR, x=200 in EN) */}
              <g>
                <circle cx={isAr ? "1000" : "200"} cy="70" r="16" fill="#c8ff00" fillOpacity="0.18" className="animate-pulse" />
                <circle cx={isAr ? "1000" : "200"} cy="70" r="7" fill="#c8ff00" className="filter drop-shadow-[0_0_14px_#c8ff00]" />
                <circle cx={isAr ? "1000" : "200"} cy="70" r="3.5" fill="#ffffff" />
              </g>

              {/* POINT 2 (Center of Col 2: x=600) */}
              <g>
                <circle cx="600" cy="70" r="16" fill="#c8ff00" fillOpacity="0.18" className="animate-pulse" />
                <circle cx="600" cy="70" r="7" fill="#c8ff00" className="filter drop-shadow-[0_0_14px_#c8ff00]" />
                <circle cx="600" cy="70" r="3.5" fill="#ffffff" />
              </g>

              {/* POINT 3 (Center of Col 3: x=200 in AR, x=1000 in EN) */}
              <g>
                <circle cx={isAr ? "200" : "1000"} cy="70" r="16" fill="#c8ff00" fillOpacity="0.18" className="animate-pulse" />
                <circle cx={isAr ? "200" : "1000"} cy="70" r="7" fill="#c8ff00" className="filter drop-shadow-[0_0_14px_#c8ff00]" />
                <circle cx={isAr ? "200" : "1000"} cy="70" r="3.5" fill="#ffffff" />
              </g>

              {/* FINAL LANDING POINT: Resting cleanly above 0% COPY-PASTE */}
              <g>
                <circle cx="600" cy="368" r="16" fill="#c8ff00" fillOpacity="0.25" className="animate-ping" />
                <circle cx="600" cy="368" r="7" fill="#c8ff00" className="filter drop-shadow-[0_0_16px_#c8ff00]" />
                <circle cx="600" cy="368" r="3.5" fill="#ffffff" />
              </g>
            </svg>
          </div>

          {/* ===================== MOBILE: ALTERNATING ZIGZAG TIMELINE (< md) ===================== */}
          <div className="md:hidden relative w-full mb-12">
            {/* Mobile Glowing Zigzag SVG Line */}
            <div className="absolute inset-0 pointer-events-none z-0" dir="ltr">
              <svg
                className="w-full h-full overflow-visible"
                viewBox="0 0 360 610"
                fill="none"
                preserveAspectRatio="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Outer Neon Glow Path */}
                <path
                  d={mobileCurrentPath}
                  stroke="#c8ff00"
                  strokeWidth="6"
                  strokeOpacity="0.25"
                  className="filter blur-[4px]"
                />

                {/* Core Sharp Glowing Zigzag Neon Path */}
                <path
                  d={mobileCurrentPath}
                  stroke="#c8ff00"
                  strokeWidth="2.5"
                  strokeOpacity="0.95"
                  className="filter drop-shadow-[0_0_10px_#c8ff00]"
                />

                {/* Animated Light Photon traveling along the zigzag path */}
                <circle r="4" fill="#ffffff" className="filter drop-shadow-[0_0_12px_#ffffff]">
                  <animateMotion
                    dur="4s"
                    repeatCount="indefinite"
                    path={mobileCurrentPath}
                    calcMode="spline"
                    keyTimes="0; 0.5; 1"
                    keySplines="0.4 0 0.2 1; 0.4 0 0.2 1"
                  />
                </circle>

                {/* POINT 1: Exactly at Service 1 Station */}
                <g>
                  <circle cx={pt1X} cy="75" r="14" fill="#c8ff00" fillOpacity="0.2" className="animate-pulse" />
                  <circle cx={pt1X} cy="75" r="6" fill="#c8ff00" className="filter drop-shadow-[0_0_12px_#c8ff00]" />
                  <circle cx={pt1X} cy="75" r="3" fill="#ffffff" />
                </g>

                {/* POINT 2: Exactly at Service 2 Station */}
                <g>
                  <circle cx={pt2X} cy="265" r="14" fill="#c8ff00" fillOpacity="0.2" className="animate-pulse" />
                  <circle cx={pt2X} cy="265" r="6" fill="#c8ff00" className="filter drop-shadow-[0_0_12px_#c8ff00]" />
                  <circle cx={pt2X} cy="265" r="3" fill="#ffffff" />
                </g>

                {/* POINT 3: Exactly at Service 3 Station */}
                <g>
                  <circle cx={pt3X} cy="455" r="14" fill="#c8ff00" fillOpacity="0.2" className="animate-pulse" />
                  <circle cx={pt3X} cy="455" r="6" fill="#c8ff00" className="filter drop-shadow-[0_0_12px_#c8ff00]" />
                  <circle cx={pt3X} cy="455" r="3" fill="#ffffff" />
                </g>

                {/* LANDING POINT: Resting cleanly above 0% COPY-PASTE */}
                <g>
                  <circle cx="180" cy="595" r="14" fill="#c8ff00" fillOpacity="0.25" className="animate-ping" />
                  <circle cx="180" cy="595" r="6" fill="#c8ff00" className="filter drop-shadow-[0_0_12px_#c8ff00]" />
                  <circle cx="180" cy="595" r="3" fill="#ffffff" />
                </g>
              </svg>
            </div>

            {/* Mobile Alternating Items Stack */}
            <div className="relative z-10 flex flex-col gap-8" dir={isAr ? "rtl" : "ltr"}>
              {/* Item 1: Right in AR, Left in EN */}
              <div className={`flex ${isAr ? "justify-end" : "justify-start"} w-full`}>
                <div className="w-[66%] max-w-[260px] flex flex-col items-center text-center">
                  {/* Header: Large Watermark & Number */}
                  <div className="flex items-center justify-center gap-2 select-none mb-1.5" dir="ltr">
                    <div className="flex items-center justify-center font-mono shrink-0 gap-1">
                      <span className="text-sm font-bold text-zinc-300">{services[0].num}</span>
                      <span className="text-zinc-600 text-xs font-bold">+</span>
                    </div>
                    <span className="watermark-textured-white text-3xl sm:text-4xl font-black font-mono tracking-tight uppercase block leading-none drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)]">
                      {services[0].watermark}
                    </span>
                  </div>

                  {/* Station Dot Spacer (matches cy="75") */}
                  <div className="h-8 flex items-center justify-center" />

                  {/* Title & Description */}
                  <div className="w-full flex flex-col items-center text-center">
                    <h3 className="text-base sm:text-lg font-black leading-snug">
                      <span className="text-white block drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                        {services[0].titleMain}
                      </span>
                      <span className="text-[#c8ff00] block mt-0.5 drop-shadow-[0_0_10px_rgba(200,255,0,0.4)]">
                        {services[0].titleHighlight}
                      </span>
                    </h3>

                    <div className="w-8 h-[2px] bg-[#c8ff00] my-2 shadow-[0_0_8px_#c8ff00] mx-auto rounded-full" />

                    <div className="w-full space-y-1 font-sans">
                      <p className="text-zinc-100 font-bold text-xs sm:text-sm leading-relaxed drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]">
                        {services[0].specMain}
                      </p>
                      <p className="text-zinc-300 font-medium text-xs leading-relaxed drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]">
                        {services[0].specSub}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Item 2: Left in AR, Right in EN */}
              <div className={`flex ${isAr ? "justify-start" : "justify-end"} w-full`}>
                <div className="w-[66%] max-w-[260px] flex flex-col items-center text-center">
                  {/* Header: Large Watermark & Number */}
                  <div className="flex items-center justify-center gap-2 select-none mb-1.5" dir="ltr">
                    <div className="flex items-center justify-center font-mono shrink-0 gap-1">
                      <span className="text-sm font-bold text-zinc-300">{services[1].num}</span>
                      <span className="text-zinc-600 text-xs font-bold">+</span>
                    </div>
                    <span className="watermark-textured-white text-3xl sm:text-4xl font-black font-mono tracking-tight uppercase block leading-none drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)]">
                      {services[1].watermark}
                    </span>
                  </div>

                  {/* Station Dot Spacer (matches cy="265") */}
                  <div className="h-8 flex items-center justify-center" />

                  {/* Title & Description */}
                  <div className="w-full flex flex-col items-center text-center">
                    <h3 className="text-base sm:text-lg font-black leading-snug">
                      <span className="text-white block drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                        {services[1].titleMain}
                      </span>
                      <span className="text-[#c8ff00] block mt-0.5 drop-shadow-[0_0_10px_rgba(200,255,0,0.4)]">
                        {services[1].titleHighlight}
                      </span>
                    </h3>

                    <div className="w-8 h-[2px] bg-[#c8ff00] my-2 shadow-[0_0_8px_#c8ff00] mx-auto rounded-full" />

                    <div className="w-full space-y-1 font-sans">
                      <p className="text-zinc-100 font-bold text-xs sm:text-sm leading-relaxed drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]">
                        {services[1].specMain}
                      </p>
                      <p className="text-zinc-300 font-medium text-xs leading-relaxed drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]">
                        {services[1].specSub}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Item 3: Right in AR, Left in EN */}
              <div className={`flex ${isAr ? "justify-end" : "justify-start"} w-full`}>
                <div className="w-[66%] max-w-[260px] flex flex-col items-center text-center">
                  {/* Header: Large Watermark & Number */}
                  <div className="flex items-center justify-center gap-2 select-none mb-1.5" dir="ltr">
                    <div className="flex items-center justify-center font-mono shrink-0 gap-1">
                      <span className="text-sm font-bold text-zinc-300">{services[2].num}</span>
                      <span className="text-zinc-600 text-xs font-bold">+</span>
                    </div>
                    <span className="watermark-textured-white text-3xl sm:text-4xl font-black font-mono tracking-tight uppercase block leading-none drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)]">
                      {services[2].watermark}
                    </span>
                  </div>

                  {/* Station Dot Spacer (matches cy="455") */}
                  <div className="h-8 flex items-center justify-center" />

                  {/* Title & Description */}
                  <div className="w-full flex flex-col items-center text-center">
                    <h3 className="text-base sm:text-lg font-black leading-snug">
                      <span className="text-white block drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                        {services[2].titleMain}
                      </span>
                      <span className="text-[#c8ff00] block mt-0.5 drop-shadow-[0_0_10px_rgba(200,255,0,0.4)]">
                        {services[2].titleHighlight}
                      </span>
                    </h3>

                    <div className="w-8 h-[2px] bg-[#c8ff00] my-2 shadow-[0_0_8px_#c8ff00] mx-auto rounded-full" />

                    <div className="w-full space-y-1 font-sans">
                      <p className="text-zinc-100 font-bold text-xs sm:text-sm leading-relaxed drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]">
                        {services[2].specMain}
                      </p>
                      <p className="text-zinc-300 font-medium text-xs leading-relaxed drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]">
                        {services[2].specSub}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ===================== DESKTOP: 3 SERVICES COLUMNS ===================== */}
          <div className="hidden md:grid md:grid-cols-3 gap-8 lg:gap-12 relative z-10 mb-14 md:mb-20">
            {services.map((service) => (
              <div
                key={service.num}
                className="flex flex-col items-center text-center"
              >
                {/* 1. TOP WATERMARK: Exact same font and size */}
                <div className="flex items-center justify-center gap-2.5 select-none mb-2" dir="ltr">
                  <div className="flex items-center justify-center font-mono shrink-0 gap-1">
                    <span className="text-xs sm:text-sm font-bold text-zinc-300">{service.num}</span>
                    <span className="text-zinc-600 text-[10px] font-bold">+</span>
                  </div>

                  <span className="watermark-textured-white text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-black font-mono tracking-tight uppercase block leading-none drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)]">
                    {service.watermark}
                  </span>
                </div>

                {/* 2. STATION DOT SPACING (on desktop SVG passes right through this level y=70, on mobile shows glowing dot) */}
                <div className="h-9 sm:h-11 flex items-center justify-center">
                  <div className="md:hidden relative flex items-center justify-center">
                    <span className="w-3.5 h-3.5 rounded-full bg-[#c8ff00] shadow-[0_0_12px_#c8ff00] block" />
                  </div>
                </div>

                {/* 3. TITLE & DESCRIPTION: Centered directly underneath the title */}
                <div className="w-full max-w-[340px] mx-auto flex flex-col items-center text-center">
                  {/* Service Title */}
                  <h3 className="text-base sm:text-lg lg:text-xl font-black leading-snug">
                    <span className="text-white block">{service.titleMain}</span>
                    <span className="text-[#c8ff00] block mt-0.5 drop-shadow-[0_0_10px_rgba(200,255,0,0.35)]">
                      {service.titleHighlight}
                    </span>
                  </h3>

                  {/* Centered Neon Accent Divider */}
                  <div className="w-10 h-[2px] bg-[#c8ff00] my-2.5 shadow-[0_0_8px_#c8ff00] mx-auto rounded-full" />

                  {/* Description: Directly and Centered Underneath Each Title */}
                  <div className="w-full space-y-1 font-sans">
                    <p className="text-zinc-200 font-bold text-xs sm:text-sm leading-relaxed">
                      {service.specMain}
                    </p>
                    <p className="text-zinc-400 text-[11px] sm:text-xs font-medium leading-relaxed">
                      {service.specSub}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* ===================== BOTTOM: 0% COPY-PASTE (LANDING POINT) ===================== */}
          <div className="relative z-10 pt-4 flex flex-col md:flex-row items-center justify-between gap-6" dir={isAr ? "rtl" : "ltr"}>
            {/* Left Box: OUR PROMISE */}
            <div className="border border-zinc-800/80 bg-zinc-950/80 px-4 py-3 font-mono text-[10px] tracking-wider text-left shrink-0 self-start md:self-center backdrop-blur-sm" dir="ltr">
              <div className="text-zinc-300 font-bold">{t("services_promise_1")}</div>
              <div className="text-zinc-500 mt-0.5">{t("services_promise_2")}</div>
              <div className="text-zinc-500">{t("services_promise_3")}</div>
            </div>

            {/* Centered Large Typography: 0% COPY-PASTE (Target of the Glowing Line) */}
            <div className="flex-1 flex flex-col items-center justify-center text-center">
              <div className="flex items-baseline justify-center gap-2 sm:gap-3 md:gap-5 select-none" dir="ltr">
                <span className="text-3xl sm:text-5xl lg:text-7xl xl:text-8xl font-black font-mono text-[#c8ff00] leading-none drop-shadow-[0_0_25px_rgba(200,255,0,0.45)]">
                  0%
                </span>
                <span className="text-2xl sm:text-4xl lg:text-6xl xl:text-7xl font-black font-mono tracking-wider uppercase leading-none text-white">
                  COPY-PASTE
                </span>
              </div>

              {/* Subtitle statement */}
              <p className="mt-2 text-xs sm:text-sm md:text-base text-zinc-300 font-bold font-sans max-w-xl mx-auto">
                {t("services_copypaste_sub")}
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

