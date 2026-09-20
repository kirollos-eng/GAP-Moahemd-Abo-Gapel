"use client";

import React from "react";
import { useLanguage } from "@/lib/LanguageContext";

export default function AboutSection() {
  const { t, isAr } = useLanguage();

  return (
    <section id="about" className="relative bg-[#070707] py-20 md:py-28 border-t border-zinc-900 overflow-hidden scroll-mt-20 md:scroll-mt-24">
      {/* Giant Background Watermark "COACH" - Textured White Stencil */}
      <div className="absolute inset-x-0 top-10 md:top-14 flex items-center justify-center pointer-events-none select-none overflow-hidden z-0 opacity-[0.06] md:opacity-[0.08]">
        <span className="watermark-textured-white text-[25vw] uppercase whitespace-nowrap tracking-normal block leading-none">
          COACH
        </span>
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Centered Coach Content */}
        <div className="flex flex-col items-center justify-center text-center mx-auto" dir={isAr ? "rtl" : "ltr"}>
          {/* Main Headline */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6 font-sans text-center max-w-3xl">
            {t("about_title_1")}{" "}
            <span className="text-[#c8ff00] block mt-1 drop-shadow-[0_0_20px_rgba(200,255,0,0.3)]">
              {t("about_title_2")}
            </span>
          </h2>

          {/* Paragraphs */}
          <div className="max-w-3xl mx-auto space-y-4 text-center">
            <p className="text-base sm:text-lg md:text-xl text-zinc-300 leading-relaxed font-sans font-medium">
              {t("about_p_1")} {t("about_p_2")}
            </p>

            <p className="text-sm sm:text-base md:text-lg text-zinc-400 leading-relaxed font-sans">
              {t("about_p_3")} {t("about_p_4")}
            </p>
          </div>

          {/* Micro Metrics Grid - Centered */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 pt-8 mt-10 border-t border-zinc-850/80 w-full max-w-3xl mx-auto">
            <div className="text-center">
              <div className="font-mono text-3xl sm:text-4xl font-black text-white" dir="ltr">{t("about_stat_1_val")}</div>
              <div className="text-xs sm:text-sm text-zinc-400 mt-1 font-mono">{t("about_stat_1_lbl")}</div>
            </div>
            <div className="text-center">
              <div className="font-mono text-3xl sm:text-4xl font-black text-[#c8ff00] drop-shadow-[0_0_12px_rgba(200,255,0,0.4)]" dir="ltr">{t("about_stat_2_val")}</div>
              <div className="text-xs sm:text-sm text-zinc-400 mt-1 font-mono">{t("about_stat_2_lbl")}</div>
            </div>
            <div className="text-center">
              <div className="font-mono text-3xl sm:text-4xl font-black text-white" dir="ltr">{t("about_stat_3_val")}</div>
              <div className="text-xs sm:text-sm text-zinc-400 mt-1 font-mono">{t("about_stat_3_lbl")}</div>
            </div>
            <div className="text-center">
              <div className="font-mono text-3xl sm:text-4xl font-black text-[#c8ff00] drop-shadow-[0_0_12px_rgba(200,255,0,0.4)]" dir="ltr">{t("about_stat_4_val")}</div>
              <div className="text-xs sm:text-sm text-zinc-400 mt-1 font-mono">{t("about_stat_4_lbl")}</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
