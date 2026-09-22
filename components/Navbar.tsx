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

  const LOGO_URL = "/logo-gap.svg";

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 15);
          ticking = false;
        });
        ticking = true;
      }
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
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

  const scrollToSection = (targetId: string) => {
    setMenuOpen(false);
    document.body.style.overflow = "";

    setTimeout(() => {
      if (targetId === "hero") {
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }
      const el = document.getElementById(targetId);
      if (el) {
        const headerOffset = 70;
        const elementPosition = el.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = Math.max(0, elementPosition - headerOffset);
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }, 80);
  };

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
      subtitle: isAr ? "0% نسخ - لصق وخبرة 3+ سنوات" : "0% Copy-Paste & 3+ Years Experience",
      href: "#about",
      icon: ShieldCheck,
    },
    {
      id: "certificates",
      number: "04",
      title: t("nav_certificates"),
      subtitle: isAr ? "شهادات واعتمادات تدريب دولية" : "International Coaching Accreditations",
      href: "#certificates",
      icon: Award,
    },
    {
      id: "services",
      number: "05",
      title: t("nav_services"),
      subtitle: isAr ? "برامج تدريب وتغذية مبنية بالكامل علشانك" : "Custom Built Around You & 0% Copy-Paste",
      href: "#services",
      icon: Sparkles,
    },
    {
      id: "faq",
      number: "06",
      title: t("nav_faq"),
      subtitle: isAr ? "إجابات على كافة استفساراتك" : "Frequently Asked Questions",
      href: "#faq",
      icon: HelpCircle,
    },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-[#070707]/95 backdrop-blur-md border-b border-zinc-800/90 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.8)]"
            : "bg-transparent border-b border-transparent py-4 md:py-5 pointer-events-none"
        }`}
      >
        <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 relative">
          <div className="flex items-center justify-between min-h-[44px]" dir="ltr">
            {/* SIDE 1: Left Spacer for balance */}
            <div className="flex items-center min-w-[40px] sm:min-w-[60px]" />

            {/* CENTER: GAP Logo - Starts large in Hero & gracefully transitions to Navbar on scroll */}
            <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 pointer-events-auto">
              <Link
                href="/"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("hero");
                }}
                className={`flex items-center justify-center group py-1 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] transform-gpu ${
                  isScrolled
                    ? "translate-y-0 drop-shadow-[0_0_12px_rgba(255,255,255,0.2)]"
                    : "translate-y-[44px] sm:translate-y-[68px] md:translate-y-[88px] lg:translate-y-[100px] drop-shadow-[0_4px_30px_rgba(255,255,255,0.35)]"
                }`}
                aria-label="GAP Home"
              >
                <img
                  src={LOGO_URL}
                  alt="GAP Logo"
                  className={`w-auto object-contain transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105 ${
                    isScrolled
                      ? "h-5 sm:h-7 md:h-8"
                      : "h-11 sm:h-16 md:h-22 lg:h-26"
                  }`}
                />
              </Link>
            </div>

            {/* SIDE 2: CTA (ابدأ الآن) + Language Switcher + MENU on the outer edge */}
            <div className="flex items-center gap-1 sm:gap-2.5 pointer-events-auto">
              {/* Language Switcher (No container) */}
              <button
                onClick={toggleLang}
                className="text-[11px] sm:text-sm font-mono font-bold text-zinc-400 hover:text-[#c8ff00] transition-colors cursor-pointer px-1.5 sm:px-2 py-1 uppercase tracking-wider"
                title="Switch Language / تغيير اللغة"
              >
                {lang === "ar" ? "EN" : "عربي"}
              </button>

              {/* Main CTA: Visible on tablet & desktop, tucked inside Menu on mobile for zero header crowding */}
              <button
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("packages");
                }}
                className="hidden sm:flex relative group h-9 sm:h-[38px] bg-[#c8ff00] hover:bg-[#b8ec00] text-black font-extrabold text-xs sm:text-xs md:text-sm px-3.5 sm:px-4 transition-all duration-300 shadow-[0_0_15px_rgba(200,255,0,0.25)] hover:shadow-[0_0_25px_rgba(200,255,0,0.55)] active:scale-95 items-center justify-center gap-1.5 cursor-pointer whitespace-nowrap"
              >
                <span>{t("nav_cta")}</span>
                <ArrowUpRight className="w-3.5 h-3.5 hidden sm:inline transition-transform group-hover:translate-x-[2px] group-hover:-translate-y-[2px]" />
              </button>

              {/* MENU Button placed on the far outer edge */}
              <button
                onClick={() => setMenuOpen(true)}
                className="group h-8 sm:h-[38px] flex items-center justify-center gap-1.5 sm:gap-2 px-2.5 sm:px-3.5 bg-zinc-900/90 hover:bg-zinc-850 border border-zinc-750 hover:border-[#c8ff00] transition-all duration-300 cursor-pointer active:scale-95 shadow-[0_0_15px_rgba(0,0,0,0.5)] whitespace-nowrap"
                aria-label="Open Navigation Menu"
              >
                <div className="flex flex-col gap-1 w-3 sm:w-4">
                  <span className="h-[2px] w-full bg-white group-hover:bg-[#c8ff00] transition-colors" />
                  <span className="h-[2px] w-3/4 bg-white group-hover:bg-[#c8ff00] group-hover:w-full transition-all" />
                  <span className="h-[2px] w-full bg-white group-hover:bg-[#c8ff00] transition-colors" />
                </div>
                <span className="text-[10px] sm:text-xs font-mono font-bold tracking-wider text-zinc-300 group-hover:text-[#c8ff00] transition-colors uppercase">
                  {isAr ? "القائمة" : "MENU"}
                </span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* FULLSCREEN THEATER/BOARD CURTAIN MENU */}
      <div
        className={`curtain-menu-overlay p-4 sm:p-8 lg:px-12 lg:py-7 xl:px-16 xl:py-8 backdrop-blur-2xl ${
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
          {/* Logo */}
          <div className="flex items-center">
            <img src={LOGO_URL} alt="GAP" className="h-7 sm:h-8 lg:h-8.5 w-auto object-contain" />
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
                    scrollToSection(item.href.replace("#", ""));
                  }}
                  style={{
                    transitionDelay: menuOpen ? `${180 + idx * 55}ms` : "0ms",
                  }}
                  className="curtain-nav-item group flex items-center justify-between p-3 sm:p-3.5 lg:py-2.5 lg:px-5 xl:py-3 xl:px-5 border border-zinc-850/80 hover:border-[#c8ff00]/80 bg-zinc-950/60 hover:bg-zinc-900/90 shadow-[0_4px_25px_rgba(0,0,0,0.5)] cursor-pointer"
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

            {/* WhatsApp Link */}
            <a
              href="https://wa.me/971553722591?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D8%8C%20%D8%A3%D8%B1%D9%8A%D8%AF%20%D8%A7%D9%84%D8%A7%D8%B3%D8%AA%D9%81%D8%B3%D8%A7%D8%B1%20%D8%B9%D9%86%20%D8%A8%D8%A7%D9%82%D8%A7%D8%AA%20%D8%A7%D9%84%D8%AA%D8%AF%D8%B1%D9%8A%D8%A8%20%D9%85%D8%B9%20GAP%20Coaching%20%F0%9F%92%AA"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-3 sm:px-3.5 py-1.5 sm:py-2 bg-zinc-900/90 border border-zinc-800 hover:border-[#25D366] text-zinc-300 hover:text-[#25D366] transition-all cursor-pointer shadow-[0_0_15px_rgba(0,0,0,0.5)] active:scale-95 text-xs font-mono font-bold"
              aria-label="WhatsApp"
            >
              <svg className="w-4 h-4 fill-current text-[#25D366]" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              <span>WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Bottom Bar: Language Switcher + Primary CTA */}
        <div className="curtain-inner-footer relative z-10 max-w-4xl mx-auto w-full pt-3 lg:pt-3.5 border-t border-zinc-850/80 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
          {/* Made by VeraPiú Credit */}
          <a
            href="https://verapiu.com"
            target="_blank"
            rel="noopener noreferrer"
            dir="ltr"
            className="group inline-flex items-center justify-center gap-1.5 text-xs font-mono text-zinc-500 hover:text-zinc-300 transition-colors"
          >
            <span>Made by</span>
            <span className="font-bold text-zinc-400 group-hover:text-[#c8ff00] transition-colors underline decoration-zinc-700 underline-offset-4 group-hover:decoration-[#c8ff00]">
              VeraPiú
            </span>
          </a>

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
              onClick={() => scrollToSection("packages")}
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
