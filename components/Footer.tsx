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


          {/* Social Links & WhatsApp & Back to top */}
          <div className="flex items-center gap-2.5 sm:gap-3.5 flex-wrap" dir="ltr">
            {/* WhatsApp Link */}
            <a
              href={SITE_CONFIG.socialLinks.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-3 sm:px-3.5 py-2 bg-zinc-900/90 border border-zinc-800 hover:border-[#25D366] text-zinc-300 hover:text-[#25D366] transition-all cursor-pointer shadow-[0_0_15px_rgba(0,0,0,0.5)] active:scale-95"
              aria-label="WhatsApp"
              title="تواصل مباشر عبر واتساب"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12.031 0C5.396 0 .02 5.376.02 12.012c0 2.122.553 4.195 1.609 6.018L0 24l6.168-1.616a11.968 11.968 0 005.863 1.524h.005c6.632 0 12.01-5.376 12.01-12.012 0-3.21-1.25-6.225-3.518-8.495A11.93 11.93 0 0012.031 0zm0 22.014h-.004a9.98 9.98 0 01-5.086-1.39l-.365-.216-3.774.99.1008-3.678-.238-.378a9.96 9.96 0 01-1.53-5.33c0-5.525 4.496-10.02 10.027-10.02 2.677 0 5.195 1.043 7.087 2.937a9.97 9.97 0 012.933 7.086c0 5.526-4.496 10.021-10.029 10.021zm5.494-7.502c-.301-.151-1.783-.88-2.06-.98-.277-.101-.479-.151-.68.151-.202.302-.782.98-.958 1.182-.177.201-.353.226-.654.075-.302-.151-1.275-.47-2.428-1.498-.898-.8-1.504-1.79-1.68-2.092-.177-.302-.019-.465.132-.616.136-.135.302-.352.453-.528.151-.176.201-.301.302-.503.101-.201.05-.377-.025-.528-.076-.151-.68-1.637-.932-2.241-.245-.589-.494-.509-.68-.519-.176-.01-.377-.01-.578-.01-.201 0-.528.076-.804.377-.277.302-1.056 1.032-1.056 2.518 0 1.485 1.082 2.92 1.233 3.121.151.202 2.128 3.25 5.156 4.557.72.311 1.282.497 1.721.637.724.23 1.382.197 1.902.12.58-.087 1.783-.729 2.035-1.433.251-.703.251-1.306.176-1.432-.075-.126-.276-.202-.577-.353z"/>
              </svg>
              <span className="text-[11px] sm:text-xs font-mono font-bold tracking-wider">WhatsApp</span>
            </a>

            {/* Instagram Link */}
            <a
              href={SITE_CONFIG.socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-3 sm:px-3.5 py-2 bg-zinc-900/90 border border-zinc-800 hover:border-[#E1306C] text-zinc-300 hover:text-[#E1306C] transition-all cursor-pointer shadow-[0_0_15px_rgba(0,0,0,0.5)] active:scale-95"
              aria-label="Instagram"
              title="Instagram: @mahmoudabogabl"
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
              className="group flex items-center gap-2 px-3 sm:px-3.5 py-2 bg-zinc-900/90 border border-zinc-800 hover:border-[#1877F2] text-zinc-300 hover:text-[#1877F2] transition-all cursor-pointer shadow-[0_0_15px_rgba(0,0,0,0.5)] active:scale-95"
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
