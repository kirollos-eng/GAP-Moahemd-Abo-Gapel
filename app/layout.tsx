import type { Metadata, Viewport } from "next";
import { Cairo, Outfit, JetBrains_Mono, Bebas_Neue } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/lib/LanguageContext";
import { CurrencyProvider } from "@/lib/CurrencyContext";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#070707",
};

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "GAP Coaching",
  description: "تدريب أونلاين مبني علمياً على جسمك وهدفك — خطة تغذية مرنة ومحسوبة، برنامج تدريبي علمي، ومتابعة شخصية مباشرة 1:1 مع GAP Coaching.",
  keywords: ["تدريب أونلاين", "مدرب شخصي", "GAP", "GAP Coaching", "كمال أجسام", "باقات تدريب الإمارات", "خسارة دهون", "بناء عضلات"],
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.png", type: "image/png" },
      { url: "/icon.png", type: "image/png" },
    ],
    shortcut: "/favicon.svg",
    apple: "/icon.png",
  },
  openGraph: {
    title: "GAP Coaching",
    description: "اصنع نسختك الأفضل بأعلى معايير علمية مع GAP Coaching. برامج تدريب وتغذية مخصصة 100% بدون نسخ ولصق.",
    locale: "ar_AE",
    type: "website",
    images: [
      {
        url: "/logo-gap.png",
        width: 1200,
        height: 630,
        alt: "GAP COACHING",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className={`${cairo.variable} ${outfit.variable} ${jetbrainsMono.variable} ${bebasNeue.variable} scroll-smooth dark`}
    >
      <body className="min-h-screen bg-[#070707] text-[#f2f2f2] font-sans antialiased selection:bg-[#c8ff00] selection:text-black overflow-x-hidden">
        <LanguageProvider>
          <CurrencyProvider>{children}</CurrencyProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
