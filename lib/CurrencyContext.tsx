"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { useLanguage } from "./LanguageContext";

export type CurrencyType = "AED" | "USD" | "EGP";

export interface CurrencyConfig {
  code: CurrencyType;
  symbolAr: string;
  symbolEn: string;
  nameAr: string;
  nameEn: string;
  flag: string;
}

export const CURRENCY_CONFIGS: Record<CurrencyType, CurrencyConfig> = {
  AED: {
    code: "AED",
    symbolAr: "د.إ",
    symbolEn: "AED",
    nameAr: "درهم إماراتي",
    nameEn: "UAE Dirham",
    flag: "🇦🇪",
  },
  USD: {
    code: "USD",
    symbolAr: "$",
    symbolEn: "$",
    nameAr: "دولار أمريكي",
    nameEn: "US Dollar",
    flag: "🇺🇸",
  },
  EGP: {
    code: "EGP",
    symbolAr: "ج.م",
    symbolEn: "EGP",
    nameAr: "جنيه مصري",
    nameEn: "Egyptian Pound",
    flag: "🇪🇬",
  },
};

// Exact, professional prices for each package across all 3 currencies
export const PACKAGE_PRICING_TABLE: Record<
  string,
  Record<CurrencyType, { total: number; monthly: number }>
> = {
  "1-month": {
    AED: { total: 500, monthly: 500 },
    USD: { total: 40, monthly: 40 },
    EGP: { total: 700, monthly: 700 },
  },
  "3-months": {
    AED: { total: 1200, monthly: 400 },
    USD: { total: 105, monthly: 35 },
    EGP: { total: 1800, monthly: 600 },
  },
  "6-months": {
    AED: { total: 2100, monthly: 350 },
    USD: { total: 180, monthly: 30 },
    EGP: { total: 3300, monthly: 550 },
  },
  "1-year": {
    AED: { total: 3600, monthly: 300 },
    USD: { total: 300, monthly: 25 },
    EGP: { total: 6000, monthly: 500 },
  },
};

/**
 * Determine currency by ISO 2-letter country code:
 * - Egypt (EG) -> EGP
 * - UAE (AE) -> AED
 * - Europe / USA / Rest of the world -> USD
 */
function countryCodeToCurrency(countryCode: string): CurrencyType {
  const code = (countryCode || "").trim().toUpperCase();
  if (code === "EG") {
    return "EGP";
  }
  if (code === "AE") {
    return "AED";
  }
  return "USD";
}

/**
 * Instant zero-latency fallback using the browser's resolved timezone
 */
function getCurrencyByTimezone(): CurrencyType {
  try {
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || "";
    if (tz.includes("Cairo") || tz.includes("Egypt")) {
      return "EGP";
    }
    if (tz.includes("Dubai") || tz.includes("Muscat") || tz.includes("Abu_Dhabi")) {
      return "AED";
    }
    // Any European, American, or international timezone -> USD
    if (
      tz.includes("Europe") ||
      tz.includes("America") ||
      tz.includes("London") ||
      tz.includes("Berlin") ||
      tz.includes("Paris") ||
      tz.includes("Madrid") ||
      tz.includes("Rome")
    ) {
      return "USD";
    }
  } catch {
    // ignore
  }
  return "AED";
}

interface CurrencyContextType {
  currency: CurrencyType;
  setCurrency: (c: CurrencyType) => void;
  currencyConfig: CurrencyConfig;
  symbol: string;
  getPackagePrice: (packageId: string) => { total: number; monthly: number };
  formatAmount: (amount: number) => string;
  detectedCountryCode: string;
  isLocationConfirmed: boolean;
  confirmLocation: (c: CurrencyType) => void;
}

const CurrencyContext = createContext<CurrencyContextType>({
  currency: "AED",
  setCurrency: () => {},
  currencyConfig: CURRENCY_CONFIGS.AED,
  symbol: "د.إ",
  getPackagePrice: () => ({ total: 0, monthly: 0 }),
  formatAmount: (amount: number) => `${amount}`,
  detectedCountryCode: "EG",
  isLocationConfirmed: false,
  confirmLocation: () => {},
});

export function CurrencyProvider({ children }: { children: React.ReactNode }) {
  const [currency, setCurrencyState] = useState<CurrencyType>("AED");
  const [detectedCountryCode, setDetectedCountryCode] = useState<string>(() => {
    try {
      const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || "";
      if (tz.includes("Cairo") || tz.includes("Egypt")) return "EG";
      if (tz.includes("Dubai") || tz.includes("Muscat") || tz.includes("Abu_Dhabi")) return "AE";
    } catch {
      // ignore
    }
    return "EG";
  });
  const [isLocationConfirmed, setIsLocationConfirmed] = useState<boolean>(() => {
    try {
      return sessionStorage.getItem("gap_location_confirmed") === "true";
    } catch {
      return false;
    }
  });
  const { isAr } = useLanguage();

  useEffect(() => {
    // 1. Check if we already confirmed and saved the country's currency in this session
    try {
      const cached = sessionStorage.getItem("gap_detected_currency") as CurrencyType;
      const confirmed = sessionStorage.getItem("gap_location_confirmed") === "true";
      if (confirmed && cached && (cached === "AED" || cached === "USD" || cached === "EGP")) {
        setCurrencyState(cached);
        setIsLocationConfirmed(true);
        return;
      }
    } catch {
      // ignore
    }

    // 2. Immediate zero-latency fallback from resolved browser timezone
    const initialTzCurrency = getCurrencyByTimezone();
    setCurrencyState(initialTzCurrency);

    // 3. Fast asynchronous IP Geolocation detection
    let isCancelled = false;
    const detectLocation = async () => {
      try {
        const res = await fetch("https://api.country.is", {
          cache: "force-cache",
        });
        if (res.ok) {
          const data = await res.json();
          if (!isCancelled && data?.country) {
            setDetectedCountryCode(data.country);
            const detected = countryCodeToCurrency(data.country);
            setCurrencyState(detected);
            return;
          }
        }
      } catch {
        // First endpoint failed, try secondary fallback
      }

      // Secondary IP fallback endpoint
      try {
        const res2 = await fetch("https://ipwho.is/", {
          cache: "force-cache",
        });
        if (res2.ok) {
          const data2 = await res2.json();
          if (!isCancelled && data2?.country_code) {
            setDetectedCountryCode(data2.country_code);
            const detected2 = countryCodeToCurrency(data2.country_code);
            setCurrencyState(detected2);
          }
        }
      } catch {
        // Keep the timezone-detected currency
      }
    };

    detectLocation();

    return () => {
      isCancelled = true;
    };
  }, []);

  const confirmLocation = (c: CurrencyType) => {
    setCurrencyState(c);
    setIsLocationConfirmed(true);
    try {
      sessionStorage.setItem("gap_location_confirmed", "true");
      sessionStorage.setItem("gap_detected_currency", c);
    } catch {
      // ignore
    }
  };

  const setCurrency = (c: CurrencyType) => {
    setCurrencyState(c);
  };

  const currencyConfig = CURRENCY_CONFIGS[currency];
  const symbol = isAr ? currencyConfig.symbolAr : currencyConfig.symbolEn;

  const getPackagePrice = (packageId: string) => {
    const packagePrices = PACKAGE_PRICING_TABLE[packageId];
    if (packagePrices && packagePrices[currency]) {
      return packagePrices[currency];
    }
    return PACKAGE_PRICING_TABLE["6-months"].AED;
  };

  const formatAmount = (amount: number) => {
    return amount.toLocaleString();
  };

  return (
    <CurrencyContext.Provider
      value={{
        currency,
        setCurrency,
        currencyConfig,
        symbol,
        getPackagePrice,
        formatAmount,
        detectedCountryCode,
        isLocationConfirmed,
        confirmLocation,
      }}
    >
      {children}
    </CurrencyContext.Provider>
  );
}

export function useCurrency() {
  return useContext(CurrencyContext);
}

