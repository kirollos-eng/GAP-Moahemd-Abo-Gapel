"use client";

import React, { useState } from "react";
import { Plus, Minus, Check, ChevronDown } from "lucide-react";
import { SITE_CONFIG, PricingPackage } from "@/lib/config";
import { useLanguage } from "@/lib/LanguageContext";
import { useCurrency, CurrencyType, CURRENCY_CONFIGS } from "@/lib/CurrencyContext";

interface PricingSectionProps {
  onSelectPackage: (pkg: PricingPackage) => void;
}

export default function PricingSection({ onSelectPackage }: PricingSectionProps) {
  const { t, isAr } = useLanguage();
  const { currency, setCurrency, symbol, getPackagePrice, formatAmount } = useCurrency();
  const [openFaq, setOpenFaq] = useState<number | null>(0); // first FAQ open by default like Image 4
  const [currencyDropdownOpen, setCurrencyDropdownOpen] = useState(false);

  // All 4 packages with clean benefits and exact AED prices
  const packagesList = [
    {
      ...SITE_CONFIG.packages[0], // 1 Month STARTER
      watermark: "STARTER",
      deliveryPrefix: isAr ? "تسليم خلال" : "Delivery within",
      deliveryTime: isAr ? "72 ساعة" : "72 Hours",
      activeDuration: isAr ? "1 شهر" : "1 Month",
      durationOptions: isAr 
        ? ["1 شهر", "3 شهور", "6 شهور"] 
        : ["1 Month", "3 Months", "6 Months"],
    },
    {
      ...SITE_CONFIG.packages[1], // 3 Months SMART
      watermark: "SMART",
      deliveryPrefix: isAr ? "تسليم خلال" : "Delivery within",
      deliveryTime: isAr ? "72 ساعة" : "72 Hours",
      activeDuration: isAr ? "3 شهور" : "3 Months",
      durationOptions: isAr 
        ? ["3 شهور", "6 شهور", "12 شهر"] 
        : ["3 Months", "6 Months", "12 Months"],
    },
    {
      ...SITE_CONFIG.packages[2], // 6 Months VIP
      watermark: "VIP",
      deliveryPrefix: isAr ? "تسليم خلال" : "Delivery within",
      deliveryTime: isAr ? "48 ساعة" : "48 Hours",
      activeDuration: isAr ? "6 شهور" : "6 Months",
      durationOptions: isAr 
        ? ["3 شهور", "6 شهور", "12 شهر"] 
        : ["3 Months", "6 Months", "12 Months"],
    },
    {
      ...SITE_CONFIG.packages[3], // 1 Year ELITE
      watermark: "ELITE",
      deliveryPrefix: isAr ? "تسليم في" : "Delivery",
      deliveryTime: isAr ? "نفس اليوم" : "Same-Day",
      activeDuration: isAr ? "1 سنة (12 شهر)" : "1 Year (12 Mo)",
      durationOptions: isAr 
        ? ["1 سنة (12 شهر)", "6 شهور", "3 شهور"] 
        : ["1 Year (12 Mo)", "6 Months", "3 Months"],
    },
  ];

  const comparisonRows = [
    { title: t("row_nutrition"), starter: true, smart: true, vip: true, elite: true },
    { title: t("row_training"), starter: true, smart: true, vip: true, elite: true },
    { title: t("row_supplements"), starter: true, smart: true, vip: true, elite: true },
    { title: t("row_daily_whatsapp"), starter: false, smart: true, vip: true, elite: true },
    { title: t("row_weekly_video"), starter: false, smart: true, vip: true, elite: true },
    { title: t("row_priority_support"), starter: false, smart: false, vip: true, elite: true },
    { title: t("row_calls"), starter: false, smart: false, vip: false, elite: true },
    { title: t("row_performance"), starter: false, smart: false, vip: false, elite: true },
    { title: t("row_reports"), starter: false, smart: false, vip: false, elite: true },
    { title: t("row_prep"), starter: false, smart: false, vip: false, elite: true },
  ];

  const faqs = [
    { q: t("faq_1_q"), a: t("faq_1_a") },
    { q: t("faq_2_q"), a: t("faq_2_a") },
    { q: t("faq_3_q"), a: t("faq_3_a") },
    { q: t("faq_4_q"), a: t("faq_4_a") },
    { q: t("faq_5_q"), a: t("faq_5_a") },
  ];

  return (
    <section id="packages" className="relative bg-[#070707] py-16 md:py-24 border-t border-zinc-900 overflow-hidden w-full scroll-mt-20 md:scroll-mt-24">
      {/* Background Cyber Grid */}
      <div className="absolute inset-0 bg-cyber-grid opacity-25 pointer-events-none" />

      {/* Atmospheric Neon Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#c8ff00]/4 rounded-full blur-[220px] pointer-events-none" />

      {/* Top HUD Indicators with Currency Selector Dropdown */}
      <div className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-8">
        <div className="flex flex-wrap items-center justify-between gap-4 text-right">
          <div className="flex items-center gap-2 font-mono text-[11px] text-[#c8ff00] uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-[#c8ff00]" />
            <span>PRICING PACKAGES // {currency}</span>
          </div>

          {/* Currency Switcher Dropdown placed right next to plans */}
          <div className="flex items-center gap-2.5">
            <span className="text-xs font-mono text-zinc-400">
              {isAr ? "اختر العملة:" : "Currency:"}
            </span>
            <div className="relative">
              <button
                type="button"
                onClick={() => setCurrencyDropdownOpen(!currencyDropdownOpen)}
                className="flex items-center gap-2 px-3 py-1.5 bg-zinc-900 border border-zinc-750 hover:border-[#c8ff00] text-[#c8ff00] font-mono font-bold text-xs transition-all shadow-[0_0_15px_rgba(0,0,0,0.6)] cursor-pointer"
              >
                <span>{CURRENCY_CONFIGS[currency].flag}</span>
                <span>{CURRENCY_CONFIGS[currency].code}</span>
                <span className="text-zinc-400">({symbol})</span>
                <ChevronDown className={`w-3.5 h-3.5 text-zinc-400 transition-transform ${currencyDropdownOpen ? "rotate-180" : ""}`} />
              </button>

              {currencyDropdownOpen && (
                <div
                  className="absolute left-0 sm:right-0 mt-1 w-44 bg-[#0d0d0d] border border-zinc-700 shadow-[0_15px_35px_rgba(0,0,0,0.95)] py-1 z-50 animate-in fade-in slide-in-from-top-2"
                  dir={isAr ? "rtl" : "ltr"}
                >
                  {(Object.keys(CURRENCY_CONFIGS) as CurrencyType[]).map((c) => {
                    const cfg = CURRENCY_CONFIGS[c];
                    const isSelected = currency === c;
                    return (
                      <button
                        key={c}
                        onClick={() => {
                          setCurrency(c);
                          setCurrencyDropdownOpen(false);
                        }}
                        className={`w-full flex items-center justify-between px-3 py-2 text-xs font-mono transition-colors cursor-pointer ${
                          isSelected
                            ? "bg-[#c8ff00]/15 text-[#c8ff00] font-bold"
                            : "text-zinc-300 hover:bg-zinc-850"
                        }`}
                      >
                        <span className="flex items-center gap-2">
                          <span>{cfg.flag}</span>
                          <span>{cfg.code}</span>
                        </span>
                        <span className="text-zinc-400">{isAr ? cfg.symbolAr : cfg.symbolEn}</span>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* FULL-WIDTH PLANS CARDS ROW (Matching Image 4: Full Width, Edge-to-Edge with 1px border dividers & interactive hover width) */}
      <div className="w-full border-y border-zinc-800/90 bg-[#090909]">
        <div className="pricing-cards-container w-full items-stretch" dir={isAr ? "rtl" : "ltr"}>
          {packagesList.map((pkg) => {
            const pricing = getPackagePrice(pkg.id);
            return (
              <div
                key={pkg.id}
                className="pricing-card-interactive relative flex flex-col justify-between bg-[#0a0a0a] p-6 lg:p-7 xl:p-8 overflow-hidden group min-h-[620px]"
              >
                {/* Green vertical glow overlay on hover matching the screenshot */}
                <div className="pricing-card-glow absolute inset-0 bg-gradient-to-b from-[#c8ff00]/22 via-[#c8ff00]/5 to-transparent opacity-0 transition-opacity duration-300 pointer-events-none z-0" />
                <div className="absolute top-0 left-0 right-0 h-1 bg-[#c8ff00] opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[0_0_15px_#c8ff00] z-20" />

                {/* Giant Background Watermark - Upper area on the left: Unconstrained & Large */}
                <div className="absolute top-2 left-4 sm:left-6 pointer-events-none select-none z-0" dir="ltr">
                  <span className="watermark-card-white text-7xl sm:text-8xl xl:text-9xl 2xl:text-[130px] font-black uppercase transition-all duration-300 block tracking-tight">
                    {pkg.watermark}
                  </span>
                </div>

                {/* Card Content Top */}
                <div className="relative z-10 w-full text-right">
                  {/* Delivery Time Badge firmly on the physical right edge and lowered down */}
                  <div
                    className="w-full min-h-[145px] sm:min-h-[160px] xl:min-h-[175px] pt-14 sm:pt-16 xl:pt-20 mb-2 select-none"
                    style={{ textAlign: "right" }}
                  >
                    {/* Line 1: White text (تسليم خلال / تسليم في) */}
                    <div className="text-xs sm:text-sm font-bold text-white font-mono tracking-wide">
                      {pkg.deliveryPrefix}
                    </div>
                    {/* Line 2: Green delivery duration (72 ساعة / 48 ساعة / نفس اليوم) */}
                    <div className="text-xl sm:text-2xl xl:text-3xl font-black text-[#c8ff00] font-mono tracking-tight leading-snug mt-0.5">
                      {pkg.deliveryTime}
                    </div>
                  </div>

                  {/* Duration Row connected directly to the horizontal border line underneath */}
                  <div className="relative w-full border-b border-zinc-800 mb-6">
                    <div
                      className="flex items-center justify-end gap-3.5 sm:gap-4 font-mono text-xs"
                      dir={isAr ? "rtl" : "ltr"}
                    >
                      {pkg.durationOptions.map((dur) => {
                        const isActive = dur === pkg.activeDuration;
                        return (
                          <span
                            key={dur}
                            className={`relative pb-2.5 text-xs font-mono select-none transition-colors cursor-default ${
                              isActive
                                ? "text-[#c8ff00] font-bold after:content-[''] after:absolute after:-bottom-[1px] after:left-0 after:right-0 after:h-[2px] after:bg-[#c8ff00] after:shadow-[0_0_10px_#c8ff00]"
                                : "text-zinc-500 hover:text-zinc-400"
                            }`}
                          >
                            {dur}
                          </span>
                        );
                      })}
                    </div>
                  </div>

                  {/* Features List with bullets - Right to Left strictly */}
                  <ul
                    className="space-y-3 pt-2 text-xs sm:text-sm text-zinc-300"
                    dir={isAr ? "rtl" : "ltr"}
                  >
                    {pkg.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-2.5 text-right">
                        <span className="text-[#c8ff00] font-bold text-base select-none shrink-0">•</span>
                        <span className="text-zinc-200 font-medium text-xs sm:text-sm leading-tight">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Bottom: Dynamic Multi-Currency Price + Button + Availability */}
                <div className="relative z-10 pt-6 mt-8 border-t border-zinc-850">
                  {/* Dynamic Price block with selected currency */}
                  <div className="flex items-baseline justify-between mb-4">
                    <div className="text-right">
                      <span className="text-3xl sm:text-4xl font-black font-mono text-white">
                        {formatAmount(pricing.total)}
                      </span>
                      <span className="text-sm font-bold text-[#c8ff00] mr-1.5 font-mono">
                        {symbol}
                      </span>
                    </div>
                    <div className="text-[11px] text-zinc-400 font-mono">
                      ({formatAmount(pricing.monthly)} {symbol} {t("pricing_per_month")})
                    </div>
                  </div>

                  {/* Action Button: turns solid neon green on hover */}
                  <button
                    onClick={() => onSelectPackage(pkg)}
                    className="pricing-card-btn w-full py-3.5 bg-zinc-900 border border-zinc-700 text-white font-black text-sm tracking-wide transition-all duration-300 flex items-center justify-center cursor-pointer active:scale-95"
                  >
                    <span>{t("pricing_cta")}</span>
                  </button>

                  {/* Status Indicator */}
                  <div className="mt-3 text-center text-[11px] font-mono text-zinc-500 flex items-center justify-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#c8ff00]" />
                    <span>{t("pricing_availability")}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ================= COMPACT COMPARISON & CHOOSE YOUR LEVEL WATERMARK & FAQ (Matching Image 4 Side-by-Side Layout) ================= */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 md:pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start" dir={isAr ? "rtl" : "ltr"}>
          {/* LEFT COLUMN (Image 4): Giant Unobstructed "CHOOSE YOUR LEVEL" Watermark + FAQ Accordion */}
          <div className="lg:col-span-5 relative flex flex-col justify-between">
            {/* Fully visible "CHOOSE YOUR LEVEL" watermark without any table blocking it */}
            <div className="mb-6 pointer-events-none select-none">
              <span className="watermark-textured-white text-6xl sm:text-7xl xl:text-8xl font-black uppercase tracking-tight block leading-[0.88]">
                CHOOSE
                <br />
                YOUR LEVEL
              </span>
            </div>

            {/* FAQ Accordion nestled right under CHOOSE YOUR LEVEL exactly like Image 4 */}
            <div id="faq" className="w-full pt-4 border-t border-zinc-850/80 scroll-mt-24 md:scroll-mt-28">
              <h3 className="text-xl sm:text-2xl font-black text-white text-right mb-5">
                {t("faq_title")}
              </h3>

              <div className="space-y-3">
                {faqs.map((faq, idx) => {
                  const isOpen = openFaq === idx;
                  return (
                    <div
                      key={idx}
                      className={`border transition-all duration-300 p-4 ${
                        isOpen
                          ? "border-[#c8ff00]/40 bg-zinc-900/60 shadow-[0_4px_20px_rgba(0,0,0,0.4)]"
                          : "border-zinc-850 bg-zinc-950/60 hover:border-zinc-700"
                      }`}
                    >
                      <button
                        onClick={() => setOpenFaq(isOpen ? null : idx)}
                        className="w-full flex items-center justify-between gap-4 text-right cursor-pointer group select-none"
                        aria-expanded={isOpen}
                      >
                        <span
                          className={`text-xs sm:text-sm font-semibold transition-colors duration-200 ${
                            isOpen ? "text-[#c8ff00]" : "text-zinc-200 group-hover:text-white"
                          }`}
                        >
                          {faq.q}
                        </span>
                        <div
                          className={`shrink-0 transition-transform duration-300 ease-out ${
                            isOpen ? "rotate-180 text-[#c8ff00]" : "rotate-0 text-zinc-400 group-hover:text-white"
                          }`}
                        >
                          <ChevronDown className="w-4 h-4" />
                        </div>
                      </button>

                      {/* Smooth CSS Grid Height Transition for Opening & Closing */}
                      <div
                        className={`grid transition-all duration-300 ease-in-out ${
                          isOpen
                            ? "grid-rows-[1fr] opacity-100 mt-2.5"
                            : "grid-rows-[0fr] opacity-0 mt-0 pointer-events-none"
                        }`}
                      >
                        <div className="overflow-hidden">
                          <p className="text-zinc-400 text-xs leading-relaxed text-right font-sans pb-1">
                            {faq.a}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN (Image 4): Compact Quick Comparison Table */}
          <div className="lg:col-span-7">
            <div className="overflow-x-auto border border-zinc-800/90 bg-[#0a0a0a] shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
              <table className="w-full text-right border-collapse text-xs">
                <thead>
                  <tr className="border-b border-zinc-800 text-zinc-300 font-mono bg-zinc-950/80">
                    <th className="py-3 px-4 font-bold text-white text-right text-xs sm:text-sm">
                      {t("table_title")}
                    </th>
                    <th className="py-3 px-2 text-center font-bold text-zinc-400 text-[11px] sm:text-xs">
                      STARTER
                    </th>
                    <th className="py-3 px-2 text-center font-bold text-zinc-400 text-[11px] sm:text-xs">
                      SMART
                    </th>
                    <th className="py-3 px-2 text-center font-bold text-[#c8ff00] bg-[#c8ff00]/5 text-[11px] sm:text-xs">
                      VIP 🔥
                    </th>
                    <th className="py-3 px-2 text-center font-bold text-zinc-300 text-[11px] sm:text-xs">
                      ELITE 🏆
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-900 text-xs text-zinc-300 font-sans">
                  {comparisonRows.map((row, idx) => (
                    <tr key={idx} className="hover:bg-zinc-900/40 transition-colors">
                      <td className="py-2.5 px-4 text-zinc-300 font-medium text-xs leading-tight">
                        {row.title}
                      </td>
                      <td className="py-2.5 px-2 text-center font-mono">
                        {row.starter ? (
                          <span className="text-[#c8ff00] font-bold text-sm">✓</span>
                        ) : (
                          <span className="text-zinc-700">—</span>
                        )}
                      </td>
                      <td className="py-2.5 px-2 text-center font-mono">
                        {row.smart ? (
                          <span className="text-[#c8ff00] font-bold text-sm">✓</span>
                        ) : (
                          <span className="text-zinc-700">—</span>
                        )}
                      </td>
                      <td className="py-2.5 px-2 text-center font-mono bg-[#c8ff00]/5">
                        {row.vip ? (
                          <span className="text-[#c8ff00] font-bold text-sm">✓</span>
                        ) : (
                          <span className="text-zinc-700">—</span>
                        )}
                      </td>
                      <td className="py-2.5 px-2 text-center font-mono">
                        {row.elite ? (
                          <span className="text-[#c8ff00] font-bold text-sm">✓</span>
                        ) : (
                          <span className="text-zinc-700">—</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-3 flex items-center justify-between text-[11px] font-mono text-zinc-500 px-1">
              <span>* ALL PROGRAMS INCLUDE DIRECT 1:1 COACHING</span>
              <span className="text-[#c8ff00] font-semibold">0% COPY-PASTE GUARANTEE</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
