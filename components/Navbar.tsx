"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Menu,
  X,
  ArrowUpRight,
  Globe,
  ChevronDown,
  Sparkles,
  CheckCircle2,
  DollarSign,
  Flame,
  Dumbbell,
  ShieldCheck,
  HelpCircle,
  Award,
} from "lucide-react";
import { SITE_CONFIG } from "@/lib/config";
import { useLanguage } from "@/lib/LanguageContext";
import { useCurrency, CURRENCY_CONFIGS, CurrencyType } from "@/lib/CurrencyContext";

interface NavbarProps {
  onOpenSubscribe?: (packageId?: string) => void;
}

export default function Navbar({ onOpenSubscribe }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [currencyDropdownOpen, setCurrencyDropdownOpen] = useState(false);
  const { lang, toggleLang, t, isAr } = useLanguage();
  const { currency, setCurrency, currencyConfig } = useCurrency();

  const LOGO_URL =
    "https://res.cloudinary.com/dv3f33hvk/image/upload/v1789429102/WhatsApp_Image_2026-09-15_at_02.19_1_xeoslu.png";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
        setCurrencyDropdownOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Prevent background scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [menuOpen]);

  const navItems = [
    {
      id: "packages",
      number: "01",
      title: t("nav_packages"),
      subtitle: isAr ? "باقات التدريب المخصصة 1:1" : "1:1 Custom Coaching Packages",
      href: "#packages",
      icon: Flame,
      highlight: true,
    },
    {
      id: "process",
      number: "02",
      title: t("nav_process"),
      subtitle: isAr ? "منظومة العمل والخطوات الأربعة" : "4-Step Transformation System",
      href: "#process",
      icon: Dumbbell,
    },
    {
      id: "about",
      number: "03",
      title: t("nav_about"),
      subtitle: isAr ? "وعد 0% نسخ ولصق وخبرة 6+ سنوات" : "0% Copy-Paste & 6+ Years Experience",
      href: "#about",
      icon: ShieldCheck,
    },
    {
      id: "certificates",
      number: "04",
      title: t("nav_certificates"),
      subtitle: isAr ? "اعتمادات NASM الدولية وجمعية القلب الأمريكية BLS" : "NASM & American Heart Association Accreditations",
      href: "#certificates",
      icon: Award,
    },
    {
      id: "faq",
      number: "05",
      title: t("nav_faq"),
      subtitle: isAr ? "إجابات على كافة استفساراتك" : "Frequently Asked Questions",
      href: "#faq",
      icon: HelpCircle,
    },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#070707]/95 backdrop-blur-md border-b border-zinc-800/90 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.8)]"
            : "bg-transparent border-b border-transparent py-4 md:py-5"
        }`}
      >
        <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 relative">
          <div className="flex items-center justify-between min-h-[44px]" dir="ltr">
            {/* SIDE 1: Coach Name Stacked: MOHAMED / ABO GAPEL - Enlarged with Matching Width */}
            <div className="flex items-center h-full py-0.5">
              <Link href="/" className="flex flex-col text-left group justify-center leading-[0.82] select-none">
                <span className="text-xl sm:text-2xl md:text-[28px] font-black font-bebas tracking-[0.11em] text-white uppercase group-hover:text-[#c8ff00] transition-colors leading-[0.82]">
                  MOHAMED
                </span>
                <span className="text-[14px] sm:text-[17px] md:text-[19.5px] font-black font-bebas tracking-[0.21em] text-zinc-300 uppercase group-hover:text-white transition-colors leading-[0.82]">
                  ABO GAPEL
                </span>
              </Link>
            </div>

            {/* CENTER: Exact Logo (Centered in navbar) */}
            <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 pointer-events-auto">
              <Link href="/" className="flex items-center justify-center group py-1">
                <img
                  src={LOGO_URL}
                  alt="GAP Logo"
                  className="h-6 sm:h-7 md:h-8 w-auto object-contain transition-transform duration-300 group-hover:scale-105 filter drop-shadow-[0_0_10px_rgba(255,255,255,0.15)] group-hover:drop-shadow-[0_0_16px_rgba(200,255,0,0.4)]"
                />
              </Link>
            </div>

            {/* SIDE 2: CTA (ابدأ الآن) + Language Switcher + MENU on the outer edge */}
            <div className="flex items-center gap-2 sm:gap-2.5">
              {/* Language Switcher (No container) */}
              <button
                onClick={toggleLang}
                className="text-xs sm:text-sm font-mono font-bold text-zinc-400 hover:text-[#c8ff00] transition-colors cursor-pointer px-2 py-1 uppercase tracking-wider"
                title="Switch Language / تغيير اللغة"
              >
                {lang === "ar" ? "EN" : "عربي"}
              </button>

              {/* Main CTA: Scrolls directly to Plans/Packages section (#packages) - Placed directly next to Menu */}
              <button
                onClick={(e) => {
                  e.preventDefault();
                  const el = document.getElementById("packages");
                  if (el) {
                    el.scrollIntoView({ behavior: "smooth" });
                  } else {
                    window.location.hash = "#packages";
                  }
                }}
                className="relative group h-9 sm:h-[38px] bg-[#c8ff00] hover:bg-[#b8ec00] text-black font-extrabold text-xs sm:text-xs md:text-sm px-3.5 sm:px-4 transition-all duration-300 shadow-[0_0_15px_rgba(200,255,0,0.25)] hover:shadow-[0_0_25px_rgba(200,255,0,0.55)] active:scale-95 flex items-center justify-center gap-1.5 cursor-pointer whitespace-nowrap"
              >
                <span>{t("nav_cta")}</span>
                <ArrowUpRight className="w-3.5 h-3.5 hidden sm:inline transition-transform group-hover:translate-x-[2px] group-hover:-translate-y-[2px]" />
              </button>

              {/* MENU Button placed on the far outer edge */}
              <button
                onClick={() => setMenuOpen(true)}
                className="group h-9 sm:h-[38px] flex items-center justify-center gap-2 px-3 sm:px-3.5 bg-zinc-900/90 hover:bg-zinc-850 border border-zinc-750 hover:border-[#c8ff00] transition-all duration-300 cursor-pointer active:scale-95 shadow-[0_0_15px_rgba(0,0,0,0.5)] whitespace-nowrap"
                aria-label="Open Navigation Menu"
              >
                <div className="flex flex-col gap-1 w-3.5 sm:w-4">
                  <span className="h-[2px] w-full bg-white group-hover:bg-[#c8ff00] transition-colors" />
                  <span className="h-[2px] w-3/4 bg-white group-hover:bg-[#c8ff00] group-hover:w-full transition-all" />
                  <span className="h-[2px] w-full bg-white group-hover:bg-[#c8ff00] transition-colors" />
                </div>
                <span className="text-[11px] sm:text-xs font-mono font-bold tracking-wider text-zinc-300 group-hover:text-[#c8ff00] transition-colors uppercase">
                  {isAr ? "القائمة" : "MENU"}
                </span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* FULLSCREEN THEATER/BOARD CURTAIN MENU (ستارة كاملة الشاشة تفتح من فوق لتحت وتقفل من تحت لفوق بنعومة فائقة) */}
      <div
        className={`curtain-menu-overlay p-6 sm:p-8 lg:px-12 lg:py-7 xl:px-16 xl:py-8 backdrop-blur-2xl ${
          menuOpen ? "is-open" : ""
        }`}
      >
        {/* Glowing Curtain Hem Line at the bottom edge */}
        <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-transparent via-[#c8ff00] to-transparent shadow-[0_0_25px_#c8ff00]" />
        <div className="absolute top-0 left-0 right-0 h-1 bg-[#c8ff00]/30 shadow-[0_0_15px_rgba(200,255,0,0.3)]" />

        {/* Subtle Cyber Grid & Ambient Glow */}
        <div className="absolute inset-0 bg-cyber-grid opacity-25 pointer-events-none" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[650px] h-[650px] bg-[#c8ff00]/6 rounded-full blur-[200px] pointer-events-none" />

        {/* Top Header Bar inside Curtain: Fades and slides down into place */}
        <div className="curtain-inner-header relative z-10 flex items-center justify-between border-b border-zinc-800/80 pb-4 lg:pb-4.5 w-full max-w-5xl mx-auto">
          {/* Logo & Coach Title */}
          <div className="flex items-center gap-3.5">
            <img src={LOGO_URL} alt="GAP" className="h-7 sm:h-8 lg:h-8.5 w-auto object-contain" />
            <div className="flex flex-col text-left font-bebas leading-[0.82] select-none">
              <span className="text-base sm:text-lg lg:text-xl font-black tracking-[0.11em] text-white uppercase">
                MOHAMED
              </span>
              <span className="text-xs sm:text-sm lg:text-[14px] font-black tracking-[0.21em] text-zinc-400 uppercase">
                ABO GAPEL
              </span>
            </div>
          </div>

          {/* Close Curtain Button with label */}
          <button
            onClick={() => setMenuOpen(false)}
            className="group flex items-center gap-2.5 px-3.5 sm:px-4 py-1.5 sm:py-2 bg-zinc-900 border border-zinc-750 hover:border-[#c8ff00] text-zinc-300 hover:text-white transition-all cursor-pointer shadow-[0_0_20px_rgba(0,0,0,0.6)] active:scale-95"
            aria-label="Close Menu"
          >
            <span className="text-xs font-mono font-bold tracking-widest uppercase group-hover:text-[#c8ff00] transition-colors">
              {isAr ? "إغلاق" : "CLOSE"}
            </span>
            <div className="w-6 h-6 rounded-full bg-zinc-800 group-hover:bg-[#c8ff00] flex items-center justify-center transition-colors">
              <X className="w-3.5 h-3.5 text-zinc-300 group-hover:text-black transition-colors" />
            </div>
          </button>
        </div>

        {/* Center: Grand Fullscreen Navigation Links: Fits perfectly on PC screen */}
        <div
          className="curtain-inner-nav relative z-10 max-w-4xl mx-auto w-full py-4 sm:py-5 lg:py-3 xl:py-5 my-auto"
          dir={isAr ? "rtl" : "ltr"}
        >
          <nav className="space-y-2.5 sm:space-y-3.5 lg:space-y-2.5 xl:space-y-3">
            {navItems.map((item, idx) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    setMenuOpen(false);
                    const targetId = item.href.replace("#", "");
                    const el = document.getElementById(targetId);
                    if (el) {
                      el.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  style={{
                    transitionDelay: menuOpen ? `${180 + idx * 65}ms` : "0ms",
                  }}
                  className="curtain-nav-item group flex items-center justify-between p-3 sm:p-4 lg:py-3 lg:px-5 xl:py-3.5 xl:px-5 border border-zinc-850/80 hover:border-[#c8ff00]/80 bg-zinc-950/60 hover:bg-zinc-900/90 shadow-[0_4px_25px_rgba(0,0,0,0.5)] cursor-pointer"
                >
                  <div className="flex items-center gap-3.5 sm:gap-5">
                    <span className="font-mono text-sm sm:text-base lg:text-sm xl:text-base text-[#c8ff00] font-black">
                      {item.number}
                    </span>
                    <div>
                      <div className="text-base sm:text-xl lg:text-xl xl:text-2xl font-black text-white group-hover:text-[#c8ff00] transition-colors font-sans leading-snug">
                        {item.title}
                      </div>
                      <p className="text-[11px] sm:text-xs text-zinc-400 mt-0.5 font-sans">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-zinc-600 group-hover:text-[#c8ff00] transition-all transform group-hover:scale-110 shrink-0" />
                </a>
              );
            })}
          </nav>
        </div>

        {/* Social Links & WhatsApp inside Curtain Menu */}
        <div className="curtain-inner-social relative z-10 max-w-4xl mx-auto w-full pt-3 sm:pt-4 pb-2 border-t border-zinc-850/70 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
            <span className="w-2 h-2 rounded-full bg-[#c8ff00] animate-pulse" />
            <span className="uppercase tracking-wider">
              {isAr ? "تواصل ومتابعة مباشرة:" : "CONNECT & SOCIAL:"}
            </span>
          </div>

          <div className="flex items-center gap-2 sm:gap-3 flex-wrap justify-center">
            {/* WhatsApp Direct */}
            <a
              href={SITE_CONFIG.socialLinks.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-3 sm:px-3.5 py-1.5 sm:py-2 bg-zinc-900/90 border border-zinc-800 hover:border-[#25D366] text-zinc-300 hover:text-[#25D366] transition-all cursor-pointer shadow-[0_0_15px_rgba(0,0,0,0.5)] active:scale-95 text-xs font-mono font-bold"
              aria-label="WhatsApp"
            >
              <svg className="w-4 h-4 fill-current text-[#25D366]" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
              </svg>
              <span>WhatsApp</span>
            </a>

            {/* Instagram Link */}
            <a
              href={SITE_CONFIG.socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-3 sm:px-3.5 py-1.5 sm:py-2 bg-zinc-900/90 border border-zinc-800 hover:border-[#E1306C] text-zinc-300 hover:text-[#E1306C] transition-all cursor-pointer shadow-[0_0_15px_rgba(0,0,0,0.5)] active:scale-95 text-xs font-mono font-bold"
              aria-label="Instagram"
            >
              <svg className="w-4 h-4 text-[#E1306C]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
              </svg>
              <span>Instagram</span>
            </a>

            {/* Facebook Link */}
            <a
              href={SITE_CONFIG.socialLinks.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-3 sm:px-3.5 py-1.5 sm:py-2 bg-zinc-900/90 border border-zinc-800 hover:border-[#1877F2] text-zinc-300 hover:text-[#1877F2] transition-all cursor-pointer shadow-[0_0_15px_rgba(0,0,0,0.5)] active:scale-95 text-xs font-mono font-bold"
              aria-label="Facebook"
            >
              <svg className="w-4 h-4 fill-current text-[#1877F2]" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              <span>Facebook</span>
            </a>
          </div>
        </div>

        {/* Bottom Bar: Currency & Language Switchers + Primary CTA */}
        <div className="curtain-inner-footer relative z-10 max-w-4xl mx-auto w-full pt-3 lg:pt-3.5 border-t border-zinc-850/80 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
          {/* Currency Selector */}
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-zinc-400 hidden sm:inline">
              {isAr ? "العملة:" : "Currency:"}
            </span>
            {(Object.keys(CURRENCY_CONFIGS) as CurrencyType[]).map((c) => {
              const cfg = CURRENCY_CONFIGS[c];
              const isSelected = currency === c;
              return (
                <button
                  key={c}
                  onClick={() => setCurrency(c)}
                  className={`px-3 py-1.5 border font-mono text-xs transition-all cursor-pointer ${
                    isSelected
                      ? "border-[#c8ff00] bg-[#c8ff00]/15 text-[#c8ff00] font-bold shadow-[0_0_12px_rgba(200,255,0,0.3)]"
                      : "border-zinc-800 bg-zinc-900/60 text-zinc-300 hover:border-zinc-700"
                  }`}
                >
                  {cfg.flag} {cfg.code}
                </button>
              );
            })}
          </div>

          {/* Language Toggle + Plans CTA */}
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={toggleLang}
              className="px-4 py-2.5 bg-zinc-900 border border-zinc-800 hover:border-[#c8ff00]/40 text-xs font-mono font-bold text-zinc-200 hover:text-white transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <Globe className="w-3.5 h-3.5 text-[#c8ff00]" />
              <span>{lang === "ar" ? "English" : "العربية"}</span>
            </button>

            <button
              onClick={() => {
                setMenuOpen(false);
                const el = document.getElementById("packages");
                if (el) {
                  el.scrollIntoView({ behavior: "smooth" });
                } else {
                  window.location.hash = "#packages";
                }
              }}
              className="flex-1 sm:flex-initial px-6 py-2.5 bg-[#c8ff00] hover:bg-[#b8ec00] text-black font-black text-xs sm:text-sm transition-all duration-300 shadow-[0_0_20px_rgba(200,255,0,0.35)] hover:shadow-[0_0_30px_rgba(200,255,0,0.6)] cursor-pointer active:scale-95 flex items-center justify-center gap-1.5"
            >
              <span>{t("nav_cta")}</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
