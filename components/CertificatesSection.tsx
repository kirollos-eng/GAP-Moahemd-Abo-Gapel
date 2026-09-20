"use client";

import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import {
  ShieldCheck,
  CheckCircle2,
  Maximize2,
  X,
  ExternalLink,
  FileCheck2,
  Hash,
} from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

interface CertificateItem {
  id: string;
  badge: string;
  title: string;
  org: string;
  logoSrc: string;
  logoAlt: string;
  imageSrc: string;
  aspectRatio: "landscape" | "portrait";
  idLabel: string;
  idValue: string;
  description: string;
  officialTag: string;
}

export default function CertificatesSection() {
  const { t, isAr } = useLanguage();
  const [selectedCert, setSelectedCert] = useState<CertificateItem | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Close lightbox on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedCert(null);
      }
    };
    if (selectedCert) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [selectedCert]);

  const certificates: CertificateItem[] = [
    {
      id: "nasm",
      badge: "NASM • CPT",
      title: t("cert_nasm_title"),
      org: t("cert_nasm_org"),
      logoSrc: "/certificates/nasm-white-logo.png",
      logoAlt: "NASM - National Academy of Sports Medicine",
      imageSrc: "/certificates/nasm-certificate.jpg",
      aspectRatio: "landscape",
      idLabel: t("cert_nasm_id_lbl"),
      idValue: t("cert_nasm_id_val"),
      description: t("cert_nasm_desc"),
      officialTag: t("cert_nasm_tag"),
    },
    {
      id: "bls",
      badge: "AHA • BLS",
      title: t("cert_bls_title"),
      org: t("cert_bls_org"),
      logoSrc: "/certificates/aha-white-logo.png",
      logoAlt: "American Heart Association - BLS Provider",
      imageSrc: "/certificates/bls-certificate.jpg",
      aspectRatio: "portrait",
      idLabel: t("cert_bls_id_lbl"),
      idValue: t("cert_bls_id_val"),
      description: t("cert_bls_desc"),
      officialTag: t("cert_bls_tag"),
    },
  ];

  return (
    <section
      id="certificates"
      className="relative bg-[#070707] py-20 md:py-28 border-t border-zinc-900 overflow-hidden scroll-mt-20 md:scroll-mt-24"
    >
      {/* Background Watermark at Beginning of Section */}
      <div className="absolute inset-x-0 top-8 sm:top-12 md:top-16 flex items-center justify-center pointer-events-none select-none overflow-hidden z-0 opacity-[0.18] md:opacity-[0.22]">
        <span className="watermark-textured-white text-[22vw] uppercase whitespace-nowrap tracking-wider">
          CERTIFIED
        </span>
      </div>

      {/* Ambient background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#c8ff00]/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14 md:mb-16">
          {/* Headline */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight max-w-4xl">
            <span>{t("cert_title_1")}</span>{" "}
            <span className="text-[#c8ff00] neon-glow-text">
              {t("cert_title_2")}
            </span>
          </h2>

          {/* Subtitle */}
          <p className="mt-4 text-sm sm:text-base md:text-lg text-zinc-400 max-w-2xl leading-relaxed">
            {t("cert_subtitle")}
          </p>

          {/* Company Logos: White, No Background, Side by Side (Enlarged) */}
          <div className="mt-8 mb-2 flex items-center justify-center gap-10 sm:gap-16 md:gap-20 select-none">
            <div className="flex items-center justify-center h-14 sm:h-18 md:h-20 opacity-90 hover:opacity-100 transition-all hover:scale-105 duration-300">
              <img
                src="/certificates/nasm-white-logo.png"
                alt="NASM - National Academy of Sports Medicine"
                className="h-11 sm:h-14 md:h-16 w-auto max-w-[200px] object-contain drop-shadow-[0_0_20px_rgba(255,255,255,0.12)]"
              />
            </div>
            <div className="h-10 sm:h-14 w-[1px] bg-zinc-800" />
            <div className="flex items-center justify-center h-14 sm:h-18 md:h-20 opacity-90 hover:opacity-100 transition-all hover:scale-105 duration-300">
              <img
                src="/certificates/aha-white-logo.png"
                alt="American Heart Association"
                className="h-11 sm:h-14 md:h-16 w-auto max-w-[200px] object-contain drop-shadow-[0_0_20px_rgba(255,255,255,0.12)]"
              />
            </div>
          </div>
        </div>

        {/* 2 Certificates Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">
          {certificates.map((cert) => (
            <div
              key={cert.id}
              className="group relative bg-gradient-to-b from-[#0e0e0e] to-[#080808] border border-zinc-800 hover:border-[#c8ff00]/60 rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-[0_0_35px_rgba(200,255,0,0.12)]"
            >
              {/* Top Bar: Official Logo & Accreditation Badge (Symmetric justify-between layout) */}
              <div className="flex items-center justify-between gap-4 mb-6 pb-4 border-b border-zinc-850 h-16 sm:h-20 shrink-0">
                {/* Official Logo (White, No Background) */}
                <div className="flex items-center justify-start h-12 sm:h-14 w-36 sm:w-44 shrink-0">
                  <img
                    src={cert.logoSrc}
                    alt={cert.logoAlt}
                    className={`${
                      cert.id === "bls"
                        ? "h-11 sm:h-13 max-w-[170px]"
                        : "h-9 sm:h-11 max-w-[170px]"
                    } w-auto object-contain opacity-95 group-hover:opacity-100 transition-all group-hover:scale-105`}
                  />
                </div>

                <div className="flex flex-col text-end shrink-0">
                  <span className="text-sm sm:text-base font-mono font-bold tracking-wider uppercase text-[#c8ff00]">
                    {cert.badge}
                  </span>
                  <span className="text-[10px] sm:text-[11px] font-mono text-zinc-400 mt-0.5">
                    {cert.officialTag}
                  </span>
                </div>
              </div>

              {/* Certificate Details with Normalized Vertical Footprint */}
              <div className="mb-6 flex-1 flex flex-col">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-black text-white group-hover:text-[#c8ff00] transition-colors leading-snug mb-2 min-h-[3.5rem] sm:min-h-[4rem] flex items-center">
                  {cert.title}
                </h3>

                <p className="text-xs sm:text-sm font-semibold text-zinc-300 mb-3 min-h-[2.25rem] sm:min-h-[2.5rem] flex items-center">
                  {cert.org}
                </p>

                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-normal mb-5 min-h-[4.25rem] sm:min-h-[4.5rem] flex items-center">
                  {cert.description}
                </p>

                {/* Metadata Chip: Certificate / License Code (Symmetric alignment) */}
                <div className="bg-black/70 border border-zinc-850 rounded-xl p-3.5 text-xs font-mono flex items-center justify-between mt-auto">
                  <div className="flex flex-col gap-0.5">
                    <span className="text-zinc-500 text-[10px] uppercase flex items-center gap-1">
                      <Hash className="w-3 h-3 text-[#c8ff00]" />
                      {cert.idLabel}
                    </span>
                    <span className="text-white font-bold text-sm tracking-wider">
                      {cert.idValue}
                    </span>
                  </div>

                  <div className="flex items-center gap-1 text-[11px] text-emerald-400 font-mono font-semibold">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#c8ff00]" />
                    <span>{t("cert_verified_badge")}</span>
                  </div>
                </div>
              </div>

              {/* Certificate Preview Card with Click to Enlarge */}
              <div className="relative mt-auto">
                <div
                  onClick={() => setSelectedCert(cert)}
                  className="relative w-full h-64 sm:h-72 rounded-xl overflow-hidden bg-gradient-to-b from-[#0c0c0c] to-[#050505] border border-zinc-850 group-hover:border-[#c8ff00]/40 transition-all duration-300 cursor-pointer flex items-center justify-center p-3.5 sm:p-4 group/img shadow-inner"
                >
                  <img
                    src={cert.imageSrc}
                    alt={cert.title}
                    className="max-h-full max-w-full object-contain rounded-lg transition-transform duration-500 group-hover/img:scale-[1.02] shadow-[0_6px_25px_rgba(0,0,0,0.85)] border border-zinc-850/80"
                  />

                  {/* Dark gradient overlay on hover with Zoom CTA */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-2 backdrop-blur-[2px] rounded-xl">
                    <div className="w-12 h-12 rounded-full bg-[#c8ff00] text-black flex items-center justify-center shadow-[0_0_20px_#c8ff00] scale-90 group-hover/img:scale-100 transition-transform duration-300">
                      <Maximize2 className="w-6 h-6" />
                    </div>
                    <span className="text-white font-bold text-xs bg-black/80 px-3 py-1 rounded-full border border-zinc-700">
                      {t("cert_zoom_hint")}
                    </span>
                  </div>

                  {/* Quick Enlarge corner button */}
                  <button
                    type="button"
                    aria-label={t("cert_zoom_hint")}
                    className="absolute bottom-3 right-3 z-10 bg-black/80 hover:bg-[#c8ff00] text-white hover:text-black border border-zinc-700 hover:border-[#c8ff00] p-2 rounded-lg transition-all duration-200"
                  >
                    <Maximize2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Trust Statement & Guarantee Box */}
        <div className="mt-14 md:mt-20 bg-gradient-to-r from-[#0c0c0c] via-[#111111] to-[#0c0c0c] border border-zinc-800 rounded-2xl p-6 sm:p-8 md:p-10 text-right">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 text-xs font-mono text-[#c8ff00] uppercase mb-2">
                <FileCheck2 className="w-4 h-4" />
                <span>EVIDENCE-BASED COACHING BLUEPRINT</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-white mb-2">
                {t("cert_trust_title")}
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                {t("cert_trust_desc")}
              </p>
            </div>

            <div className="w-full lg:w-auto flex flex-col gap-2.5 text-xs text-zinc-300 font-medium">
              <div className="flex items-center gap-2.5 bg-black/60 border border-zinc-800 px-4 py-2.5 rounded-xl">
                <CheckCircle2 className="w-4 h-4 text-[#c8ff00] shrink-0" />
                <span>{t("cert_trust_point1")}</span>
              </div>
              <div className="flex items-center gap-2.5 bg-black/60 border border-zinc-800 px-4 py-2.5 rounded-xl">
                <CheckCircle2 className="w-4 h-4 text-[#c8ff00] shrink-0" />
                <span>{t("cert_trust_point2")}</span>
              </div>
              <div className="flex items-center gap-2.5 bg-black/60 border border-zinc-800 px-4 py-2.5 rounded-xl">
                <CheckCircle2 className="w-4 h-4 text-[#c8ff00] shrink-0" />
                <span>{t("cert_trust_point3")}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Fullscreen Lightbox Modal for Certificate Inspection via Portal */}
      {mounted &&
        selectedCert &&
        createPortal(
          <div
            role="dialog"
            aria-modal="true"
            className="fixed inset-0 z-[9999] bg-black/92 backdrop-blur-md flex items-center justify-center p-3 sm:p-5 animate-in fade-in duration-200"
            onClick={() => setSelectedCert(null)}
          >
            <div
              className="relative max-w-3xl w-full bg-[#0c0c0c] border border-zinc-700 rounded-2xl overflow-hidden shadow-[0_0_80px_rgba(0,0,0,0.95)] flex flex-col max-h-[90vh] my-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 border-b border-zinc-800 bg-[#121212] shrink-0">
                <div className="flex items-center gap-3">
                  {/* Official Logo in Modal (White, No Background) */}
                  <div className="flex items-center justify-center h-8 sm:h-9">
                    <img
                      src={selectedCert.logoSrc}
                      alt={selectedCert.logoAlt}
                      className={`${
                        selectedCert.id === "bls"
                          ? "h-8 max-w-[130px]"
                          : "h-6 max-w-[100px]"
                      } w-auto object-contain opacity-95`}
                    />
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base font-bold text-white leading-tight">
                      {selectedCert.title}
                    </h4>
                    <p className="text-[11px] text-zinc-400">{selectedCert.org}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <a
                    href={selectedCert.imageSrc}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-800 transition-colors"
                    title="Open full image in new tab"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                  <button
                    onClick={() => setSelectedCert(null)}
                    className="p-2 rounded-lg bg-zinc-900 hover:bg-red-500/20 text-zinc-300 hover:text-red-400 border border-zinc-800 transition-colors cursor-pointer"
                    aria-label={t("cert_close_preview")}
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Modal Certificate Image Canvas */}
              <div className="relative flex-1 overflow-hidden p-3 sm:p-5 flex items-center justify-center bg-black/90 min-h-0">
                <img
                  src={selectedCert.imageSrc}
                  alt={selectedCert.title}
                  className="max-h-[62vh] sm:max-h-[68vh] w-auto max-w-full object-contain rounded-lg border border-zinc-800 shadow-2xl"
                />
              </div>

              {/* Modal Footer with Verification Info */}
              <div className="px-4 sm:px-6 py-3 border-t border-zinc-850 bg-[#0d0d0d] flex flex-wrap items-center justify-between gap-3 text-xs font-mono shrink-0">
                <div className="flex items-center gap-4 text-zinc-400">
                  <span>
                    <strong className="text-white">{selectedCert.idLabel}</strong>{" "}
                    <span className="text-[#c8ff00]">{selectedCert.idValue}</span>
                  </span>
                  <span className="text-emerald-400 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    {t("cert_verified_badge")}
                  </span>
                </div>

                <button
                  onClick={() => setSelectedCert(null)}
                  className="px-4 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-white text-xs font-bold transition-colors cursor-pointer"
                >
                  {t("cert_close_preview")}
                </button>
              </div>
            </div>
          </div>,
          document.body
        )}
    </section>
  );
}
