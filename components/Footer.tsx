"use client";

import React from "react";
import { ArrowUp } from "lucide-react";
import { SITE_CONFIG } from "@/lib/config";
import { useLanguage } from "@/lib/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#050505] border-t border-zinc-900 py-12 md:py-16 text-right relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center text-center pb-10 border-b border-zinc-900">
          {/* Logo Brand Centered */}
          <div className="flex flex-col items-center justify-center text-center">
            <div className="flex items-center justify-center" dir="ltr">
              <img
                src="/logo-gap.svg"
                alt="GAP COACHING"
                className="h-8 sm:h-9 md:h-10 w-auto object-contain"
              />
            </div>
            <p className="text-zinc-400 text-[11px] sm:text-xs mt-3 font-mono tracking-wider uppercase text-center">
              CERTIFIED FITNESS & NUTRITION COACH
            </p>
          </div>

          {/* Social Links & Back to top Centered */}
          <div className="flex items-center justify-center gap-2.5 sm:gap-3.5 flex-wrap mt-6" dir="ltr">

            {/* Instagram Link */}
            <a
              href={SITE_CONFIG.socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-3.5 sm:px-4 py-2 bg-zinc-900/90 border border-zinc-800 hover:border-[#E1306C] text-zinc-300 hover:text-[#E1306C] transition-all cursor-pointer shadow-[0_0_15px_rgba(0,0,0,0.5)] active:scale-95"
              aria-label="Instagram"
              title="GAP Coaching Instagram"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
              </svg>
              <span className="text-[11px] sm:text-xs font-mono font-bold tracking-wider">Instagram</span>
            </a>

            {/* Facebook Link */}
            <a
              href={SITE_CONFIG.socialLinks.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-3.5 sm:px-4 py-2 bg-zinc-900/90 border border-zinc-800 hover:border-[#1877F2] text-zinc-300 hover:text-[#1877F2] transition-all cursor-pointer shadow-[0_0_15px_rgba(0,0,0,0.5)] active:scale-95"
              aria-label="Facebook"
              title="Facebook"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              <span className="text-[11px] sm:text-xs font-mono font-bold tracking-wider">Facebook</span>
            </a>

            {/* Back to top */}
            <button
              onClick={scrollToTop}
              className="p-2.5 bg-zinc-900 border border-zinc-800 hover:border-[#c8ff00] text-zinc-300 hover:text-[#c8ff00] transition-colors cursor-pointer"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-500">
          <div>
            © {new Date().getFullYear()} GAP Coaching . {t("footer_rights")}
          </div>
          <div className="flex items-center gap-6">
            <a href="#about" className="hover:text-white transition-colors">{t("nav_about")}</a>
            <a href="#process" className="hover:text-white transition-colors">{t("nav_process")}</a>
            <a href="#packages" className="hover:text-white transition-colors">{t("nav_packages")}</a>
            <a href="#faq" className="hover:text-white transition-colors">{t("nav_faq")}</a>
          </div>
        </div>

        {/* Made by VeraPiú Centered Credit */}
        <div className="pt-6 mt-4 border-t border-zinc-900/60 flex items-center justify-center text-center">
          <a
            href="https://verapiu.com"
            target="_blank"
            rel="noopener noreferrer"
            dir="ltr"
            className="group inline-flex items-center gap-1.5 text-xs font-mono text-zinc-500 hover:text-zinc-300 transition-colors"
          >
            <span>Made by</span>
            <span className="font-bold text-zinc-400 group-hover:text-[#c8ff00] transition-colors underline decoration-zinc-700 underline-offset-4 group-hover:decoration-[#c8ff00]">
              VeraPiú
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}
