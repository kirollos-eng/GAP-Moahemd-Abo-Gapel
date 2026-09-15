export interface PricingPackage {
  id: string;
  name: string;
  tier: "SMART" | "VIP" | "ELITE" | "STARTER";
  duration: string;
  durationMonths: number;
  totalPriceAED: number;
  monthlyPriceAED: number;
  deliveryTime: string;
  isPopular?: boolean;
  badge?: string;
  features: string[];
}

export const SITE_CONFIG = {
  coachName: "MOHAMED ABO GAPEL",
  monogram: "GAP",
  coachTitle: "مهندس يبني الأجسام بناء المشاريع",
  shortBio: "تدريب أونلاين متهندس على جسمك وهدفك — تغذية، تمرين، ومتابعة مباشرة.",
  whatsappNumber: "+971500000000",
  currency: "AED",
  currencyArabic: "د.إ",
  
  // 📸 ضع روابط صور الكابتن هنا عند توفرها (يدعم روابط خارجية https:// أو مسارات محلية /images/coach.png)
  coachImages: {
    hero: "",
    services: "",
    about: "",
  },

  stats: {
    experienceYears: "6+",
    clientsWorldWide: "1200+",
    customPrograms: "2500+",
    commitmentRate: "92%",
    aboutClients: "2000+",
    aboutExperience: "5+",
    aboutCustom: "100%",
    aboutDirectSupport: "1:1",
  },

  packages: [
    {
      id: "1-month",
      name: "باقة الشهر الواحد",
      tier: "STARTER",
      duration: "1 شهر",
      durationMonths: 1,
      totalPriceAED: 500,
      monthlyPriceAED: 500,
      deliveryTime: "تسليم خلال 72 ساعة",
      isPopular: false,
      badge: "البداية السريعة",
      features: [
        "خطة تغذية مخصصة",
        "برنامج تدريبي مخصص",
        "إرشادات المكملات",
        "متابعة دورية عبر واتساب",
        "مراجعة تكنيك التمارين"
      ]
    },
    {
      id: "3-months",
      name: "باقة 3 شهور (SMART)",
      tier: "SMART",
      duration: "3 شهور",
      durationMonths: 3,
      totalPriceAED: 1200,
      monthlyPriceAED: 400,
      deliveryTime: "تسليم خلال 72 ساعة",
      isPopular: false,
      badge: "الأكثر اختياراً",
      features: [
        "خطة تغذية مخصصة",
        "برنامج تدريبي مخصص",
        "إرشادات المكملات",
        "متابعة يومية عبر واتساب",
        "مراجعة فيديو أسبوعية"
      ]
    },
    {
      id: "6-months",
      name: "باقة 6 شهور (VIP)",
      tier: "VIP",
      duration: "6 شهور",
      durationMonths: 6,
      totalPriceAED: 2100,
      monthlyPriceAED: 350,
      deliveryTime: "تسليم خلال 48 ساعة",
      isPopular: true,
      badge: "الأكثر طلباً 🔥",
      features: [
        "خطة تغذية مخصصة",
        "برنامج تدريبي مخصص",
        "إرشادات المكملات",
        "متابعة يومية عبر واتساب",
        "مراجعة فيديو أسبوعية",
        "أولوية في المتابعة والدعم"
      ]
    },
    {
      id: "1-year",
      name: "باقة السنة الكاملة (ELITE)",
      tier: "ELITE",
      duration: "1 سنة (12 شهر)",
      durationMonths: 12,
      totalPriceAED: 3600,
      monthlyPriceAED: 300,
      deliveryTime: "تسليم في نفس اليوم",
      isPopular: false,
      badge: "أعلى توفير 🏆",
      features: [
        "خطة تغذية مخصصة",
        "برنامج تدريبي مخصص",
        "إرشادات المكملات",
        "متابعة يومية عبر واتساب",
        "مراجعة فيديو أسبوعية",
        "أولوية في المتابعة والدعم",
        "مكالمات متابعة دورية",
        "متابعة لتحسين الأداء",
        "تحليلات وتقارير دورية",
        "تحضير للبطولات"
      ]
    }
  ] as PricingPackage[],

  comparisonRows: [
    { title: "خطة تغذية مخصصة", starter: true, smart: true, vip: true, elite: true },
    { title: "برنامج تدريبي مخصص", starter: true, smart: true, vip: true, elite: true },
    { title: "إرشادات المكملات", starter: true, smart: true, vip: true, elite: true },
    { title: "متابعة يومية عبر واتساب", starter: false, smart: true, vip: true, elite: true },
    { title: "مراجعة فيديو أسبوعية", starter: false, smart: true, vip: true, elite: true },
    { title: "أولوية في المتابعة والدعم", starter: false, smart: false, vip: true, elite: true },
    { title: "مكالمات متابعة دورية", starter: false, smart: false, vip: false, elite: true },
    { title: "متابعة لتحسين الأداء", starter: false, smart: false, vip: false, elite: true },
    { title: "تحليلات وتقارير دورية", starter: false, smart: false, vip: false, elite: true },
    { title: "تحضير للبطولات", starter: false, smart: false, vip: false, elite: true },
  ],

  faqs: [
    {
      q: "هل البرامج مناسبة للمبتدئين؟",
      a: "نعم، كل برنامج يصمم بالكامل من الصفر بما يتناسب مع مستواك الحالي سواء كنت مبتدئ أو متقدم."
    },
    {
      q: "كيف تتم المتابعة والدعم؟",
      a: "المتابعة بتكون مباشرة عبر واتساب معايا شخصياً، بنراجع التطور وتكنيك التمارين أسبوعياً."
    },
    {
      q: "هل أحتاج لمكملات غذائية معينة؟",
      a: "المكملات ليست إلزامية؛ الأساس هو الأكل الطبيعي ونحدد المكملات فقط حسب ميزانيتك واحتياجك."
    },
    {
      q: "كيف يتم استلام وتحديث البرامج؟",
      a: "بعد ملء استمارة التقييم، يتم تصميم الخطة الكاملة وإرسالها لك خلال مدة التسليم المحددة وتحديثها دورياً."
    },
    {
      q: "ما هي طرق الدفع المتاحة بالدرهم الإماراتي؟",
      a: "متاح الدفع بسهولة عبر التحويل البنكي داخل الإمارات أو بطاقات فيزا/ماستركارد وأبل باي."
    }
  ]
};
