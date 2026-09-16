"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import CertificatesSection from "@/components/CertificatesSection";
import ServicesSection from "@/components/ServicesSection";
import PricingSection from "@/components/PricingSection";
import Footer from "@/components/Footer";
import SubscribeModal from "@/components/SubscribeModal";
import { PricingPackage, SITE_CONFIG } from "@/lib/config";
import { MessageCircle } from "lucide-react";

import LoadingScreen from "@/components/LoadingScreen";
import ScrollReveal from "@/components/ScrollReveal";
import ScrollToTop from "@/components/ScrollToTop";
import SectionIndicator from "@/components/SectionIndicator";

export default function Home() {
  const [isSubscribeOpen, setIsSubscribeOpen] = useState(false);
  const [activePackage, setActivePackage] = useState<PricingPackage | null>(null);

  const handleOpenSubscribe = (pkg?: PricingPackage) => {
    if (pkg) {
      setActivePackage(pkg);
    } else {
      // Default to 6-months VIP
      setActivePackage(SITE_CONFIG.packages[2]);
    }
    setIsSubscribeOpen(true);
  };

  const handleDirectWhatsApp = () => {
    const cleanNumber = SITE_CONFIG.whatsappNumber.replace(/[^0-9]/g, "");
    window.open(
      `https://wa.me/${cleanNumber}?text=مرحباً كابتن محمد، أرغب في الاستفسار عن باقات التدريب الأونلاين`,
      "_blank"
    );
  };

  return (
    <main className="relative min-h-screen bg-[#070707] text-[#f2f2f2] flex flex-col justify-between selection:bg-[#c8ff00] selection:text-black">
      {/* Universal Scroll Reveal for all current & future sections */}
      <ScrollReveal />

      {/* Cyber Athletic Loading Screen with Eraser Wipe */}
      <LoadingScreen />

      {/* Fixed Navigation Bar */}
      <Navbar onOpenSubscribe={() => handleOpenSubscribe()} />

      {/* Main Sections matching exact numbering 1, 2, 3, 4 */}
      <div className="flex-1">
        {/* 1️⃣ Image 1: Hero Banner */}
        <HeroSection onSelectPackage={() => handleOpenSubscribe()} />

        {/* 2️⃣ Image 2: About Coach & The Process */}
        <AboutSection />

        {/* 🏅 Accreditations & Certifications: NASM & AHA BLS */}
        <CertificatesSection />

        {/* 3️⃣ Image 3: Services / Built Around You / 0% COPY-PASTE */}
        <ServicesSection />

        {/* 4️⃣ Image 4: Packages & Pricing in AED / Comparison / FAQ */}
        <PricingSection onSelectPackage={(pkg) => handleOpenSubscribe(pkg)} />
      </div>

      {/* Footer */}
      <Footer />

      {/* Subscribe & WhatsApp Booking Intake Modal */}
      <SubscribeModal
        isOpen={isSubscribeOpen}
        onClose={() => setIsSubscribeOpen(false)}
        initialPackage={activePackage}
      />

      {/* Floating Quick Action WhatsApp Button */}
      <button
        onClick={handleDirectWhatsApp}
        className="fixed bottom-6 left-6 z-40 bg-[#25D366] hover:bg-[#20bd5a] text-white p-3.5 rounded-full shadow-[0_0_20px_rgba(37,211,102,0.4)] hover:shadow-[0_0_30px_rgba(37,211,102,0.7)] transition-all duration-300 active:scale-90 flex items-center justify-center group cursor-pointer"
        aria-label="تواصل عبر واتساب"
        title="تواصل مباشر عبر واتساب"
      >
        <MessageCircle className="w-6 h-6 fill-white" />
        <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 ease-in-out font-bold text-xs font-sans px-0 group-hover:px-2">
          تواصل مع الكابتن
        </span>
      </button>

      {/* Floating Scroll To Top Button */}
      <ScrollToTop />

      {/* Floating Right Page Section Indicator (Horizontal Lines) */}
      <SectionIndicator />
    </main>
  );
}
