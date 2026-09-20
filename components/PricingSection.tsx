"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { SITE_CONFIG, PricingPackage } from "@/lib/config";
import { useLanguage } from "@/lib/LanguageContext";
import { useCurrency, CurrencyType, CURRENCY_CONFIGS } from "@/lib/CurrencyContext";

interface PricingSectionProps {
  onSelectPackage?: (pkg: PricingPackage) => void;
}

const INITIAL_SPOTS: Record<string, number> = {
  "1-month": 6,
  "3-months": 8,
  "6-months": 7,
  "1-year": 10,
};

export default function PricingSection({ onSelectPackage }: PricingSectionProps) {
  const { t, isAr } = useLanguage();
  const { currency, symbol, getPackagePrice, formatAmount } = useCurrency();
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [spots, setSpots] = useState<Record<string, number>>(INITIAL_SPOTS);

  const handlePackageClick = (pkg: typeof packagesList[0]) => {
    setSpots((prev) => {
      const current = prev[pkg.id] ?? INITIAL_SPOTS[pkg.id] ?? 10;
      const maxVal = INITIAL_SPOTS[pkg.id] ?? 10;
      // Decrement down to 3, then reset to initial (e.g. 10)
      const nextVal = current <= 3 ? maxVal : current - 1;
      return {
        ...prev,
        [pkg.id]: nextVal,
      };
    });

    let targetUrl = pkg.url;
    if (currency === "EGP" && pkg.urlEGP) {
      targetUrl = pkg.urlEGP;
    } else if (currency === "USD" && pkg.urlUSD) {
      targetUrl = pkg.urlUSD;
    }
    if (targetUrl) {
      window.open(targetUrl, "_blank", "noopener,noreferrer");
    }
  };

  // All 4 Packages (STARTER, SMART, VIP, ELITE)
  const packagesList = [
    {
      ...SITE_CONFIG.packages[0], // 1 Month STARTER
      watermark: "STARTER",
      durationDisplay: isAr ? "1 شهر" : "1 Month",
    },
    {
      ...SITE_CONFIG.packages[1], // 3 Months SMART
      watermark: "SMART",
      durationDisplay: isAr ? "3 شهور" : "3 Months",
    },
    {
      ...SITE_CONFIG.packages[2], // 6 Months VIP
      watermark: "VIP",
      durationDisplay: isAr ? "6 شهور" : "6 Months",
    },
    {
      ...SITE_CONFIG.packages[3], // 1 Year ELITE
      watermark: "ELITE",
      durationDisplay: isAr ? "12 شهر (1 سنة)" : "12 Months (1 Year)",
    },
  ];

  // Comparison features for all 4 packages without emojis
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
    <section
      id="packages"
      className="relative bg-[#070707] py-8 md:py-12 border-t border-zinc-900 overflow-hidden w-full scroll-mt-20 md:scroll-mt-24"
    >
      {/* Background Cyber Grid */}
      <div className="absolute inset-0 bg-cyber-grid opacity-25 pointer-events-none" />

      {/* Atmospheric Neon Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#c8ff00]/4 rounded-full blur-[200px] pointer-events-none" />

      {/* FULL-WIDTH 4 PLANS CARDS ROW (Compact & Balanced) */}
      <div className="relative w-full border-y border-zinc-800/90 bg-[#090909]">
        <div className="pricing-cards-container w-full items-stretch" dir={isAr ? "rtl" : "ltr"}>
          {packagesList.map((pkg) => {
            const pricing = getPackagePrice(pkg.id);

            return (
              <div
                key={pkg.id}
                className="pricing-card-interactive relative flex flex-col justify-between p-4 sm:p-5 lg:p-6 overflow-hidden group min-h-[400px] lg:min-h-[440px] bg-[#0a0a0a]"
              >
                {/* Green vertical glow overlay on hover only */}
                <div className="pricing-card-glow absolute inset-0 bg-gradient-to-b from-[#c8ff00]/20 via-[#c8ff00]/5 to-transparent opacity-0 transition-opacity duration-300 pointer-events-none z-0" />
                <div className="absolute top-0 left-0 right-0 h-1 bg-[#c8ff00] opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[0_0_15px_#c8ff00] z-20" />

                {/* Giant Background Watermark (Left Upper Area) */}
                <div className="absolute top-1 left-3 sm:left-4 pointer-events-none select-none z-0" dir="ltr">
                  <span className="watermark-card-white text-6xl sm:text-7xl xl:text-8xl font-black uppercase transition-all duration-300 block tracking-tight">
                    {pkg.watermark}
                  </span>
                </div>

                {/* Card Content Top */}
                <div className="relative z-10 w-full text-right">
                  {/* Duration Badge - Replaces delivery time entirely */}
                  <div
                    className="w-full min-h-[75px] sm:min-h-[85px] pt-7 sm:pt-8 mb-2 pb-2 border-b border-zinc-800 select-none"
                    style={{ textAlign: "right" }}
                  >
                    <div className="text-[10px] sm:text-[11px] font-mono text-zinc-400 uppercase tracking-wider">
                      {isAr ? "مدة الباقة" : "PLAN DURATION"}
                    </div>
                    <div className="text-2xl sm:text-3xl font-black text-[#c8ff00] font-mono tracking-tight leading-tight mt-1 drop-shadow-[0_0_10px_rgba(200,255,0,0.35)]">
                      {pkg.durationDisplay}
                    </div>
                  </div>

                  {/* Features List with bullets */}
                  <ul className="space-y-1.5 pt-1 text-xs text-zinc-300 min-h-[140px] sm:min-h-[195px]" dir={isAr ? "rtl" : "ltr"}>
                    {(isAr ? pkg.features : (pkg.featuresEn || pkg.features)).map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2 text-right">
                        <span className="text-[#c8ff00] font-bold text-xs select-none shrink-0 mt-0.5">•</span>
                        <span className="text-zinc-200 font-medium text-[11px] sm:text-xs leading-tight">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Bottom: Dynamic Price + Button + Availability */}
                <div className="relative z-10 pt-3 mt-4 border-t border-zinc-850">
                  {/* Dynamic Price block with selected currency */}
                  <div className="flex items-baseline justify-between mb-2.5">
                    <div className="text-right">
                      <span className="text-2xl sm:text-3xl font-black font-mono text-white">
                        {formatAmount(pricing.total)}
                      </span>
                      <span className="text-xs sm:text-sm font-bold text-[#c8ff00] mr-1 font-mono">
                        {symbol}
                      </span>
                    </div>
                    <div className="text-[10px] text-zinc-400 font-mono">
                      ({formatAmount(pricing.monthly)} {symbol} {t("pricing_per_month")})
                    </div>
                  </div>

                  {/* Action Button: Directly opens Bolder Fit Program Link + Decrements Spots */}
                  <button
                    type="button"
                    onClick={() => handlePackageClick(pkg)}
                    className="pricing-card-btn w-full py-3 sm:py-2.5 bg-zinc-900 border border-zinc-700 text-white font-black text-xs sm:text-sm tracking-wide transition-all duration-300 flex items-center justify-center cursor-pointer hover:bg-[#c8ff00] hover:text-black hover:border-[#c8ff00] active:scale-95 text-center shadow-[0_2px_10px_rgba(0,0,0,0.5)]"
                  >
                    <span>{t("pricing_cta")}</span>
                  </button>

                  {/* Status Indicator / Dynamic Countdown Spots */}
                  <div className="mt-2 text-center text-[10px] font-mono text-zinc-400 flex items-center justify-center gap-1.5 select-none">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#c8ff00] inline-block shadow-[0_0_6px_#c8ff00] animate-pulse" />
                    <span className="text-zinc-300 font-medium transition-all duration-300">
                      {isAr
                        ? `متبقي ${spots[pkg.id] ?? INITIAL_SPOTS[pkg.id] ?? 10} أماكن فقط • متاح التسجيل الآن`
                        : `Only ${spots[pkg.id] ?? INITIAL_SPOTS[pkg.id] ?? 10} spots remaining • Open for registration`}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ================= COMPACT COMPARISON & CHOOSE YOUR LEVEL & FAQ (Visible on screen right below cards) ================= */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 md:pt-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start" dir={isAr ? "rtl" : "ltr"}>
          {/* LEFT COLUMN: Watermark "CHOOSE YOUR LEVEL" + Compact FAQ Accordion */}
          <div className="lg:col-span-5 relative flex flex-col justify-between">
            <div className="mb-4 pointer-events-none select-none">
              <span className="watermark-textured-white text-4xl sm:text-5xl xl:text-6xl font-black uppercase tracking-tight block leading-[0.88] opacity-85">
                CHOOSE
                <br />
                YOUR LEVEL
              </span>
            </div>

            {/* FAQ Accordion nestled right under CHOOSE YOUR LEVEL */}
            <div id="faq" className="w-full pt-3 border-t border-zinc-850/80 scroll-mt-24 md:scroll-mt-28">
              <h3 className="text-base sm:text-lg font-black text-white text-right mb-3">
                {t("faq_title")}
              </h3>

              <div className="space-y-2">
                {faqs.map((faq, idx) => {
                  const isOpen = openFaq === idx;
                  return (
                    <div
                      key={idx}
                      className={`border transition-all duration-300 p-2.5 sm:p-3 ${
                        isOpen
                          ? "border-[#c8ff00]/40 bg-zinc-900/60 shadow-[0_4px_15px_rgba(0,0,0,0.4)]"
                          : "border-zinc-850 bg-zinc-950/60 hover:border-zinc-700"
                      }`}
                    >
                      <button
                        onClick={() => setOpenFaq(isOpen ? null : idx)}
                        className="w-full flex items-center justify-between gap-3 text-right cursor-pointer group select-none"
                        aria-expanded={isOpen}
                      >
                        <span
                          className={`text-xs font-semibold transition-colors duration-200 ${
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
                          <ChevronDown className="w-3.5 h-3.5" />
                        </div>
                      </button>

                      <div
                        className={`grid transition-all duration-300 ease-in-out ${
                          isOpen
                            ? "grid-rows-[1fr] opacity-100 mt-2"
                            : "grid-rows-[0fr] opacity-0 mt-0 pointer-events-none"
                        }`}
                      >
                        <div className="overflow-hidden">
                          <p className="text-zinc-400 text-[11px] leading-relaxed text-right font-sans pb-0.5">
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

          {/* RIGHT COLUMN: Compact Quick Comparison Table for all 4 packages (Without emojis) */}
          <div className="lg:col-span-7">
            <div className="overflow-x-auto border border-zinc-800/90 bg-[#0a0a0a] shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
              <table className="w-full text-right border-collapse text-xs">
                <thead>
                  <tr className="border-b border-zinc-800 text-zinc-300 font-mono bg-zinc-950/80">
                    <th className="py-2.5 px-3 sm:px-4 font-bold text-white text-right text-xs">
                      {t("table_title")}
                    </th>
                    <th className="py-2.5 px-2 text-center font-bold text-zinc-400 text-xs">
                      STARTER
                    </th>
                    <th className="py-2.5 px-2 text-center font-bold text-zinc-400 text-xs">
                      SMART
                    </th>
                    <th className="py-2.5 px-2 text-center font-bold text-zinc-300 text-xs">
                      VIP
                    </th>
                    <th className="py-2.5 px-2 text-center font-bold text-zinc-300 text-xs">
                      ELITE
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-900 text-xs text-zinc-300 font-sans">
                  {comparisonRows.map((row, idx) => (
                    <tr key={idx} className="hover:bg-zinc-900/40 transition-colors">
                      <td className="py-1.5 sm:py-2 px-3 sm:px-4 text-zinc-300 font-medium text-[11px] sm:text-xs leading-tight">
                        {row.title}
                      </td>
                      <td className="py-1.5 sm:py-2 px-2 text-center font-mono">
                        {row.starter ? (
                          <span className="text-[#c8ff00] font-bold text-xs sm:text-sm">✓</span>
                        ) : (
                          <span className="text-zinc-700">—</span>
                        )}
                      </td>
                      <td className="py-1.5 sm:py-2 px-2 text-center font-mono">
                        {row.smart ? (
                          <span className="text-[#c8ff00] font-bold text-xs sm:text-sm">✓</span>
                        ) : (
                          <span className="text-zinc-700">—</span>
                        )}
                      </td>
                      <td className="py-1.5 sm:py-2 px-2 text-center font-mono">
                        {row.vip ? (
                          <span className="text-[#c8ff00] font-bold text-xs sm:text-sm">✓</span>
                        ) : (
                          <span className="text-zinc-700">—</span>
                        )}
                      </td>
                      <td className="py-1.5 sm:py-2 px-2 text-center font-mono">
                        {row.elite ? (
                          <span className="text-[#c8ff00] font-bold text-xs sm:text-sm">✓</span>
                        ) : (
                          <span className="text-zinc-700">—</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-2.5 flex items-center justify-end text-[10px] font-mono text-zinc-500 px-1">
              <span className="text-[#c8ff00] font-semibold">0% COPY-PASTE GUARANTEE</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
