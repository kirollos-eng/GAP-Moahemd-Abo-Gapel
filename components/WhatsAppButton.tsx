"use client";

import React, { useState, useEffect } from "react";
import { X, Send } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

const WHATSAPP_NUMBER = "971553722591";

export default function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isPulsing, setIsPulsing] = useState(true);
  const { isAr } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    setIsVisible(true);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isPopupOpen) setIsPulsing(false);
  }, [isPopupOpen]);

  const openWhatsApp = () => {
    const message = isAr
      ? "مرحباً، أريد الاستفسار عن باقات التدريب مع GAP Coaching 💪"
      : "Hi, I'd like to inquire about training packages with GAP Coaching 💪";
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setIsPopupOpen(false);
  };

  const content = {
    ar: {
      greeting: "أهلاً! 👋",
      subtitle: "كيف يمكنني مساعدتك؟",
      body: "تواصل معنا مباشرةً على واتساب للاستفسار عن برامج التدريب والتغذية المخصصة.",
      cta: "ابدأ المحادثة",
      availability: "متاح للرد • GAP Coaching",
      label: "واتساب",
    },
    en: {
      greeting: "Hello! 👋",
      subtitle: "How can I help you?",
      body: "Chat with us directly on WhatsApp to inquire about personalized training & nutrition programs.",
      cta: "Start Chat",
      availability: "Available to reply • GAP Coaching",
      label: "WhatsApp",
    },
  };

  const t = isAr ? content.ar : content.en;

  return (
    <>
      {/* Popup Card */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label={t.label}
        className={`fixed bottom-24 left-6 z-50 w-[300px] transition-all duration-500 ${
          isPopupOpen
            ? "opacity-100 translate-y-0 pointer-events-auto scale-100"
            : "opacity-0 translate-y-6 pointer-events-none scale-95"
        }`}
      >
        <div className="relative rounded-2xl overflow-hidden shadow-[0_20px_80px_rgba(0,0,0,0.85),0_0_40px_rgba(37,211,102,0.18)] border border-white/10 bg-[#0d0d0d]">
          {/* Green Header */}
          <div className="relative bg-gradient-to-br from-[#128C7E] to-[#075E54] px-5 py-4 flex items-center gap-3">
            <div className="relative flex-shrink-0">
              <div className="w-12 h-12 rounded-full bg-[#c8ff00]/20 border-2 border-[#c8ff00]/60 flex items-center justify-center shadow-[0_0_15px_rgba(200,255,0,0.4)]">
                <span className="text-[#c8ff00] font-bold text-lg" style={{ fontFamily: "var(--font-bebas)" }}>G</span>
              </div>
              <span className="absolute bottom-0 right-0 w-3 h-3 bg-[#4ade80] border-2 border-[#075E54] rounded-full" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-white font-bold text-sm leading-tight">GAP Coaching</p>
              <p className="text-white/70 text-xs mt-0.5">{t.availability}</p>
            </div>
            <button
              type="button"
              onClick={() => setIsPopupOpen(false)}
              aria-label="إغلاق"
              className="flex-shrink-0 w-7 h-7 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors duration-200 cursor-pointer"
            >
              <X className="w-3.5 h-3.5 text-white" />
            </button>
          </div>

          {/* Chat bubble area */}
          <div className="px-5 py-4 bg-[#0d0d0d]">
            <div className="flex items-start gap-2 mb-3">
              <div className="w-7 h-7 rounded-full bg-[#c8ff00]/10 border border-[#c8ff00]/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-[#c8ff00] text-xs font-bold" style={{ fontFamily: "var(--font-bebas)" }}>G</span>
              </div>
              <div className="bg-[#1a1a1a] border border-white/8 rounded-2xl rounded-tl-none px-4 py-3 max-w-[210px] shadow-sm">
                <p className="text-[#c8ff00] font-bold text-sm">{t.greeting}</p>
                <p className="text-zinc-300 text-xs mt-1 font-medium">{t.subtitle}</p>
                <p className="text-zinc-400 text-[11px] mt-2 leading-relaxed">{t.body}</p>
                <p className="text-zinc-600 text-[10px] mt-2 text-end">الآن</p>
              </div>
            </div>

            <button
              type="button"
              id="whatsapp-chat-btn"
              onClick={openWhatsApp}
              className="w-full mt-1 py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#20c45e] active:scale-[0.97] text-white font-bold text-sm flex items-center justify-center gap-2 transition-all duration-200 shadow-[0_4px_20px_rgba(37,211,102,0.35)] cursor-pointer"
            >
              <Send className="w-4 h-4" />
              {t.cta}
            </button>
          </div>

          <div className="h-[3px] bg-gradient-to-r from-[#25D366] via-[#c8ff00] to-[#25D366]" />
        </div>
      </div>

      {/* Floating Button */}
      <div
        className={`fixed bottom-6 left-6 z-50 transition-all duration-400 ${
          isVisible
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        {isPulsing && !isPopupOpen && (
          <>
            <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30 pointer-events-none" />
            <span
              className="absolute inset-[-6px] rounded-full border border-[#25D366]/30 animate-ping pointer-events-none"
              style={{ animationDelay: "0.4s" }}
            />
          </>
        )}

        <button
          type="button"
          id="whatsapp-float-btn"
          onClick={() => setIsPopupOpen((prev) => !prev)}
          aria-label={t.label}
          title={t.label}
          className={`relative w-14 h-14 rounded-full flex items-center justify-center shadow-[0_8px_30px_rgba(37,211,102,0.5)] transition-all duration-300 cursor-pointer active:scale-90 group ${
            isPopupOpen
              ? "bg-[#0d0d0d] border-2 border-[#25D366]"
              : "bg-[#25D366] hover:bg-[#20c45e] hover:shadow-[0_8px_40px_rgba(37,211,102,0.7)] hover:scale-110"
          }`}
        >
          {isPopupOpen ? (
            <X className="w-6 h-6 text-[#25D366] transition-transform duration-300" />
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="white"
              className="w-7 h-7 transition-transform duration-300 group-hover:scale-110"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
          )}
        </button>
      </div>
    </>
  );
}
