import type { Metadata } from "next";
import { Cairo, Outfit, JetBrains_Mono, Bebas_Neue } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/lib/LanguageContext";
import { CurrencyProvider } from "@/lib/CurrencyContext";

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
  title: "MOHAMED ABO GAPEL | تدريب أونلاين متهندس على جسمك وهدفك",
  description: "تدريب أونلاين برايفت متهندس على جسمك وهدفك — خطة تغذية مرنة ومحسوبة، برنامج تدريبي علمي، ومتابعة شخصية مباشرة 1:1 مع الكابتن محمد أبو جبل (GAP).",
  keywords: ["تدريب أونلاين", "مدرب شخصي", "محمد أبو جبل", "GAP", "كمال أجسام", "باقات تدريب الإمارات", "خسارة دهون", "بناء عضلات"],
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
    title: "MOHAMED ABO GAPEL (GAP) | مدرب كمال أجسام وتغذية رياضية",
    description: "جسمك مش صدفة.. إبنه بحساب. برامج تدريب وتغذية مخصصة 100% بدون نسخ ولصق.",
    locale: "ar_AE",
    type: "website",
    images: [
      {
        url: "https://res.cloudinary.com/dv3f33hvk/image/upload/v1789429102/WhatsApp_Image_2026-09-15_at_02.19_1_xeoslu.png",
        width: 1200,
        height: 630,
        alt: "MOHAMED ABO GAPEL (GAP)",
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
