"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProcessSection from "@/components/ProcessSection";
import CertificatesSection from "@/components/CertificatesSection";
import ServicesSection from "@/components/ServicesSection";
import PricingSection from "@/components/PricingSection";
import Footer from "@/components/Footer";

import LoadingScreen from "@/components/LoadingScreen";
import ScrollReveal from "@/components/ScrollReveal";
import ScrollToTop from "@/components/ScrollToTop";
import SectionIndicator from "@/components/SectionIndicator";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#070707] text-[#f2f2f2] flex flex-col justify-between selection:bg-[#c8ff00] selection:text-black">
      {/* Universal Scroll Reveal for all current & future sections */}
      <ScrollReveal />

      {/* Cyber Athletic Loading Screen with Eraser Wipe */}
      <LoadingScreen />

      {/* Fixed Navigation Bar */}
      <Navbar />

      {/* Main Sections matching exact numbering 1, 2, 3, 4 */}
      <div className="flex-1">
        {/* 1️⃣ Image 1: Hero Banner */}
        <HeroSection />

        {/* 2️⃣ Image 2: About Coach & The Process */}
        <AboutSection />
        <ProcessSection />

        {/* 🏅 Accreditations & Certifications: NASM & AHA BLS */}
        <CertificatesSection />

        {/* 3️⃣ Image 3: Services / Built Around You / 0% COPY-PASTE */}
        <ServicesSection />

        {/* 4️⃣ Image 4: Packages & Pricing in AED / Comparison / FAQ */}
        <PricingSection onSelectPackage={() => {}} />
      </div>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Button */}
      <WhatsAppButton />

      {/* Floating Scroll To Top Button */}
      <ScrollToTop />

      {/* Floating Right Page Section Indicator (Horizontal Lines) */}
      <SectionIndicator />
    </main>
  );
}
