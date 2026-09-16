"use client";

import React from "react";
import { SITE_CONFIG } from "@/lib/config";
import CoachImagePlaceholder from "./CoachImagePlaceholder";
import { useLanguage } from "@/lib/LanguageContext";

export default function AboutSection() {
  const { t, isAr } = useLanguage();

  const steps = [
    {
      num: t("step_01_num"),
      title: t("step_01_title"),
      desc: t("step_01_desc"),
    },
    {
      num: t("step_02_num"),
      title: t("step_02_title"),
      desc: t("step_02_desc"),
    },
    {
      num: t("step_03_num"),
      title: t("step_03_title"),
      desc: t("step_03_desc"),
    },
    {
      num: t("step_04_num"),
      title: t("step_04_title"),
      desc: t("step_04_desc"),
    },
  ];

  return (
    <section id="about" className="relative bg-[#070707] py-20 md:py-28 border-t border-zinc-900 overflow-hidden scroll-mt-20 md:scroll-mt-24">
      {/* Giant Background Watermark "ENGINEER" - Textured White Stencil */}
      <div className="absolute inset-x-0 top-12 md:top-16 flex items-center justify-center pointer-events-none select-none overflow-hidden z-0">
        <span className="watermark-textured-white text-[25vw] uppercase whitespace-nowrap tracking-wider">
          ENGINEER
        </span>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Coach Story: Text on LEFT, Coach on RIGHT matching Image 2 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center pb-14 md:pb-20">
          {/* LEFT Column: Narrative & Philosophy (lg:col-span-7) */}
          <div className="lg:col-span-7 flex flex-col items-start text-right z-10 order-2 lg:order-1">
            {/* Tag */}
            <div className="flex items-center gap-2 text-zinc-400 font-mono text-[11px] tracking-widest mb-3 uppercase">
              <span className="text-[#c8ff00] font-bold">+</span>
              <span>{t("about_badge")}</span>
            </div>

            {/* Headline */}
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-[1.08] mb-6">
              <span>{t("about_title_1")}</span>
              <br />
              <span className="text-[#c8ff00] neon-glow-text">
                {t("about_title_2")}
              </span>
            </h2>

            {/* Narrative copy */}
            <div className="text-zinc-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-xl font-normal space-y-1.5 mb-8">
              <p>{t("about_p_1")}</p>
              <p>{t("about_p_2")}</p>
              <p>{t("about_p_3")}</p>
              <p className="text-white font-semibold pt-1">{t("about_p_4")}</p>
            </div>

          </div>

          {/* RIGHT Column: Coach Visual (lg:col-span-5) */}
          <div className="lg:col-span-5 relative flex items-center justify-center order-1 lg:order-2">
            <CoachImagePlaceholder
              src={SITE_CONFIG.coachImages.about}
              alt="كابتن محمد أحمد - مهندس الأجسام"
              variant="about"
              poseLabel="صورة الكابتن (المهندس)"
            />
          </div>
        </div>

        {/* The Process Section (طريقة العمل) matching Image 2 */}
        <div id="process" className="pt-14 md:pt-18 border-t border-zinc-800/80">
          <div className="flex items-center gap-2 text-zinc-400 font-mono text-[11px] tracking-widest mb-8 uppercase">
            <span className="text-[#c8ff00] font-bold">+</span>
            <span>{t("process_badge")}</span>
          </div>

          {/* Connected Neon Process Flow */}
          <div className="relative">
            {/* Continuous yellow-green line passing horizontally through the numbers */}
            <div className="hidden md:block absolute top-6 left-12 right-12 h-[2.5px] bg-[#c8ff00]/60 shadow-[0_0_10px_#c8ff00] z-0 pointer-events-none" />

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 relative z-10">
              {steps.map((step, idx) => (
                <div
                  key={step.num}
                  className="group flex flex-col items-start text-right bg-[#0c0c0c] md:bg-transparent p-5 md:p-0 border border-zinc-850 md:border-0 transition-all duration-300"
                >
                  {/* Step Number + Glowing Green Dot */}
                  <div className="flex items-center gap-3 mb-4">
                    <span className="font-mono text-3xl md:text-4xl font-black text-zinc-500 group-hover:text-[#c8ff00] transition-colors">
                      {step.num}
                    </span>
                    <div className="w-3.5 h-3.5 rounded-full bg-[#070707] border-2 border-[#c8ff00] flex items-center justify-center shadow-[0_0_10px_#c8ff00]">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#c8ff00]" />
                    </div>
                  </div>

                  <h3 className="text-lg md:text-xl font-bold text-white mb-2 group-hover:text-[#c8ff00] transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-xs md:text-sm text-zinc-400 leading-relaxed font-normal">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Callout: "مش بس برنامج. دي منظومة متكاملة" on left, WHAT YOU GET on right */}
          <div className="mt-16 text-right pt-8 border-t border-zinc-800/80 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <p className="text-2xl md:text-3xl font-black text-white">
                {t("process_footer_1")}{" "}
                <span className="text-[#c8ff00]">{t("process_footer_2")}</span>
              </p>
            </div>
            <div className="flex items-center gap-2 font-mono text-[11px] text-zinc-500">
              <span className="text-[#c8ff00] font-bold">+</span>
              <span>WHAT YOU GET</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
