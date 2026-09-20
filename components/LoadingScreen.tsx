"use client";

import React, { useState, useEffect } from "react";
import { useCurrency, CurrencyType } from "@/lib/CurrencyContext";
import { useLanguage } from "@/lib/LanguageContext";

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [isErasing, setIsErasing] = useState(false);
  const [isMounted, setIsMounted] = useState(true);
  const [showChangePicker, setShowChangePicker] = useState(false);

  const {
    detectedCountryCode,
    isLocationConfirmed,
    confirmLocation,
  } = useCurrency();
  const { isAr } = useLanguage();

  // Progress counter
  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev < 35 ? prev + 6 : prev < 75 ? prev + 7 : prev < 95 ? prev + 8 : prev + 6;
      });
    }, 45);

    return () => {
      clearInterval(progressInterval);
    };
  }, []);

  // If location was already confirmed in session, proceed with eraser wipe automatically
  useEffect(() => {
    if (progress === 100 && isLocationConfirmed) {
      const eraseTimer = setTimeout(() => {
        setIsErasing(true);
        if (typeof window !== "undefined") {
          window.dispatchEvent(new CustomEvent("gap-reveal-hero"));
        }
      }, 80);

      const unmountTimer = setTimeout(() => {
        setIsMounted(false);
      }, 540);

      return () => {
        clearTimeout(eraseTimer);
        clearTimeout(unmountTimer);
      };
    }
  }, [progress, isLocationConfirmed]);

  if (!isMounted) return null;

  const isEgypt = detectedCountryCode === "EG";
  const isUAE = detectedCountryCode === "AE";
  const detectedCurrency: CurrencyType = isEgypt ? "EGP" : isUAE ? "AED" : "USD";

  const handleProceed = (chosenCurrency: CurrencyType) => {
    confirmLocation(chosenCurrency);
    setIsErasing(true);
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("gap-reveal-hero"));
    }
    setTimeout(() => {
      setIsMounted(false);
    }, 480);
  };

  return (
    <div
      className="fixed inset-0 z-[9999] overflow-hidden pointer-events-none"
    >
      {/* 🚀 GPU Hardware-Accelerated Sliding Curtain (Left to Right Sweep) - 100% Smooth on Safari & Chrome */}
      <div
        className={`absolute inset-0 bg-[#c8ff00] flex flex-col items-center justify-center transform-gpu ${
          isErasing ? "pointer-events-none" : "pointer-events-auto"
        }`}
        style={{
          transform: isErasing ? "translate3d(calc(100% + 140px), 0, 0)" : "translate3d(0, 0, 0)",
          transition: isErasing
            ? "transform 450ms cubic-bezier(0.65, 0, 0.25, 1)"
            : "none",
          willChange: isErasing ? "transform" : "auto",
          boxShadow: isErasing ? "-30px 0 60px rgba(0, 0, 0, 0.7)" : "none",
        }}
      >
        {/* Subtle Athletic Texture Lines */}
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(#000000 1.5px, transparent 1.5px), radial-gradient(#000000 1.5px, #c8ff00 1.5px)",
            backgroundSize: "30px 30px",
            backgroundPosition: "0 0, 15px 15px",
          }}
        />

        {/* Center Content: Solid Black GAP Logo + Black Athletic Typography / Interactive Ask */}
        <div
          className={`relative z-10 flex flex-col items-center justify-center px-4 w-full max-w-md select-none transition-opacity duration-200 ${
            isErasing ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
        >
          {/* Solid Black Logo */}
          <div className="relative mb-3 transition-transform duration-300 transform scale-100">
            <img
              src="/logo-gap.svg"
              alt="GAP COACHING"
              className="w-32 sm:w-40 md:w-44 h-11 sm:h-13 md:h-14 object-contain brightness-0 drop-shadow-[0_4px_12px_rgba(0,0,0,0.25)]"
            />
          </div>

          {/* Coach Name & Status in Solid Black */}
          <div className="text-center font-mono space-y-1 text-black mb-3">
            <div className="text-xs sm:text-sm font-black tracking-[0.35em] uppercase">
              GAP COACHING
            </div>
          </div>

          {/* STATE A: Loading Progress Bar (Before 100%) */}
          {(progress < 100 || isLocationConfirmed) && (
            <div className="w-48 sm:w-56 mt-2">
              <div className="h-1.5 w-full bg-black/15 border border-black/30 overflow-hidden relative">
                <div
                  className="h-full bg-black transition-all duration-150"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <div className="flex justify-between items-center font-mono text-[10px] text-black font-black mt-1.5">
                <span>SYSTEM INITIALIZING</span>
                <span>{progress}%</span>
              </div>
            </div>
          )}

          {/* STATE B: Interactive Location Confirmation HUD (At 100% and not yet confirmed) */}
          {progress === 100 && !isLocationConfirmed && !isErasing && (
            <div
              className="w-full max-w-sm bg-black text-white p-4 sm:p-5 border-2 border-black shadow-[0_20px_50px_rgba(0,0,0,0.5)] animate-in fade-in zoom-in-95 duration-200"
              dir={isAr ? "rtl" : "ltr"}
            >
              {!showChangePicker ? (
                /* Primary Ask: Confirm Detected Location */
                <div className="flex flex-col items-center text-center">
                  {/* Status Indicator */}
                  <div className="flex items-center justify-center gap-1.5 text-[11px] font-mono text-[#c8ff00] mb-2 uppercase tracking-wider font-bold" dir="ltr">
                    <span className="w-2 h-2 rounded-full bg-[#c8ff00] animate-ping" />
                    <span>LOCATION DETECTED</span>
                  </div>

                  {/* Question */}
                  <h3 className="text-base sm:text-lg font-black text-white leading-snug mb-1">
                    {isEgypt
                      ? "هل أنت متواجد في مصر؟ 🇪🇬"
                      : isUAE
                      ? "هل أنت متواجد في الإمارات؟ 🇦🇪"
                      : "هل أنت متواجد خارج مصر والإمارات؟ 🌍"}
                  </h3>

                  <p className="text-[11px] text-zinc-400 mb-4 leading-relaxed">
                    {isEgypt
                      ? "لعرض خطط الأسعار وروابط الاشتراك بالجنيه المصري (EGP)"
                      : isUAE
                      ? "لعرض خطط الأسعار وروابط الاشتراك بالدرهم الإماراتي (AED)"
                      : "لعرض خطط الأسعار وروابط الاشتراك بالدولار الأمريكي (USD)"}
                  </p>

                  {/* Buttons */}
                  <div className="w-full space-y-2">
                    <button
                      type="button"
                      onClick={() => handleProceed(detectedCurrency)}
                      className="w-full py-2.5 px-4 bg-[#c8ff00] hover:bg-white text-black font-black font-mono text-xs sm:text-sm tracking-wide transition-all duration-200 cursor-pointer shadow-[0_0_15px_rgba(200,255,0,0.3)] active:scale-95 flex items-center justify-center gap-2"
                    >
                      <span>
                        {isEgypt
                          ? "نعم، استمر (EGP ج.م)"
                          : isUAE
                          ? "نعم، استمر (AED د.إ)"
                          : "نعم، استمر (USD $)"}
                      </span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setShowChangePicker(true)}
                      className="w-full py-2 px-3 bg-zinc-900 border border-zinc-750 hover:border-zinc-400 text-zinc-300 hover:text-white font-medium text-xs transition-colors cursor-pointer"
                    >
                      {isAr ? "لا، اختر دولة أخرى" : "No, change country"}
                    </button>
                  </div>
                </div>
              ) : (
                /* Country Selection Picker */
                <div className="flex flex-col items-center text-center">
                  <div className="text-xs font-mono text-[#c8ff00] mb-2 font-bold">
                    {isAr ? "اختر دولتك الحالية:" : "Select your location:"}
                  </div>

                  <p className="text-[10px] text-zinc-400 mb-3">
                    {isAr
                      ? "سيتم تخصيص العملة وروابط الدفع تلقائياً بما يناسب اختيارك"
                      : "Currency and payment links will match your selection"}
                  </p>

                  <div className="w-full space-y-2">
                    {/* Option 1: Egypt */}
                    <button
                      type="button"
                      onClick={() => handleProceed("EGP")}
                      className="w-full p-2.5 bg-zinc-900 hover:bg-zinc-800 border border-zinc-750 hover:border-[#c8ff00] text-right flex items-center justify-between text-xs transition-all cursor-pointer group"
                    >
                      <span className="flex items-center gap-2 text-white font-bold">
                        <span className="text-base">🇪🇬</span>
                        <span>مصر</span>
                      </span>
                      <span className="font-mono text-[#c8ff00] font-bold text-[11px]">EGP (ج.م)</span>
                    </button>

                    {/* Option 2: UAE */}
                    <button
                      type="button"
                      onClick={() => handleProceed("AED")}
                      className="w-full p-2.5 bg-zinc-900 hover:bg-zinc-800 border border-zinc-750 hover:border-[#c8ff00] text-right flex items-center justify-between text-xs transition-all cursor-pointer group"
                    >
                      <span className="flex items-center gap-2 text-white font-bold">
                        <span className="text-base">🇦🇪</span>
                        <span>الإمارات</span>
                      </span>
                      <span className="font-mono text-[#c8ff00] font-bold text-[11px]">AED (د.إ)</span>
                    </button>

                    {/* Option 3: Other / International */}
                    <button
                      type="button"
                      onClick={() => handleProceed("USD")}
                      className="w-full p-2.5 bg-zinc-900 hover:bg-zinc-800 border border-zinc-750 hover:border-[#c8ff00] text-right flex items-center justify-between text-xs transition-all cursor-pointer group"
                    >
                      <span className="flex items-center gap-2 text-white font-bold">
                        <span className="text-base">🌍</span>
                        <span>باقي دول العالم / دولي</span>
                      </span>
                      <span className="font-mono text-[#c8ff00] font-bold text-[11px]">USD ($)</span>
                    </button>
                  </div>

                  <button
                    type="button"
                    onClick={() => setShowChangePicker(false)}
                    className="mt-3 text-[11px] text-zinc-400 hover:text-white underline cursor-pointer"
                  >
                    {isAr ? "رجوع" : "Back"}
                  </button>
                </div>
              )}
            </div>
          )}
        </div>


      </div>
    </div>
  );
}
