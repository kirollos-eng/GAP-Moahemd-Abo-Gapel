"use client";

import React from "react";
import { SITE_CONFIG } from "@/lib/config";
import CoachImagePlaceholder from "./CoachImagePlaceholder";

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="relative bg-[#070707] py-16 md:py-24 border-t border-zinc-900 overflow-hidden scroll-mt-20 md:scroll-mt-24"
    >
      {/* Background Cyber Grid */}
      <div className="absolute inset-0 bg-cyber-grid opacity-20 pointer-events-none" />

      {/* Atmospheric neon spot */}
      <div className="absolute top-1/3 -left-28 w-96 h-96 bg-[#c8ff00]/6 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#c8ff00]/4 rounded-full blur-[180px] pointer-events-none" />

      <div className="relative w-full max-w-[1720px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 z-10">
        {/* Top-Left Section Header matching Image 3 */}
        <div className="flex items-start gap-2.5 mb-10 md:mb-14 text-left" dir="ltr">
          <span className="text-[#c8ff00] font-mono text-sm leading-none mt-0.5">+</span>
          <div className="font-mono uppercase tracking-wider">
            <span className="text-zinc-200 font-bold text-xs sm:text-sm block">SERVICES</span>
            <span className="text-zinc-500 text-[10px] sm:text-xs block mt-0.5">BUILT AROUND YOU</span>
          </div>
        </div>

        {/* Main Grid: Left Column (3 Services + 0% COPY-PASTE), Right Column (Coach) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start" dir="ltr">
          {/* LEFT 8 COLUMNS: Services Stack & Promise */}
          <div className="lg:col-span-8 xl:col-span-8 flex flex-col justify-between relative">
            {/* SVG Dynamic Zigzag Neon Trajectory Line matching User Request */}
            <svg
              className="absolute inset-0 w-full h-[640px] hidden md:block pointer-events-none overflow-visible z-0"
              viewBox="0 0 780 620"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Continuous Zig-Zag Path (Smooth C1 Curvature without sharp angles) */}
              <path
                id="serviceZigzagPath"
                d="M 235 48 C 130 48, 48 100, 48 220 C 48 310, 110 350, 185 375 C 235 392, 220 460, 295 505 C 370 550, 510 550, 640 550"
                stroke="#c8ff00"
                strokeWidth="2.4"
                strokeOpacity="0.8"
                className="filter drop-shadow-[0_0_9px_#c8ff00]"
              />

              {/* Dot 1: Starts at NUTRITION on the RIGHT */}
              <circle
                cx="235"
                cy="48"
                r="5"
                fill="#c8ff00"
                className="filter drop-shadow-[0_0_12px_#c8ff00]"
              />

              {/* Dot 2: Node 02 at the LEFT of shifted TRAINING */}
              <circle
                cx="48"
                cy="220"
                r="6"
                fill="#c8ff00"
                className="filter drop-shadow-[0_0_14px_#c8ff00]"
              />

              {/* Dot 3: Highlight Point at SUPPORT (over letter T) */}
              <circle
                cx="185"
                cy="375"
                r="5.5"
                fill="#c8ff00"
                className="filter drop-shadow-[0_0_12px_#c8ff00]"
              />

              {/* Dot 4: Subtle marker at far right of 0% COPY-PASTE */}
              <circle
                cx="640"
                cy="550"
                r="4"
                fill="#c8ff00"
                className="filter drop-shadow-[0_0_10px_#c8ff00]"
              />

              {/* Animated Energy Particle flowing along the zigzag path */}
              <circle r="3.5" fill="#ffffff" className="filter drop-shadow-[0_0_8px_#ffffff]">
                <animateMotion
                  dur="4s"
                  repeatCount="indefinite"
                  path="M 235 48 C 130 48, 48 100, 48 220 C 48 310, 110 350, 185 375 C 235 392, 220 460, 295 505 C 370 550, 510 550, 640 550"
                  calcMode="spline"
                  keyTimes="0; 0.5; 1"
                  keySplines="0.4 0 0.2 1; 0.4 0 0.2 1"
                />
              </circle>
            </svg>

            <div className="space-y-12 md:space-y-16 relative z-10">
              {/* ===================== ROW 01: NUTRITION ===================== */}
              <div className="flex flex-col md:flex-row items-start md:items-center gap-4 sm:gap-6 lg:gap-8 group">
                {/* Left Number Marker */}
                <div className="flex items-center md:flex-col justify-center font-mono shrink-0 w-8 text-left md:text-center gap-2 md:gap-1">
                  <span className="text-sm sm:text-base font-bold text-zinc-300">01</span>
                  <span className="text-zinc-600 text-xs font-bold">+</span>
                </div>

                {/* Stencil Watermark Word */}
                <div className="shrink-0 select-none min-w-[170px] sm:min-w-[210px] lg:min-w-[240px]">
                  <span className="watermark-textured-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black font-mono tracking-tight uppercase block leading-none">
                    NUTRITION
                  </span>
                </div>

                {/* Arabic Title */}
                <div className="shrink-0 text-right md:text-right min-w-[140px] sm:min-w-[160px]" dir="rtl">
                  <h3 className="text-xl sm:text-2xl lg:text-[26px] font-black leading-snug">
                    <span className="text-white block">خطة تغذية</span>
                    <span className="text-[#c8ff00] block mt-0.5 drop-shadow-[0_0_12px_rgba(200,255,0,0.35)]">
                      مرنة ومحسوبة
                    </span>
                  </h3>
                </div>

                {/* Vertical Divider */}
                <div className="hidden md:block w-[1.5px] h-20 bg-zinc-800/90 shrink-0 mx-1" />

                {/* Bullets List */}
                <div className="flex-1 text-right" dir="rtl">
                  <ul className="space-y-1.5 text-xs sm:text-sm text-zinc-400 leading-relaxed font-sans">
                    <li className="flex items-start gap-2 justify-start">
                      <span className="text-zinc-500 font-bold select-none">•</span>
                      <span>تحديد احتياجك من السعرات بدقة.</span>
                    </li>
                    <li className="flex items-start gap-2 justify-start">
                      <span className="text-zinc-500 font-bold select-none">•</span>
                      <span>توزيع الماكروز بما يناسب هدفك ونوع جسمك.</span>
                    </li>
                    <li className="flex items-start gap-2 justify-start">
                      <span className="text-zinc-500 font-bold select-none">•</span>
                      <span>رحلات غذائية مرنة تراعي نمط حياتك.</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* ===================== ROW 02: TRAINING (Shifted to the Right) ===================== */}
              <div className="flex flex-col md:flex-row items-start md:items-center gap-4 sm:gap-6 lg:gap-8 group md:translate-x-12 lg:translate-x-16 transition-transform">
                {/* Left Number Marker */}
                <div className="flex items-center md:flex-col justify-center font-mono shrink-0 w-8 text-left md:text-center gap-2 md:gap-1.5">
                  <span className="text-sm sm:text-base font-bold text-zinc-300">02</span>
                </div>

                {/* Stencil Watermark Word */}
                <div className="shrink-0 select-none min-w-[170px] sm:min-w-[210px] lg:min-w-[240px]">
                  <span className="watermark-textured-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black font-mono tracking-tight uppercase block leading-none">
                    TRAINING
                  </span>
                </div>

                {/* Arabic Title */}
                <div className="shrink-0 text-right md:text-right min-w-[140px] sm:min-w-[160px]" dir="rtl">
                  <h3 className="text-xl sm:text-2xl lg:text-[26px] font-black leading-snug">
                    <span className="text-white block">برنامج تدريبي</span>
                    <span className="text-white block">على أحدث</span>
                    <span className="text-[#c8ff00] block mt-0.5 drop-shadow-[0_0_12px_rgba(200,255,0,0.35)]">
                      الأسس العلمية
                    </span>
                  </h3>
                </div>

                {/* Vertical Divider */}
                <div className="hidden md:block w-[1.5px] h-20 bg-zinc-800/90 shrink-0 mx-1" />

                {/* Bullets List */}
                <div className="flex-1 text-right" dir="rtl">
                  <ul className="space-y-1.5 text-xs sm:text-sm text-zinc-400 leading-relaxed font-sans">
                    <li className="flex items-start gap-2 justify-start">
                      <span className="text-zinc-500 font-bold select-none">•</span>
                      <span>تصميم برنامج مخصص لهدفك ومستواك.</span>
                    </li>
                    <li className="flex items-start gap-2 justify-start">
                      <span className="text-zinc-500 font-bold select-none">•</span>
                      <span>حجم تدريب مناسب لتقدم مستمر وآمن.</span>
                    </li>
                    <li className="flex items-start gap-2 justify-start">
                      <span className="text-zinc-500 font-bold select-none">•</span>
                      <span>تطوير البرنامج بشكل دوري حسب نتائجك.</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* ===================== ROW 03: SUPPORT ===================== */}
              <div className="flex flex-col md:flex-row items-start md:items-center gap-4 sm:gap-6 lg:gap-8 group">
                {/* Left Number Marker */}
                <div className="flex items-center md:flex-col justify-center font-mono shrink-0 w-8 text-left md:text-center gap-2 md:gap-1">
                  <span className="text-sm sm:text-base font-bold text-zinc-300">03</span>
                  <span className="text-zinc-600 text-xs font-bold">+</span>
                </div>

                {/* Stencil Watermark Word */}
                <div className="shrink-0 select-none min-w-[170px] sm:min-w-[210px] lg:min-w-[240px]">
                  <span className="watermark-textured-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black font-mono tracking-tight uppercase block leading-none">
                    SUPPORT
                  </span>
                </div>

                {/* Arabic Title */}
                <div className="shrink-0 text-right md:text-right min-w-[140px] sm:min-w-[160px]" dir="rtl">
                  <h3 className="text-xl sm:text-2xl lg:text-[26px] font-black leading-snug">
                    <span className="text-white block">دعم ومتابعة</span>
                    <span className="text-white block">حقيقية – معايا</span>
                    <span className="text-[#c8ff00] block mt-0.5 drop-shadow-[0_0_12px_rgba(200,255,0,0.35)]">
                      أنا شخصياً
                    </span>
                  </h3>
                </div>

                {/* Vertical Divider */}
                <div className="hidden md:block w-[1.5px] h-20 bg-zinc-800/90 shrink-0 mx-1" />

                {/* Bullets List */}
                <div className="flex-1 text-right" dir="rtl">
                  <ul className="space-y-1.5 text-xs sm:text-sm text-zinc-400 leading-relaxed font-sans">
                    <li className="flex items-start gap-2 justify-start">
                      <span className="text-zinc-500 font-bold select-none">•</span>
                      <span>متابعة يومية وتواصل مباشر.</span>
                    </li>
                    <li className="flex items-start gap-2 justify-start">
                      <span className="text-zinc-500 font-bold select-none">•</span>
                      <span>مراجعة فيديوهات تمرينك عبر واتساب.</span>
                    </li>
                    <li className="flex items-start gap-2 justify-start">
                      <span className="text-zinc-500 font-bold select-none">•</span>
                      <span>تعديلات فورية لأي تحدي أو مشكلة.</span>
                    </li>
                    <li className="flex items-start gap-2 justify-start">
                      <span className="text-zinc-500 font-bold select-none">•</span>
                      <span>اشراف 1:1 باهتمام كامل.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* ===================== BOTTOM: 0% COPY-PASTE (BIG IN CENTER) & OUR PROMISE ===================== */}
            <div className="mt-14 sm:mt-18 pt-8 border-t border-zinc-900/90 relative flex flex-col md:flex-row items-center justify-between gap-6">
              {/* Left Box: OUR PROMISE */}
              <div className="border border-zinc-800/80 bg-zinc-950/70 px-4 py-3 font-mono text-[10px] tracking-wider text-left shrink-0 self-start md:self-center">
                <div className="text-zinc-300 font-bold">OUR PROMISE</div>
                <div className="text-zinc-500 mt-1">NO TEMPLATES.</div>
                <div className="text-zinc-500">JUST RESULTS.</div>
              </div>

              {/* Centered Large Typography: 0% COPY-PASTE */}
              <div className="flex-1 flex flex-col items-center justify-center text-center">
                <div className="flex flex-wrap items-baseline justify-center gap-3 md:gap-5">
                  <span className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-black font-mono text-[#c8ff00] leading-none drop-shadow-[0_0_25px_rgba(200,255,0,0.45)]">
                    0%
                  </span>
                  <span className="watermark-textured-white text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-black font-mono tracking-wider uppercase leading-none select-none">
                    COPY-PASTE
                  </span>
                </div>
                <p className="text-lg sm:text-xl lg:text-2xl font-black text-white mt-3 text-center" dir="rtl">
                  كل برنامج بيتبنى من الصفر ليك أنت.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT 4 COLUMNS: Coach Silhouette / Photo Container */}
          <div className="lg:col-span-4 xl:col-span-4 relative flex items-end justify-center min-h-[500px] lg:min-h-[660px] h-full">
            <CoachImagePlaceholder
              src={SITE_CONFIG.coachImages.services}
              alt="كابتن محمد أبو جبل (GAP)"
              variant="services"
              poseLabel="صورة كابتن محمد أبو جبل"
              className="z-10"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
