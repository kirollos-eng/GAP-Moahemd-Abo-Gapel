"use client";

import React from "react";
import Image from "next/image";

interface CoachImagePlaceholderProps {
  src?: string;
  alt?: string;
  className?: string;
  poseLabel?: string;
  variant?: "hero" | "services" | "about";
}

export default function CoachImagePlaceholder({
  src,
  alt = "كابتن محمد أحمد",
  className = "",
  poseLabel = "صورة الكابتن",
  variant = "hero"
}: CoachImagePlaceholderProps) {
  // If the user configured an image URL, display it seamlessly
  if (src && src.trim() !== "") {
    return (
      <div className={`relative w-full h-full flex items-end justify-center overflow-hidden ${className}`}>
        {/* Glow backlight */}
        <div className="absolute inset-0 bg-radial from-[#c8ff00]/15 via-transparent to-transparent pointer-events-none" />
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-contain object-bottom filter drop-shadow-[0_15px_35px_rgba(0,0,0,0.8)]"
          priority={variant === "hero"}
        />
      </div>
    );
  }

  // Fallback: A high-end cyberpunk athletic physique silhouette with rim lighting & HUD tags
  return (
    <div
      className={`relative w-full h-full min-h-[460px] md:min-h-[580px] flex flex-col items-center justify-end select-none group ${className}`}
    >
      {/* Radial green athletic backlight */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[320px] md:w-[480px] h-[320px] md:h-[480px] bg-[#c8ff00]/10 rounded-full blur-[90px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[220px] md:w-[350px] h-[220px] md:h-[350px] bg-white/5 rounded-full blur-[60px] pointer-events-none" />

      {/* Cybernetic HUD Frame around coach container */}
      <div className="absolute inset-x-6 top-8 bottom-4 border border-white/5 rounded-2xl pointer-events-none">
        <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-[#c8ff00]" />
        <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-[#c8ff00]" />
        <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-[#c8ff00]" />
        <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-[#c8ff00]" />
        <span className="absolute -top-3 right-6 px-2 py-0.5 text-[10px] font-mono tracking-wider bg-[#070707] text-[#c8ff00] border border-[#c8ff00]/30 rounded">
          COACH // FRAME_{variant.toUpperCase()}
        </span>
      </div>

      {/* Stylized Bodybuilder Silhouette SVG with rim glow */}
      <div className="relative z-10 w-full max-w-[420px] h-[480px] md:h-[580px] flex items-end justify-center px-4">
        <svg
          viewBox="0 0 400 600"
          className="w-full h-full max-h-[560px] filter drop-shadow-[0_10px_25px_rgba(0,0,0,0.9)] opacity-90 transition-all duration-500 group-hover:scale-[1.02]"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Defined Gradients */}
          <defs>
            <linearGradient id="bodyGrad" x1="200" y1="50" x2="200" y2="580" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#222222" />
              <stop offset="40%" stopColor="#161616" />
              <stop offset="100%" stopColor="#0c0c0c" />
            </linearGradient>
            <linearGradient id="neonRim" x1="50" y1="100" x2="350" y2="500" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#c8ff00" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#c8ff00" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0.4" />
            </linearGradient>
          </defs>

          {/* Athletic Torso & Shoulders Silhouette Shape */}
          <path
            d="M200 45 C215 45 228 58 228 78 C228 92 220 102 212 108 C225 115 250 125 285 145 C320 165 345 210 340 265 C335 320 305 350 280 340 C270 336 265 315 260 270 C255 270 248 310 242 360 C238 395 235 440 245 490 C250 515 255 550 258 590 L142 590 C145 550 150 515 155 490 C165 440 162 395 158 360 C152 310 145 270 140 270 C135 315 130 336 120 340 C95 350 65 320 60 265 C55 210 80 165 115 145 C150 125 175 115 188 108 C180 102 172 92 172 78 C172 58 185 45 200 45 Z"
            fill="url(#bodyGrad)"
            stroke="url(#neonRim)"
            strokeWidth="2"
          />

          {/* Muscle Anatomy Highlights (Chest / Abs / Shoulders line art) */}
          <path d="M175 180 Q200 195 225 180" stroke="#c8ff00" strokeWidth="1.5" strokeOpacity="0.4" />
          <path d="M165 215 Q200 230 235 215" stroke="#c8ff00" strokeWidth="1.5" strokeOpacity="0.3" />
          {/* Abs definitions */}
          <path d="M185 245 Q200 250 215 245" stroke="white" strokeWidth="1.2" strokeOpacity="0.25" />
          <path d="M187 275 Q200 280 213 275" stroke="white" strokeWidth="1.2" strokeOpacity="0.25" />
          <path d="M188 305 Q200 310 212 305" stroke="white" strokeWidth="1.2" strokeOpacity="0.25" />
          {/* Central Line */}
          <line x1="200" y1="180" x2="200" y2="330" stroke="#c8ff00" strokeWidth="1.5" strokeOpacity="0.3" strokeDasharray="3 3" />

          {/* Competition Board Shorts / Belt line */}
          <path d="M155 355 Q200 365 245 355 L248 440 Q200 455 152 440 Z" fill="#181818" stroke="#ffffff" strokeWidth="1" strokeOpacity="0.3" />
        </svg>

        {/* Informative placeholder indicator pill */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-[#0c0c0c]/90 border border-[#c8ff00]/40 backdrop-blur-md px-4 py-2 rounded-full flex items-center gap-2 shadow-lg shadow-black/80">
          <span className="w-2 h-2 rounded-full bg-[#c8ff00] animate-ping" />
          <span className="text-xs font-mono text-zinc-300">
            {poseLabel} <span className="text-[#c8ff00]">(ضع الرابط في lib/config.ts)</span>
          </span>
        </div>
      </div>
    </div>
  );
}
