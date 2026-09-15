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

// Exact, professional rounded prices for each package across all 3 currencies
export const PACKAGE_PRICING_TABLE: Record<
  string,
  Record<CurrencyType, { total: number; monthly: number }>
> = {
  "1-month": {
    AED: { total: 500, monthly: 500 },
    USD: { total: 135, monthly: 135 },
    EGP: { total: 6750, monthly: 6750 },
  },
  "3-months": {
    AED: { total: 1200, monthly: 400 },
    USD: { total: 325, monthly: 108 },
    EGP: { total: 16200, monthly: 5400 },
  },
  "6-months": {
    AED: { total: 2100, monthly: 350 },
    USD: { total: 570, monthly: 95 },
    EGP: { total: 28350, monthly: 4725 },
  },
  "1-year": {
    AED: { total: 3600, monthly: 300 },
    USD: { total: 980, monthly: 82 },
    EGP: { total: 48600, monthly: 4050 },
  },
};

interface CurrencyContextType {
  currency: CurrencyType;
  setCurrency: (c: CurrencyType) => void;
  currencyConfig: CurrencyConfig;
  symbol: string;
  getPackagePrice: (packageId: string) => { total: number; monthly: number };
  formatAmount: (amount: number) => string;
}

const CurrencyContext = createContext<CurrencyContextType>({
  currency: "AED",
  setCurrency: () => {},
  currencyConfig: CURRENCY_CONFIGS.AED,
  symbol: "د.إ",
  getPackagePrice: () => ({ total: 0, monthly: 0 }),
  formatAmount: (amount: number) => `${amount}`,
});

export function CurrencyProvider({ children }: { children: React.ReactNode }) {
  const [currency, setCurrencyState] = useState<CurrencyType>("AED");
  const { isAr } = useLanguage();

  useEffect(() => {
    const saved = localStorage.getItem("gap_currency") as CurrencyType;
    if (saved && (saved === "AED" || saved === "USD" || saved === "EGP")) {
      setCurrencyState(saved);
    }
  }, []);

  const setCurrency = (c: CurrencyType) => {
    setCurrencyState(c);
    try {
      localStorage.setItem("gap_currency", c);
    } catch {
      // ignore
    }
  };

  const currencyConfig = CURRENCY_CONFIGS[currency];
  const symbol = isAr ? currencyConfig.symbolAr : currencyConfig.symbolEn;

  const getPackagePrice = (packageId: string) => {
    const packagePrices = PACKAGE_PRICING_TABLE[packageId];
    if (packagePrices && packagePrices[currency]) {
      return packagePrices[currency];
    }
    // Fallback to AED
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
      }}
    >
      {children}
    </CurrencyContext.Provider>
  );
}

export function useCurrency() {
  return useContext(CurrencyContext);
}
