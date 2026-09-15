"use client";

import React, { useState, useEffect } from "react";

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [isErasing, setIsErasing] = useState(false);
  const [isMounted, setIsMounted] = useState(true);

  useEffect(() => {
    // Smooth athletic progress counter that stays 1 second longer
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        // Smooth gradual progression reaching 100% in ~1.2 seconds
        return prev < 35 ? prev + 4 : prev < 75 ? prev + 5 : prev < 95 ? prev + 6 : prev + 5;
      });
    }, 55);

    return () => {
      clearInterval(progressInterval);
    };
  }, []);

  useEffect(() => {
    if (progress === 100) {
      // Hold at 100% for 450ms so the user clearly sees completion before eraser wipes
      const eraseTimer = setTimeout(() => {
        setIsErasing(true);
        if (typeof window !== "undefined") {
          window.dispatchEvent(new CustomEvent("gap-reveal-hero"));
        }
      }, 450);

      // Remove component after eraser sweeps off the screen
      const unmountTimer = setTimeout(() => {
        setIsMounted(false);
      }, 1250);

      return () => {
        clearTimeout(eraseTimer);
        clearTimeout(unmountTimer);
      };
    }
  }, [progress]);

  if (!isMounted) return null;

  // Fully covers screen immediately on load, then wipes Left-to-Right with eraser
  const clipPathStyle = isErasing
    ? "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)"
    : "polygon(0 0, 100% 0, 100% 100%, 0 100%)";

  return (
    <div
      className="fixed inset-0 z-[9999] pointer-events-none transition-[clip-path] ease-[cubic-bezier(0.65,0,0.35,1)]"
      style={{
        clipPath: clipPathStyle,
        transitionDuration: isErasing ? "700ms" : "550ms",
      }}
    >
      {/* Solid Neon Green Board Background (#c8ff00) */}
      <div className="absolute inset-0 bg-[#c8ff00] flex flex-col items-center justify-center overflow-hidden">
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

        {/* Center Content: Solid Black GAP Logo + Black Athletic Typography */}
        <div className="relative z-10 flex flex-col items-center justify-center px-4 select-none">
          {/* Solid Black Logo masked cleanly on Neon Green */}
          <div className="relative mb-5 transition-transform duration-300 transform scale-100">
            <div
              className="w-32 sm:w-40 md:w-44 h-12 sm:h-14 md:h-16 bg-black transition-all"
              style={{
                maskImage:
                  "url('https://res.cloudinary.com/dv3f33hvk/image/upload/v1789429102/WhatsApp_Image_2026-09-15_at_02.19_1_xeoslu.png')",
                WebkitMaskImage:
                  "url('https://res.cloudinary.com/dv3f33hvk/image/upload/v1789429102/WhatsApp_Image_2026-09-15_at_02.19_1_xeoslu.png')",
                maskSize: "contain",
                WebkitMaskSize: "contain",
                maskPosition: "center",
                WebkitMaskPosition: "center",
                maskRepeat: "no-repeat",
                WebkitMaskRepeat: "no-repeat",
                filter: "drop-shadow(0 4px 12px rgba(0, 0, 0, 0.25))",
              }}
            />
          </div>

          {/* Coach Name & Status in Solid Black */}
          <div className="text-center font-mono space-y-1.5 text-black">
            <div className="text-xs sm:text-sm font-black tracking-[0.35em] uppercase">
              MOHAMED ABO GAPEL
            </div>
            <div className="flex items-center justify-center gap-2 text-[10px] font-bold uppercase tracking-widest opacity-80">
              <span className="w-1.5 h-1.5 rounded-full bg-black animate-ping" />
              <span>
                {progress < 100
                  ? "SYSTEM INITIALIZING // 0% COPY-PASTE"
                  : "SYSTEM READY // WELCOME"}
              </span>
            </div>
          </div>

          {/* Progress Bar in Solid Black */}
          <div className="w-40 sm:w-56 mt-5">
            <div className="h-1.5 w-full bg-black/15 border border-black/30 overflow-hidden relative">
              <div
                className="h-full bg-black transition-all duration-150"
                style={{ width: `${progress}%` }}
              />
            </div>
            <div className="flex justify-between items-center font-mono text-[10px] text-black font-black mt-1.5">
              <span>LOADING</span>
              <span>{progress}%</span>
            </div>
          </div>
        </div>

        {/* 🧽 Board Eraser (Left to Right Exit Animation) */}
        {isErasing && (
          <div className="absolute top-0 bottom-0 left-0 w-16 -ml-8 flex flex-col justify-center items-center pointer-events-none z-50 animate-board-eraser">
            {/* Authentic Board Eraser Visual */}
            <div className="w-10 h-32 sm:h-40 bg-[#1c1917] border-2 border-[#44403c] rounded-md shadow-[-20px_0_40px_rgba(0,0,0,0.8),15px_0_30px_rgba(0,0,0,0.6)] flex flex-col justify-between p-2 relative">
              {/* Eraser Wooden/Plastic Grip Texture */}
              <div className="w-full h-2 bg-[#292524] rounded-sm" />
              <div className="font-mono text-[8px] text-neutral-400 font-black tracking-widest text-center rotate-90 uppercase">
                GAP ERASER
              </div>
              <div className="w-full h-2 bg-[#292524] rounded-sm" />
              {/* Felt Bottom Line */}
              <div className="absolute top-0 bottom-0 right-0 w-1.5 bg-[#a8a29e] rounded-r-sm" />
            </div>

            {/* Eraser wiping edge line */}
            <div className="absolute top-0 bottom-0 right-0 w-1 bg-black/60 shadow-[0_0_25px_rgba(0,0,0,0.9)]" />
          </div>
        )}
      </div>
    </div>
  );
}
