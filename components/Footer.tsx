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

            {/* WhatsApp Link */}
            <a
              href="https://wa.me/971553722591?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D8%8C%20%D8%A3%D8%B1%D9%8A%D8%AF%20%D8%A7%D9%84%D8%A7%D8%B3%D8%AA%D9%81%D8%B3%D8%A7%D8%B1%20%D8%B9%D9%86%20%D8%A8%D8%A7%D9%82%D8%A7%D8%AA%20%D8%A7%D9%84%D8%AA%D8%AF%D8%B1%D9%8A%D8%A8%20%D9%85%D8%B9%20GAP%20Coaching%20%F0%9F%92%AA"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-3.5 sm:px-4 py-2 bg-zinc-900/90 border border-zinc-800 hover:border-[#25D366] text-zinc-300 hover:text-[#25D366] transition-all cursor-pointer shadow-[0_0_15px_rgba(0,0,0,0.5)] active:scale-95"
              aria-label="WhatsApp"
              title="WhatsApp"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              <span className="text-[11px] sm:text-xs font-mono font-bold tracking-wider">WhatsApp</span>
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
