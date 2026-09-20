export interface PricingPackage {
  id: string;
  name: string;
  tier: "SMART" | "VIP" | "ELITE" | "STARTER";
  duration: string;
  durationMonths: number;
  totalPriceAED: number;
  monthlyPriceAED: number;
  deliveryTime?: string;
  isPopular?: boolean;
  badge?: string;
  url: string;
  urlEGP?: string;
  urlUSD?: string;
  features: string[];
  featuresEn?: string[];
}

export const SITE_CONFIG = {
  coachName: "GAP",
  brandName: "GAP COACHING",
  monogram: "GAP",
  coachTitle: "مدرب كمال أجسام وتغذية رياضية معتمد",
  shortBio: "تدريب أونلاين برايفت مبني علمياً على جسمك وهدفك — تغذية، تمرين، ومتابعة مباشرة 1:1.",
  currency: "AED",
  currencyArabic: "د.إ",
  
  socialLinks: {
    facebook: "https://www.facebook.com/profile.php?id=61594500778140",
    instagram: "https://www.instagram.com/mahmoudabogabl?stkn=MTMyaXJjMWhvbTBvaw%3D%3D&utm_source=qr",
  },
  
  // 📸 ضع روابط صور الكابتن هنا عند توفرها (يدعم روابط خارجية https:// أو مسارات محلية /images/coach.png)
  coachImages: {
    hero: "",
    services: "",
    about: "",
  },

  stats: {
    experienceYears: "3",
    clientsWorldWide: "963",
    customPrograms: "523",
    commitmentRate: "86%",
    aboutClients: "963+",
    aboutExperience: "3+",
    aboutCustom: "100%",
    aboutDirectSupport: "1:1",
  },

  packages: [
    {
      id: "1-month",
      name: "باقة 1 شهر",
      tier: "STARTER",
      duration: "1 شهر",
      durationMonths: 1,
      totalPriceAED: 500,
      monthlyPriceAED: 500,
      isPopular: false,
      badge: "البداية السريعة",
      url: "https://bolder.fit/ar/coaches/cmtngi2yg01msark1butcitpt/programs/4464bb30-e09a-4922-87ac-801b3a2effa4",
      urlEGP: "https://bolder.fit/en/coaches/cmtngi2yg01msark1butcitpt/programs/8102db1d-b88e-4f53-bbe8-c6d7b71dd5c0",
      urlUSD: "https://bolder.fit/en/coaches/cmtngi2yg01msark1butcitpt/programs/a9ef1ae4-b532-4a50-8501-1df8f9986a9c",
      features: [
        "خطة التغذية",
        "خطة التدريب",
        "ملاحظة أسبوعية (Weekly Check-in عن طريق الأبلكيشن)",
        "الدعم والرد على الاستفسارات في الشات"
      ],
      featuresEn: [
        "Custom Nutrition Plan",
        "Custom Training Program",
        "Weekly Check-in via App",
        "Chat Support & Q&A"
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
      isPopular: false,
      badge: "الأكثر اختياراً",
      url: "https://bolder.fit/ar/coaches/cmtngi2yg01msark1butcitpt/programs/363f852f-634e-471d-b45c-e279bbb8e29a",
      urlEGP: "https://bolder.fit/en/coaches/cmtngi2yg01msark1butcitpt/programs/204e2d42-f8a8-4884-ae5e-e8f8a6f83dfb",
      urlUSD: "https://bolder.fit/en/coaches/cmtngi2yg01msark1butcitpt/programs/50c340b1-93e7-4fbd-98a3-ce9362a6cd4e",
      features: [
        "ملاحظة أسبوعية",
        "خطة التغذية",
        "خطة التدريب",
        "ردود فورية",
        "تقييم تكنيك التمارين بالفيديو (Form Check)",
        "دعم وشات للتواصل"
      ],
      featuresEn: [
        "Weekly Progress Review",
        "Custom Nutrition Plan",
        "Custom Training Program",
        "Instant Responses",
        "Video Exercise Technique (Form Check)",
        "Dedicated Chat & Support"
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
      isPopular: true,
      badge: "الأكثر طلباً 🔥",
      url: "https://bolder.fit/ar/coaches/cmtngi2yg01msark1butcitpt/programs/2c9e21b3-42ef-494f-8c00-7ce33f6ea593",
      urlEGP: "https://bolder.fit/en/coaches/cmtngi2yg01msark1butcitpt/programs/798a978e-674f-48a9-b4fe-945195e4af13",
      urlUSD: "https://bolder.fit/en/coaches/cmtngi2yg01msark1butcitpt/programs/0b5e851c-80ad-43f7-b608-3af5b990f67c",
      features: [
        "ملاحظة يومية",
        "ملاحظة أسبوعية",
        "خطة التدريب",
        "ردود فورية",
        "خطة التغذية",
        "مكالمة فديو شهرية"
      ],
      featuresEn: [
        "Daily Check-in & Notes",
        "Weekly Progress Review",
        "Custom Training Program",
        "Instant Responses",
        "Custom Nutrition Plan",
        "Monthly Video Call"
      ]
    },
    {
      id: "1-year",
      name: "باقة 12 شهر (ELITE)",
      tier: "ELITE",
      duration: "12 شهر (1 سنة)",
      durationMonths: 12,
      totalPriceAED: 3600,
      monthlyPriceAED: 300,
      isPopular: false,
      badge: "أعلى توفير 🏆",
      url: "https://bolder.fit/ar/coaches/cmtngi2yg01msark1butcitpt/programs/3324533d-0b7d-4daa-bea7-c56aecc85ffd",
      urlEGP: "https://bolder.fit/en/coaches/cmtngi2yg01msark1butcitpt/programs/31de3648-d568-4e0a-946e-9f4125d94874",
      urlUSD: "https://bolder.fit/en/coaches/cmtngi2yg01msark1butcitpt/programs/dee1da12-ef18-4b6d-8163-b04228dbbfac",
      features: [
        "ملاحظة يومية",
        "ملاحظة أسبوعية",
        "شهادة إتمام",
        "ردود فورية",
        "خطة التغذية",
        "خطة التدريب",
        "مكالمات شهرية ومتابعة دقيقة لأسلوب الحياة",
        "مكالمات استشارية شهرية"
      ],
      featuresEn: [
        "Daily Check-in & Notes",
        "Weekly Progress Review",
        "Certificate of Completion",
        "Instant Responses",
        "Custom Nutrition Plan",
        "Custom Training Program",
        "Monthly Coaching Calls & Lifestyle Audit",
        "Monthly Advisory Consultation Calls"
      ]
    }
  ] as PricingPackage[],

  comparisonRows: [
    { title: "خطة تغذية مخصصة", starter: true, smart: true, vip: true, elite: true },
    { title: "برنامج تدريبي مخصص", starter: true, smart: true, vip: true, elite: true },
    { title: "إرشادات المكملات", starter: true, smart: true, vip: true, elite: true },
    { title: "متابعة يومية مباشرة 1:1", starter: false, smart: true, vip: true, elite: true },
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
      a: "المتابعة بتتم بشكل مباشر واحترافي عبر تطبيق Bolder Fit معايا شخصياً، بنراجع التطور وتكنيك التمارين أسبوعياً."
    },
    {
      q: "هل أحتاج لمكملات غذائية معينة؟",
      a: "المكملات ليست إلزامية؛ الأساس هو الأكل الطبيعي ونحدد المكملات فقط حسب ميزانيتك واحتياجك."
    },
    {
      q: "كيف يتم استلام وتحديث البرامج؟",
      a: "بعد ملء استمارة التقييم، يتم تصميم الخطة الكاملة وإرسالها لك خلال مدة التسليم المحددة وتحديثها دورياً على التطبيق."
    },
    {
      q: "ما هي طرق الدفع المتاحة بالدرهم الإماراتي؟",
      a: "متاح الدفع بسهولة وأمان بالبطاقات الائتمانية وفيزا/ماستركارد وأبل باي مباشرة."
    }
  ]
};
