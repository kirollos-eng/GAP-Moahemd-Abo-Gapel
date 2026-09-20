"use client";

import React from "react";
import { useLanguage } from "@/lib/LanguageContext";

export default function ProcessSection() {
  const { t, isAr } = useLanguage();

  const steps = [
    {
      num: "01",
      watermark: "PACKAGE",
      titleMain: isAr ? "اختار باقتك" : "Select Your Plan",
      titleHighlight: isAr ? "المناسبة لهدفك" : "Built For Your Goal",
      specMain: isAr ? "تحديد الهدف ونمط الحياة" : "Goal & Lifestyle",
      specSub: isAr ? "باقات شهر، 3، 6، أو 12 شهر" : "1, 3, 6, or 12 Month Plans",
    },
    {
      num: "02",
      watermark: "PAYMENT",
      titleMain: isAr ? "ادفع وأكّد" : "Pay & Confirm",
      titleHighlight: isAr ? "بأمان وسهولة" : "Safe & Seamless",
      specMain: isAr ? "سداد آمن وسريع" : "Instant Verification",
      specSub: isAr ? "تأكيد فوري وتفعيل مباشر للحساب" : "Instant Confirmation & Onboarding",
    },
    {
      num: "03",
      watermark: "INTAKE",
      titleMain: isAr ? "املأ استمارة" : "Complete Assessment",
      titleHighlight: isAr ? "التقييم الشاملة" : "Deep Case Analysis",
      specMain: isAr ? "استبيان تقييم شامل" : "Medical & Metric Intake",
      specSub: isAr ? "تحليل السعرات والماكروز والتاريخ الصحي" : "Target Calorie & Macro Blueprint",
    },
    {
      num: "04",
      watermark: "DELIVERY",
      titleMain: isAr ? "استلم خطتك" : "Receive Blueprint",
      titleHighlight: isAr ? "وانطلق للتغيير" : "Execute 1:1 Coaching",
      specMain: isAr ? "تسليم الخطة كاملة" : "48-72hr Delivery",
      specSub: isAr ? "شرح بالفيديو ومتابعة يومية 1:1" : "Full Video Breakdown & Daily Support",
    },
  ];

  // Arabic Path (RTL):
  // Col 1 (PACKAGE) is at x=1050, Col 2 (PAYMENT) at x=750, Col 3 (INTAKE) at x=450, Col 4 (DELIVERY) at x=150.
  // Station dots at y=70.
  // After Col 4 at (150, 70), line loops down the left side, sweeps inward, and lands cleanly ABOVE 100% SYSTEMIZED at (600, 365), safely before the Arabic text.
  const arabicPath =
    "M 1170 100 C 1130 100, 1090 70, 1050 70 C 975 70, 945 145, 900 145 C 855 145, 825 70, 750 70 C 675 70, 645 145, 600 145 C 555 145, 525 70, 450 70 C 375 70, 345 145, 300 145 C 255 145, 225 70, 150 70 C 75 70, 35 130, 35 220 C 35 295, 80 360, 200 365 C 330 368, 460 368, 600 368";

  // English Path (LTR):
  // Col 1 (PACKAGE) is at x=150, Col 2 (PAYMENT) at x=450, Col 3 (INTAKE) at x=750, Col 4 (DELIVERY) at x=1050.
  // Station dots at y=70.
  // After Col 4 at (1050, 70), line loops down the right side, sweeps inward, and lands cleanly ABOVE 100% SYSTEMIZED at (600, 365), safely before the text.
  const englishPath =
    "M 30 100 C 70 100, 110 70, 150 70 C 225 70, 255 145, 300 145 C 345 145, 375 70, 450 70 C 525 70, 555 145, 600 145 C 645 145, 675 70, 750 70 C 825 70, 855 145, 900 145 C 945 145, 975 70, 1050 70 C 1125 70, 1165 130, 1165 220 C 1165 295, 1120 360, 1000 365 C 870 368, 740 368, 600 368";

  const currentPath = isAr ? arabicPath : englishPath;

  // Mobile Zigzag Path (< lg):
  // Clean S-curve zigzag connecting:
  // Node 1 (Left: 100, 75) -> Node 2 (Right: 260, 265) -> Node 3 (Left: 100, 455) -> Node 4 (Right: 260, 645) -> Landing (Center: 180, 800)
  const mobileZigzagPath =
    "M 100 75 C 100 170, 260 170, 260 265 C 260 360, 100 360, 100 455 C 100 550, 260 550, 260 645 C 260 735, 180 745, 180 800";

  return (
    <section
      id="process"
      className="relative bg-[#070707] py-16 md:py-24 border-t border-zinc-900 overflow-hidden scroll-mt-20 md:scroll-mt-24"
    >
      {/* Background Cyber Grid */}
      <div className="absolute inset-0 bg-cyber-grid opacity-20 pointer-events-none" />

      {/* Atmospheric neon spots */}
      <div className="absolute top-1/4 -right-28 w-96 h-96 bg-[#c8ff00]/6 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-1/3 -left-28 w-[500px] h-[500px] bg-[#c8ff00]/4 rounded-full blur-[180px] pointer-events-none" />

      {/* Giant Background Watermark "PROCESS" */}
      <div className="absolute inset-x-0 top-1 md:top-4 flex items-center justify-center pointer-events-none select-none z-0 overflow-hidden opacity-[0.20] md:opacity-[0.24]">
        <span className="watermark-textured-white text-[24vw] sm:text-[22vw] md:text-[22vw] uppercase whitespace-nowrap tracking-normal block leading-none">
          PROCESS
        </span>
      </div>

      <div className="relative w-full max-w-[1720px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 z-10">
        {/* Full Interactive Canvas: Wraps 4 Columns AND 100% SYSTEMIZED */}
        <div className="relative" dir={isAr ? "rtl" : "ltr"}>
          
          {/* Continuous Glowing Zigzag SVG Line: passes through all 4 station dots & lands directly on 100% SYSTEMIZED */}
          <div className="hidden lg:block absolute inset-0 pointer-events-none z-0" dir="ltr">
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

              {/* Animated Light Photon traveling along the entire path to 100% SYSTEMIZED */}
              <circle r="4.5" fill="#ffffff" className="filter drop-shadow-[0_0_14px_#ffffff]">
                <animateMotion
                  dur="5.2s"
                  repeatCount="indefinite"
                  path={currentPath}
                  calcMode="spline"
                  keyTimes="0; 0.5; 1"
                  keySplines="0.4 0 0.2 1; 0.4 0 0.2 1"
                />
              </circle>

              {/* POINT 1 (Center of Col 1: x=1050 in AR, x=150 in EN) */}
              <g>
                <circle cx={isAr ? "1050" : "150"} cy="70" r="16" fill="#c8ff00" fillOpacity="0.18" className="animate-pulse" />
                <circle cx={isAr ? "1050" : "150"} cy="70" r="7" fill="#c8ff00" className="filter drop-shadow-[0_0_14px_#c8ff00]" />
                <circle cx={isAr ? "1050" : "150"} cy="70" r="3.5" fill="#ffffff" />
              </g>

              {/* POINT 2 (Center of Col 2: x=750 in AR, x=450 in EN) */}
              <g>
                <circle cx={isAr ? "750" : "450"} cy="70" r="16" fill="#c8ff00" fillOpacity="0.18" className="animate-pulse" />
                <circle cx={isAr ? "750" : "450"} cy="70" r="7" fill="#c8ff00" className="filter drop-shadow-[0_0_14px_#c8ff00]" />
                <circle cx={isAr ? "750" : "450"} cy="70" r="3.5" fill="#ffffff" />
              </g>

              {/* POINT 3 (Center of Col 3: x=450 in AR, x=750 in EN) */}
              <g>
                <circle cx={isAr ? "450" : "750"} cy="70" r="16" fill="#c8ff00" fillOpacity="0.18" className="animate-pulse" />
                <circle cx={isAr ? "450" : "750"} cy="70" r="7" fill="#c8ff00" className="filter drop-shadow-[0_0_14px_#c8ff00]" />
                <circle cx={isAr ? "450" : "750"} cy="70" r="3.5" fill="#ffffff" />
              </g>

              {/* POINT 4 (Center of Col 4: x=150 in AR, x=1050 in EN) */}
              <g>
                <circle cx={isAr ? "150" : "1050"} cy="70" r="16" fill="#c8ff00" fillOpacity="0.18" className="animate-pulse" />
                <circle cx={isAr ? "150" : "1050"} cy="70" r="7" fill="#c8ff00" className="filter drop-shadow-[0_0_14px_#c8ff00]" />
                <circle cx={isAr ? "150" : "1050"} cy="70" r="3.5" fill="#ffffff" />
              </g>

              {/* FINAL LANDING POINT: Resting cleanly above 100% SYSTEMIZED */}
              <g>
                <circle cx="600" cy="368" r="16" fill="#c8ff00" fillOpacity="0.25" className="animate-ping" />
                <circle cx="600" cy="368" r="7" fill="#c8ff00" className="filter drop-shadow-[0_0_16px_#c8ff00]" />
                <circle cx="600" cy="368" r="3.5" fill="#ffffff" />
              </g>
            </svg>
          </div>

          {/* ===================== MOBILE: ALTERNATING ZIGZAG TIMELINE (< lg) ===================== */}
          <div className="lg:hidden relative w-full mb-12">
            {/* Mobile Glowing Zigzag SVG Line */}
            <div className="absolute inset-0 pointer-events-none z-0" dir="ltr">
              <svg
                className="w-full h-full overflow-visible"
                viewBox="0 0 360 820"
                fill="none"
                preserveAspectRatio="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Outer Neon Glow Path */}
                <path
                  d={mobileZigzagPath}
                  stroke="#c8ff00"
                  strokeWidth="6"
                  strokeOpacity="0.25"
                  className="filter blur-[4px]"
                />

                {/* Core Sharp Glowing Zigzag Neon Path */}
                <path
                  d={mobileZigzagPath}
                  stroke="#c8ff00"
                  strokeWidth="2.5"
                  strokeOpacity="0.95"
                  className="filter drop-shadow-[0_0_10px_#c8ff00]"
                />

                {/* Animated Light Photon traveling along the zigzag path */}
                <circle r="4" fill="#ffffff" className="filter drop-shadow-[0_0_12px_#ffffff]">
                  <animateMotion
                    dur="5.5s"
                    repeatCount="indefinite"
                    path={mobileZigzagPath}
                    calcMode="spline"
                    keyTimes="0; 0.5; 1"
                    keySplines="0.4 0 0.2 1; 0.4 0 0.2 1"
                  />
                </circle>

                {/* POINT 1: Exactly at Step 1 Station */}
                <g>
                  <circle cx="100" cy="75" r="14" fill="#c8ff00" fillOpacity="0.2" className="animate-pulse" />
                  <circle cx="100" cy="75" r="6" fill="#c8ff00" className="filter drop-shadow-[0_0_12px_#c8ff00]" />
                  <circle cx="100" cy="75" r="3" fill="#ffffff" />
                </g>

                {/* POINT 2: Exactly at Step 2 Station */}
                <g>
                  <circle cx="260" cy="265" r="14" fill="#c8ff00" fillOpacity="0.2" className="animate-pulse" />
                  <circle cx="260" cy="265" r="6" fill="#c8ff00" className="filter drop-shadow-[0_0_12px_#c8ff00]" />
                  <circle cx="260" cy="265" r="3" fill="#ffffff" />
                </g>

                {/* POINT 3: Exactly at Step 3 Station */}
                <g>
                  <circle cx="100" cy="455" r="14" fill="#c8ff00" fillOpacity="0.2" className="animate-pulse" />
                  <circle cx="100" cy="455" r="6" fill="#c8ff00" className="filter drop-shadow-[0_0_12px_#c8ff00]" />
                  <circle cx="100" cy="455" r="3" fill="#ffffff" />
                </g>

                {/* POINT 4: Exactly at Step 4 Station */}
                <g>
                  <circle cx="260" cy="645" r="14" fill="#c8ff00" fillOpacity="0.2" className="animate-pulse" />
                  <circle cx="260" cy="645" r="6" fill="#c8ff00" className="filter drop-shadow-[0_0_12px_#c8ff00]" />
                  <circle cx="260" cy="645" r="3" fill="#ffffff" />
                </g>

                {/* LANDING POINT: Resting cleanly above 100% SYSTEMIZED */}
                <g>
                  <circle cx="180" cy="800" r="14" fill="#c8ff00" fillOpacity="0.25" className="animate-ping" />
                  <circle cx="180" cy="800" r="6" fill="#c8ff00" className="filter drop-shadow-[0_0_12px_#c8ff00]" />
                  <circle cx="180" cy="800" r="3" fill="#ffffff" />
                </g>
              </svg>
            </div>

            {/* Mobile Alternating Items Stack */}
            <div className="relative z-10 flex flex-col gap-8" dir={isAr ? "rtl" : "ltr"}>
              {steps.map((step, idx) => {
                // Alternates: idx 0 Left, idx 1 Right, idx 2 Left, idx 3 Right
                const isLeft = idx % 2 === 0;
                return (
                  <div
                    key={step.num}
                    className={`flex ${
                      isLeft
                        ? isAr
                          ? "justify-end"
                          : "justify-start"
                        : isAr
                        ? "justify-start"
                        : "justify-end"
                    } w-full`}
                  >
                    <div className="w-[66%] max-w-[260px] flex flex-col items-center text-center">
                      {/* Header: Large Watermark & Number */}
                      <div className="flex items-center justify-center gap-2 select-none mb-1.5" dir="ltr">
                        <div className="flex items-center justify-center font-mono shrink-0 gap-1">
                          <span className="text-sm font-bold text-zinc-300">{step.num}</span>
                          <span className="text-zinc-600 text-xs font-bold">+</span>
                        </div>
                        <span className="watermark-textured-white text-3xl sm:text-4xl font-black font-mono tracking-tight uppercase block leading-none drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)]">
                          {step.watermark}
                        </span>
                      </div>

                      {/* Station Dot Spacer (matches cy: 75, 265, 455, 645) */}
                      <div className="h-8 flex items-center justify-center" />

                      {/* Title & Description */}
                      <div className="w-full flex flex-col items-center text-center">
                        <h3 className="text-base sm:text-lg font-black leading-snug">
                          <span className="text-white block drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                            {step.titleMain}
                          </span>
                          <span className="text-[#c8ff00] block mt-0.5 drop-shadow-[0_0_10px_rgba(200,255,0,0.4)]">
                            {step.titleHighlight}
                          </span>
                        </h3>

                        <div className="w-8 h-[2px] bg-[#c8ff00] my-2 shadow-[0_0_8px_#c8ff00] mx-auto rounded-full" />

                        <div className="w-full space-y-1 font-sans">
                          <p className="text-zinc-100 font-bold text-xs sm:text-sm leading-relaxed drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]">
                            {step.specMain}
                          </p>
                          <p className="text-zinc-300 font-medium text-xs leading-relaxed drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]">
                            {step.specSub}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ===================== DESKTOP: 4 PROCESS COLUMNS (lg+) ===================== */}
          <div className="hidden lg:grid lg:grid-cols-4 gap-6 xl:gap-8 relative z-10 mb-14 md:mb-20">
            {steps.map((step) => (
              <div
                key={step.num}
                className="flex flex-col items-center text-center"
              >
                {/* 1. TOP WATERMARK: Exact same font and size as Services */}
                <div className="flex items-center justify-center gap-2.5 select-none mb-2" dir="ltr">
                  <div className="flex items-center justify-center font-mono shrink-0 gap-1">
                    <span className="text-xs sm:text-sm font-bold text-zinc-300">{step.num}</span>
                    <span className="text-zinc-600 text-[10px] font-bold">+</span>
                  </div>

                  <span className="watermark-textured-white text-2xl sm:text-3xl md:text-3xl lg:text-3xl xl:text-4xl font-black font-mono tracking-tight uppercase block leading-none drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)]">
                    {step.watermark}
                  </span>
                </div>

                {/* 2. STATION DOT SPACING */}
                <div className="h-9 sm:h-11 flex items-center justify-center" />

                {/* 3. TITLE & DESCRIPTION: Centered directly underneath each title */}
                <div className="w-full max-w-[300px] mx-auto flex flex-col items-center text-center">
                  {/* Step Title */}
                  <h3 className="text-base sm:text-lg font-black leading-snug">
                    <span className="text-white block">{step.titleMain}</span>
                    <span className="text-[#c8ff00] block mt-0.5 drop-shadow-[0_0_10px_rgba(200,255,0,0.35)]">
                      {step.titleHighlight}
                    </span>
                  </h3>

                  {/* Centered Neon Accent Divider */}
                  <div className="w-10 h-[2px] bg-[#c8ff00] my-2.5 shadow-[0_0_8px_#c8ff00] mx-auto rounded-full" />

                  {/* Description: Directly and Centered Underneath Each Title */}
                  <div className="w-full space-y-1 font-sans">
                    <p className="text-zinc-200 font-bold text-xs sm:text-sm leading-relaxed">
                      {step.specMain}
                    </p>
                    <p className="text-zinc-400 text-[11px] sm:text-xs font-medium leading-relaxed">
                      {step.specSub}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* ===================== BOTTOM: 100% SYSTEMIZED (LANDING POINT) ===================== */}
          <div className="relative z-10 pt-4 flex flex-col md:flex-row items-center justify-between gap-6" dir={isAr ? "rtl" : "ltr"}>
            {/* Left Box: WHAT YOU GET */}
            <div className="border border-zinc-800/80 bg-zinc-950/80 px-4 py-3 font-mono text-[10px] tracking-wider text-left shrink-0 self-start md:self-center backdrop-blur-sm" dir="ltr">
              <div className="text-zinc-300 font-bold">WHAT YOU GET</div>
              <div className="text-zinc-500 mt-0.5">TOTAL CLARITY.</div>
              <div className="text-zinc-500">1:1 EXECUTION.</div>
            </div>

            {/* Centered Large Typography: 100% SYSTEMIZED (Target of the Glowing Line) */}
            <div className="flex-1 flex flex-col items-center justify-center text-center">
              <div className="flex items-baseline justify-center gap-2 sm:gap-3 md:gap-5 select-none" dir="ltr">
                <span className="text-3xl sm:text-5xl lg:text-7xl xl:text-8xl font-black font-mono text-[#c8ff00] leading-none drop-shadow-[0_0_25px_rgba(200,255,0,0.45)]">
                  100%
                </span>
                <span className="text-2xl sm:text-4xl lg:text-6xl xl:text-7xl font-black font-mono tracking-wider uppercase leading-none text-white">
                  SYSTEMIZED
                </span>
              </div>

              {/* Subtitle statement */}
              <p className="mt-2 text-xs sm:text-sm md:text-base text-zinc-300 font-bold font-sans max-w-xl mx-auto">
                {t("process_footer_1")}{" "}
                <span className="text-[#c8ff00] font-black">{t("process_footer_2")}</span>{" "}
                {isAr ? "— من أول يوم لآخر يوم.. خطتك واضحة وخطواتك محسوبة." : "— From day one to the finish line.. zero guesswork, purely calculated."}
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
