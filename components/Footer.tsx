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
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-10 border-b border-zinc-900">
          {/* Logo Brand */}
          <div>
            <div className="flex items-center gap-3">
              <span className="text-2xl md:text-3xl font-black text-white font-mono">{SITE_CONFIG.monogram}</span>
              <span className="text-zinc-600">/</span>
              <span className="text-base md:text-lg font-bold tracking-widest text-zinc-300 font-mono uppercase">
                {SITE_CONFIG.coachName}
              </span>
            </div>
            <p className="text-zinc-400 text-[11px] mt-2 font-mono tracking-wider">
              ENGINEERED ONLINE BODYBUILDING & NUTRITION COACHING
            </p>
          </div>

          {/* Currency Guarantee Notice in AED */}
          <div className="bg-[#0b0b0b] border border-zinc-800 px-4 py-2.5 flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-[#c8ff00]" />
            <span className="text-xs text-zinc-300 font-mono">
              {t("footer_currency_notice")}
            </span>
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="p-3 bg-zinc-900 border border-zinc-800 hover:border-[#c8ff00] text-zinc-300 hover:text-[#c8ff00] transition-colors cursor-pointer"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

        {/* Bottom copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-500">
          <div>
            © {new Date().getFullYear()} {SITE_CONFIG.coachName}. {t("footer_rights")}
          </div>
          <div className="flex items-center gap-6">
            <a href="#about" className="hover:text-white transition-colors">{t("nav_about")}</a>
            <a href="#process" className="hover:text-white transition-colors">{t("nav_process")}</a>
            <a href="#packages" className="hover:text-white transition-colors">{t("nav_packages")}</a>
            <a href="#faq" className="hover:text-white transition-colors">{t("nav_faq")}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
