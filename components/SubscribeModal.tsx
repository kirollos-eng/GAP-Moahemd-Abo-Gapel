"use client";

import React, { useState, useEffect } from "react";
import { X, Send } from "lucide-react";
import { SITE_CONFIG, PricingPackage } from "@/lib/config";
import { useLanguage } from "@/lib/LanguageContext";
import { useCurrency } from "@/lib/CurrencyContext";

interface SubscribeModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialPackage?: PricingPackage | null;
}

export default function SubscribeModal({
  isOpen,
  onClose,
  initialPackage,
}: SubscribeModalProps) {
  const { t, isAr } = useLanguage();
  const { currency, symbol, getPackagePrice, formatAmount } = useCurrency();

  const [selectedPkg, setSelectedPkg] = useState<PricingPackage>(
    initialPackage || SITE_CONFIG.packages[2] // default to 6-months VIP
  );

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [goal, setGoal] = useState("بناء عضلات وخسارة دهون");

  useEffect(() => {
    if (initialPackage) {
      setSelectedPkg(initialPackage);
    }
  }, [initialPackage]);

  if (!isOpen) return null;

  const currentPricing = getPackagePrice(selectedPkg.id);

  const handleWhatsAppRedirect = (e: React.FormEvent) => {
    e.preventDefault();
    const textMessage = `مرحباً كابتن محمد أبو جبل (GAP)، أود الاشتراك في التدريب الأونلاين:%0A%0A` +
      `• *الاسم:* ${name || "غير محدد"}%0A` +
      `• *رقم الهاتف:* ${phone || "غير محدد"}%0A` +
      `• *الهدف:* ${goal}%0A` +
      `• *الباقة المختارة:* ${selectedPkg.name} (${selectedPkg.duration})%0A` +
      `• *السعر الإجمالي:* ${formatAmount(currentPricing.total)} ${symbol} (${currency})%0A%0A` +
      `أرجو إرسال تفاصيل الدفع واستمارة التقييم للبدء.`;

    const cleanNumber = SITE_CONFIG.whatsappNumber.replace(/[^0-9]/g, "");
    window.open(`https://wa.me/${cleanNumber}?text=${textMessage}`, "_blank");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl bg-[#0e0e0e] border border-zinc-800 shadow-[0_0_50px_rgba(0,0,0,0.9)] p-6 sm:p-8 rounded-none text-right overflow-y-auto max-h-[90vh]">
        {/* Neon Accent line top */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-[#c8ff00]" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 left-6 p-2 text-zinc-400 hover:text-white transition-colors bg-zinc-900 border border-zinc-800 cursor-pointer"
          aria-label={t("modal_close")}
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="mb-6">
          <div className="flex items-center gap-2 text-xs font-mono text-[#c8ff00] mb-1">
            <span className="w-2 h-2 rounded-full bg-[#c8ff00]" />
            <span>JOIN THE TEAM • DIRECT ACCESS</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-black text-white">
            {t("modal_title")}
          </h3>
          <p className="text-zinc-400 text-xs sm:text-sm mt-1">
            {t("modal_subtitle")}
          </p>
        </div>

        {/* Package Selector Pills */}
        <div className="mb-6">
          <label className="block text-xs font-mono text-zinc-400 mb-2">
            {isAr ? `اختر مدة الباقة (الأسعار بعملة ${currency}):` : `Select Package Duration (${currency}):`}
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {SITE_CONFIG.packages.map((pkg) => {
              const pkgPricing = getPackagePrice(pkg.id);
              return (
                <button
                  key={pkg.id}
                  type="button"
                  onClick={() => setSelectedPkg(pkg)}
                  className={`py-2 px-3 text-center border text-xs font-bold transition-all cursor-pointer ${
                    selectedPkg.id === pkg.id
                      ? "border-[#c8ff00] bg-[#c8ff00]/10 text-[#c8ff00]"
                      : "border-zinc-800 bg-zinc-900/50 text-zinc-300 hover:border-zinc-700"
                  }`}
                >
                  <div>{pkg.duration}</div>
                  <div className="text-[11px] font-mono mt-0.5 text-zinc-400">
                    {formatAmount(pkgPricing.total)} {symbol}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Package Highlight Box */}
        <div className="p-4 bg-zinc-950 border border-zinc-800 mb-6 flex items-center justify-between">
          <div>
            <div className="text-sm font-bold text-white flex items-center gap-2">
              <span>{selectedPkg.name}</span>
              <span className="text-[10px] font-mono text-[#c8ff00] bg-[#c8ff00]/10 border border-[#c8ff00]/30 px-1.5 py-0.5">
                {selectedPkg.deliveryTime}
              </span>
            </div>
            <div className="text-xs text-zinc-400 mt-1">
              {isAr ? "معدل شهري:" : "Monthly rate:"} {formatAmount(currentPricing.monthly)} {symbol} {t("pricing_per_month")}
            </div>
          </div>
          <div className="text-left font-mono font-black text-2xl text-[#c8ff00]">
            {formatAmount(currentPricing.total)}{" "}
            <span className="text-xs font-normal text-zinc-400">{symbol}</span>
          </div>
        </div>

        {/* Form Inputs */}
        <form onSubmit={handleWhatsAppRedirect} className="space-y-4">
          <div>
            <label className="block text-xs font-mono text-zinc-300 mb-1.5">
              {t("modal_name_lbl")}
            </label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder={isAr ? "مثال: أحمد محمد" : "e.g., John Doe"}
              className="w-full bg-zinc-900/90 border border-zinc-800 focus:border-[#c8ff00] px-4 py-3 text-sm text-white focus:outline-none transition-colors"
            />
          </div>

          <div>
            <label className="block text-xs font-mono text-zinc-300 mb-1.5">
              {t("modal_phone_lbl")}
            </label>
            <input
              type="tel"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="+971 50 123 4567"
              className="w-full bg-zinc-900/90 border border-zinc-800 focus:border-[#c8ff00] px-4 py-3 text-sm text-white focus:outline-none transition-colors font-mono text-left"
              dir="ltr"
            />
          </div>

          <div>
            <label className="block text-xs font-mono text-zinc-300 mb-1.5">
              {t("modal_goal_lbl")}
            </label>
            <select
              value={goal}
              onChange={(e) => setGoal(e.target.value)}
              className="w-full bg-zinc-900/90 border border-zinc-800 focus:border-[#c8ff00] px-4 py-3 text-sm text-white focus:outline-none transition-colors"
            >
              <option value="بناء عضلات وخسارة دهون (Recomposition)">
                بناء عضلات وخسارة دهون (Recomposition)
              </option>
              <option value="خسارة وزن وتنشيف حاد">خسارة وزن وتنشيف حاد</option>
              <option value="تضخيم وبناء كتلة عضلية نقية">تضخيم وبناء كتلة عضلية نقية</option>
              <option value="تجهيز بطولات كمال أجسام أو فوتوسيشن">
                تجهيز بطولات كمال أجسام أو فوتوسيشن
              </option>
              <option value="لياقة عامة وتحسين نمط الحياة والصحة">
                لياقة عامة وتحسين نمط الحياة والصحة
              </option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full py-4 mt-2 bg-[#c8ff00] hover:bg-[#b8ec00] text-black font-black text-sm tracking-wider uppercase transition-all shadow-[0_0_25px_rgba(200,255,0,0.3)] hover:shadow-[0_0_35px_rgba(200,255,0,0.6)] flex items-center justify-center gap-2 active:scale-95 cursor-pointer"
          >
            <span>{t("modal_cta")}</span>
            <Send className="w-4 h-4" />
          </button>
        </form>
      </div>
    </div>
  );
}
