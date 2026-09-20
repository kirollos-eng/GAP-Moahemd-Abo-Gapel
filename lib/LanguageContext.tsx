"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export type Language = "ar" | "en";

interface LanguageContextType {
  lang: Language;
  toggleLang: () => void;
  setLang: (lang: Language) => void;
  t: (key: string) => string;
  isAr: boolean;
}

export const translations = {
  ar: {
    // Nav
    nav_about: "عن الكابتن",
    nav_certificates: "الشهادات والاعتمادات",
    nav_process: "طريقة العمل",
    nav_services: "الخدمات والمميزات",
    nav_packages: "الباقات",
    nav_faq: "الأسئلة",
    nav_cta: "ابدأ دلوقتي",
    
    // Hero
    hero_title_1: "استثمر في جسمك..",
    hero_title_2: "ببرنامج تمرين وتغذية متفصل من الصفر عشانك.",
    hero_title_3: "",
    hero_subtitle: "تدريب أونلاين برايفت مبني علمياً على جسمك وهدفك — تغذية، تمرين، ومتابعة مباشرة 1:1.",
    hero_cta_primary: "اختار باقتك",
    hero_cta_secondary: "اعرف طريقتي",
    hero_stat_1_val: "3",
    hero_stat_1_lbl: "سنوات خبرة",
    hero_stat_2_val: "963",
    hero_stat_2_lbl: "عملاء حول العالم",
    hero_stat_3_val: "523",
    hero_stat_3_lbl: "برامج مخصصة",
    hero_stat_4_val: "86 %",
    hero_stat_4_lbl: "نسبة الالتزام",
    hero_stat_quote_1: "مش بس تمرين.",
    hero_stat_quote_2: "دي طريقة حياة.",

    // About Coach (Section 2)
    about_badge: "ABOUT THE COACH",
    about_stat_1_val: "963+",
    about_stat_1_lbl: "عميل حول العالم",
    about_stat_2_val: "3+",
    about_stat_2_lbl: "سنين خبرة",
    about_stat_3_val: "100%",
    about_stat_3_lbl: "برامج مخصصة",
    about_stat_4_val: "1:1",
    about_stat_4_lbl: "متابعة مباشرة",
    about_title_1: "تدريب مبني على أسس علمية معتمدة",
    about_title_2: "بدون عشوائية أو تجارب",
    about_p_1: "كل برنامج هنا مش مجرد تمرين وخلاص.",
    about_p_2: "ده خطة محسوبة على هدفك، ظروفك، وجسمك.",
    about_p_3: "مفيش نسخ ولصق، مفيش حلول عامة.",
    about_p_4: "هنا كل تفصيلة معمولة ومحسوبة بالكامل علشانك.",
    about_p1: "كل برنامج هنا مش مجرد تمرين وخلاص. ده خطة محسوبة على هدفك، ظروفك، وجسمك.",
    about_p2: "مفيش نسخ ولصق، مفيش حلول عامة. هنا كل تفصيلة معمولة ومحسوبة بالكامل علشانك.",
    about_stat_clients: "عميل حول العالم",
    about_stat_exp: "سنين خبرة",
    about_stat_custom: "برامج مخصصة",
    about_stat_direct: "متابعة مباشرة",

    // Certifications & Accreditations Section
    cert_badge: "ACCREDITATIONS & CERTIFICATIONS",
    cert_title_1: "مدرب معتمد دولياً",
    cert_title_2: "من أكبر المنظمات الرياضية والطبية",
    cert_subtitle: "جميع خطط التمرين والتغذية مبنية على أحدث المعايير العلمية المعتمدة لضمان تحقيق أقصى تطور بدني بأعلى درجات الأمان والسلامة.",
    cert_verified_tag: "اعتماد رسمي موثق",
    cert_verified_badge: "معتمد رسمياً",
    cert_zoom_hint: "تكبير الشهادة",
    cert_coach_name_cert: "اسم المدرب في الشهادة:",
    cert_coach_name_val: "GAP (GAP COACHING)",
    cert_close_preview: "إغلاق المعاينة",

    // NASM
    cert_nasm_title: "الشهادة الدولية للمدرب الشخصي (CPT)",
    cert_nasm_org: "الأكاديمية الوطنية للطب الرياضي (NASM) — الولايات المتحدة",
    cert_nasm_desc: "الاعتماد الأقوى عالمياً في تخطيط الأحمال التدريبية، الميكانيكا الحيوية للتمارين، وتصميم برامج التضخيم والتنشيف وفق أحدث الأبحاث الرياضية.",
    cert_nasm_id_lbl: "رقم الشهادة / الترخيص:",
    cert_nasm_id_val: "1261862949",
    cert_nasm_expiry_lbl: "صلاحية الاعتماد:",
    cert_nasm_expiry_val: "سارية حتى 31 أغسطس 2028",
    cert_nasm_tag: "NASM-CPT • USA ACCREDITED",

    // BLS
    cert_bls_title: "دعم الحياة الأساسي والإنعاش القلبي (BLS\u00A0Provider)",
    cert_bls_org: "جمعية القلب الأمريكية (American Heart Association — AHA)",
    cert_bls_desc: "اعتماد دولي متقدم في الإنعاش القلبي الرئوي (CPR)، واستخدام أجهزة الصدمات (AED)، وتأمين الرياضي طبياً أثناء الأحمال البدنية الشاقة والجهد المرتفع.",
    cert_bls_id_lbl: "كود البطاقة الإلكترونية (eCard):",
    cert_bls_id_val: "271074309059",
    cert_bls_expiry_lbl: "صلاحية الاعتماد:",
    cert_bls_expiry_val: "سارية حتى يونيو 2028",
    cert_bls_tag: "AHA • CPR & AED CERTIFIED",

    // Trust box
    cert_trust_title: "ليه تتدرب مع مدرب معتمد دولياً؟",
    cert_trust_desc: "الفرق بين مدرب معتمد ومدرب هاوي هو أن جسمك وصحتك مش حقل تجارب. كل تكرار، كل جرام بروتين، وكل أسبوع تمرين محسوب بيولوجياً لتحقيق نتيجة مستدامة ومبهرة بدون أي إصابات.",
    cert_trust_point1: "تطبيق علمي دقيق لمنهجية NASM العالمية لتطوير القوة والبناء العضلي",
    cert_trust_point2: "سلامة قلبية وجسدية 100% معتمدة من جمعية القلب الأمريكية AHA",
    cert_trust_point3: "متابعة أسبوعية واحترافية مدعومة بتطبيق Bolder Fit",

    // The Process
    process_badge: "THE PROCESS",
    step_01_num: "01",
    step_01_title: "اختار باقتك",
    step_01_desc: "اختر الباقة اللي تناسب هدفك ونمط حياتك.",
    step_02_num: "02",
    step_02_title: "ادفع وارفع الإيصال",
    step_02_desc: "سدد بسهولة وارفع الإيصال لتأكيد الاشتراك.",
    step_03_num: "03",
    step_03_title: "املأ فورم التقييم",
    step_03_desc: "جاوب على بعض الأسئلة علشان نقدر نحلل حالتك بدقة.",
    step_04_num: "04",
    step_04_title: "استلم برنامجك",
    step_04_desc: "استلم برنامجك المخصص وابدأ رحلتك بخطة واضحة.",
    process_footer_1: "مش بس برنامج.",
    process_footer_2: "دي منظومة متكاملة",

    // Services (Section 3)
    services_badge: "SERVICES",
    services_subbadge: "BUILT AROUND YOU",
    service_01_title: "خطة تغذية",
    service_01_highlight: "مرنة ومحسوبة",
    service_01_spec_main: "حساب دقيق للسعرات والماكروز",
    service_01_spec_sub: "وجبات مرنة تناسب أسلوب حياتك بدون حرمان",
    service_01_pt_1: "تحديد احتياجك من السعرات بدقة.",
    service_01_pt_2: "توزيع الماكروز بما يناسب هدفك ونوع جسمك.",
    service_01_pt_3: "خيارات غذائية مرنة تراعى نمط حياتك.",
    
    service_02_title: "برنامج تدريبي",
    service_02_highlight: "علمي ومخصص",
    service_02_highlight_1: "على أحدث",
    service_02_highlight_2: "الأسس العلمية",
    service_02_spec_main: "تمارين مصممة لهدفك ومستواك",
    service_02_spec_sub: "زيادة أوزان وتطوير دوري مستمر لنتائجك",
    service_02_pt_1: "تصميم برنامج مخصص لهدفك ومستواك.",
    service_02_pt_2: "حجم تدريب مناسب لتقدم مستمر وآمن.",
    service_02_pt_3: "تطوير البرنامج بشكل دوري حسب نتائجك.",
    
    service_03_title: "متابعة وتواصل",
    service_03_highlight: "معايا أنا شخصياً 1:1",
    service_03_highlight_1: "حقيقية — معايا",
    service_03_highlight_2: "أنا شخصياً",
    service_03_spec_main: "متابعة يومية مباشرة 1:1",
    service_03_spec_sub: "تصحيح تكنيك التمارين بالفيديو أول بأول",
    service_03_pt_1: "متابعة يومية وتواصل مباشر 1:1.",
    service_03_pt_2: "مراجعة فيديوهات تمرينك وتحليل التكنيك.",
    service_03_pt_3: "تعديلات فورية لأي تحدي أو مشكلة.",
    service_03_pt_4: "أثر 1:1 coaching باهتمام كامل.",

    services_promise_1: "OUR PROMISE",
    services_promise_2: "NO TEMPLATES.",
    services_promise_3: "JUST RESULTS.",
    services_copypaste_sub: "كل برنامج بيتبنى من الصفر ليك أنت — مفيش قوالب جاهزة، مفيش نسخ ولصق.",

    // Packages / Pricing (Section 4)
    pricing_delivery_smart: "تسليم خلال 72 ساعة",
    pricing_delivery_vip: "تسليم خلال 48 ساعة",
    pricing_delivery_elite: "تسليم في نفس اليوم",
    pricing_dur_3mo: "3 شهور",
    pricing_dur_6mo: "6 شهور",
    pricing_dur_12mo: "12 شهر",
    pricing_dur_1mo: "1 شهر",
    pricing_currency: "د.إ",
    pricing_cta: "اختار الباقة",
    pricing_availability: "متبقي 3 أماكن فقط لهذا الشهر",
    pricing_per_month: "شهرياً",
    
    // Comparison Table
    table_title: "مقارنة سريعة",
    row_nutrition: "خطة تغذية مخصصة",
    row_training: "برنامج تدريبي مخصص",
    row_supplements: "إرشادات المكملات",
    row_daily_whatsapp: "متابعة يومية مباشرة 1:1",
    row_weekly_video: "مراجعة فيديو أسبوعية",
    row_priority_support: "أولوية في المتابعة والدعم",
    row_calls: "مكالمات متابعة دورية",
    row_performance: "متابعة لتحسين الأداء",
    row_reports: "تحليلات وتقارير دورية",
    row_prep: "تحضير للبطولات",

    // FAQ
    faq_title: "الأسئلة الشائعة",
    faq_1_q: "هل البرامج مناسبة للمبتدئين ولا للمحترفين بس؟",
    faq_1_a: "أكيد مناسبة لكل المستويات! كل برنامج بيتصمم من الصفر بناءً على مستواك الحالي وهدفك، وبأحدث الأسس والشهادات العلمية المعتمدة للتدريب الرياضي (NASM) عشان تضمن إنك بتتطور بأمان وبدون إصابات وبأعلى كفاءة.",
    faq_2_q: "إزاي بتتم المتابعة والتواصل معاك؟",
    faq_2_a: "المتابعة بتتم بشكل احترافي ومنظم جداً عن طريق تطبيق Bolder Fit. هتقدر تسجل عليه تمارينك، أوزانك، وتطورك أسبوعياً، بالإضافة لوجود شات مستمر بينا للرد على أي استفسار وتعديل الخطة وقت الحاجة.",
    faq_3_q: "هل لازم أكون مشترك في جيم عشان أبدأ؟",
    faq_3_a: "لا خالص! خطة التدريب بتتفصل حسب المتاح عندك بالكامل؛ سواء بتتمرن في جيم مجهز، أو بتتمرن في البيت بأدوات بسيطة أو حتى بوزن الجسم. الخطة هتكون متفصلة عشان توصلك لهدفك بأي إمكانيات متاحة.",
    faq_4_q: "إمتى هبدأ أشوف تغيير حقيقي في جسمي؟",
    faq_4_a: "النتيجة بتعتمد بشكل أساسي على التزامك بخطة التدريب والتغذية. لكن بشكل عام ومع الالتزام التام، هتبدأ تلاحظ تطور واضح وملموس في مقاساتك، طاقتك، وشكل عضلاتك خلال أول 3 إلى 4 أسابيع.",
    faq_5_q: "إزاي أبدأ واشترك؟ وهل التفعيل بياخد وقت؟",
    faq_5_a: "الموضوع بيتم في لحظتها! بمجرد ما تختار الباقة المناسبة لك وتضغط 'ابدأ الآن'، هتكّمل خطوة الاشتراك والتواصل، وحسابك على تطبيق Bolder Fit هيتفعل تلقائياً عشان نبدأ رحلة التغيير فوراً.",

    // Modal
    modal_title: "تأكيد الاشتراك في الباقة",
    modal_subtitle: "سجل بياناتك وسيتم تفعيل حسابك والبدء فوراً.",
    modal_name_lbl: "الاسم بالكامل:",
    modal_phone_lbl: "رقم الهاتف:",
    modal_goal_lbl: "الهدف الرياضي:",
    modal_cta: "تأكيد والاشتراك الآن",
    modal_close: "إغلاق",
    
    // Footer
    footer_currency_notice: "جميع الأسعار المعروضة بالدرهم الإماراتي (AED / د.إ)",
    footer_rights: "جميع الحقوق محفوظة."
  },
  en: {
    // Nav
    nav_about: "About Coach",
    nav_certificates: "Certifications",
    nav_process: "The Process",
    nav_services: "Services & Features",
    nav_packages: "Packages",
    nav_faq: "FAQ",
    nav_cta: "Get Started",

    // Hero
    hero_title_1: "INVEST IN YOUR BODY..",
    hero_title_2: "WITH A FULLY CUSTOM TRAINING & NUTRITION PLAN.",
    hero_title_3: "",
    hero_subtitle: "Evidence-based online coaching tailored to your body & goal — nutrition, training, and 1:1 direct support.",
    hero_cta_primary: "CHOOSE YOUR PLAN",
    hero_cta_secondary: "LEARN MY METHOD",
    hero_stat_1_val: "3",
    hero_stat_1_lbl: "Years Experience",
    hero_stat_2_val: "963",
    hero_stat_2_lbl: "Global Clients",
    hero_stat_3_val: "523",
    hero_stat_3_lbl: "Custom Programs",
    hero_stat_4_val: "86 %",
    hero_stat_4_lbl: "Commitment Rate",
    hero_stat_quote_1: "Not just training.",
    hero_stat_quote_2: "It's a lifestyle.",

    // About Coach (Section 2)
    about_badge: "ABOUT THE COACH",
    about_stat_1_val: "963+",
    about_stat_1_lbl: "Clients Worldwide",
    about_stat_2_val: "3+",
    about_stat_2_lbl: "Years Exp",
    about_stat_3_val: "100%",
    about_stat_3_lbl: "Custom Plans",
    about_stat_4_val: "1:1",
    about_stat_4_lbl: "Direct Support",
    about_title_1: "EVIDENCE-BASED COACHING",
    about_title_2: "ZERO GUESSWORK, REAL PROGRESS",
    about_p_1: "Every program here isn't just another workout routine.",
    about_p_2: "It's a calculated blueprint tailored to your goals, life, and body.",
    about_p_3: "No templates, no copy-pasting, no generic solutions.",
    about_p_4: "Every single detail is custom-built specifically for you.",
    about_p1: "Every program here isn't just another workout routine. It's a calculated blueprint tailored to your goals, life, and body.",
    about_p2: "No templates, no copy-pasting, no generic solutions. Every single detail is custom-built specifically for you.",
    about_stat_clients: "Clients Worldwide",
    about_stat_exp: "Years Exp",
    about_stat_custom: "Custom Plans",
    about_stat_direct: "Direct Support",

    // Certifications & Accreditations Section
    cert_badge: "ACCREDITATIONS & CERTIFICATIONS",
    cert_title_1: "INTERNATIONALLY CERTIFIED COACH",
    cert_title_2: "ACCREDITED BY TOP GLOBAL BODIES",
    cert_subtitle: "All coaching blueprints and nutrition protocols are built to world-standard medical and sports science criteria to ensure maximum athletic progression with zero compromise on safety.",
    cert_verified_tag: "OFFICIALLY VERIFIED & ACCREDITED",
    cert_verified_badge: "OFFICIALLY ACCREDITED",
    cert_zoom_hint: "Enlarge Certificate",
    cert_coach_name_cert: "Name on Certificate:",
    cert_coach_name_val: "GAP (GAP COACHING)",
    cert_close_preview: "Close Preview",

    // NASM
    cert_nasm_title: "International Certified Personal Trainer (CPT)",
    cert_nasm_org: "National Academy of Sports Medicine (NASM) — USA",
    cert_nasm_desc: "The gold standard worldwide for progressive overload programming, functional biomechanics, muscle hypertrophy, and evidence-based conditioning.",
    cert_nasm_id_lbl: "Certificate / License No:",
    cert_nasm_id_val: "1261862949",
    cert_nasm_expiry_lbl: "Accreditation Validity:",
    cert_nasm_expiry_val: "Valid through August 31, 2028",
    cert_nasm_tag: "NASM-CPT • USA ACCREDITED",

    // BLS
    cert_bls_title: "Basic Life Support Provider (BLS — CPR & AED)",
    cert_bls_org: "American Heart Association (AHA)",
    cert_bls_desc: "Advanced international qualification in cardiopulmonary resuscitation (CPR), automated external defibrillator (AED) operation, and emergency safety protocols during high-intensity training.",
    cert_bls_id_lbl: "eCard Verification Code:",
    cert_bls_id_val: "271074309059",
    cert_bls_expiry_lbl: "Accreditation Validity:",
    cert_bls_expiry_val: "Valid through June 2028",
    cert_bls_tag: "AHA • CPR & AED CERTIFIED",

    // Trust box
    cert_trust_title: "Why Training with an Internationally Certified Coach Matters",
    cert_trust_desc: "The difference between guesswork and an accredited scientific coach is that your health is never an experiment. Every set, rep, calorie, and macro is calculated and programmed for real, sustainable results without injuries.",
    cert_trust_point1: "Strict evidence-based science from NASM without random trial and error",
    cert_trust_point2: "Cardiovascular safety & proper physiological strain protocols (AHA certified)",
    cert_trust_point3: "Professional weekly tracking and analytics powered by the Bolder Fit app",

    // The Process
    process_badge: "THE PROCESS",
    step_01_num: "01",
    step_01_title: "Choose Your Plan",
    step_01_desc: "Select the package tailored to your goals and lifestyle.",
    step_02_num: "02",
    step_02_title: "Pay & Upload Receipt",
    step_02_desc: "Complete your payment easily and submit your receipt for instant confirmation.",
    step_03_num: "03",
    step_03_title: "Complete Assessment",
    step_03_desc: "Answer the intake questions so we can design your precise custom blueprint.",
    step_04_num: "04",
    step_04_title: "Receive Your Plan",
    step_04_desc: "Receive your tailored program and start your transformation with 100% clarity.",
    process_footer_1: "NOT JUST A PROGRAM.",
    process_footer_2: "A COMPLETE SYSTEM.",

    // Services (Section 3)
    services_badge: "SERVICES",
    services_subbadge: "BUILT AROUND YOU",
    service_01_title: "Nutrition Plan",
    service_01_highlight: "Flexible & Calculated",
    service_01_spec_main: "Precise Calorie & Macro Blueprint",
    service_01_spec_sub: "Flexible meals tailored to your lifestyle",
    service_01_pt_1: "Accurate calorie requirement calculation.",
    service_01_pt_2: "Macro distribution tailored to your body type and goal.",
    service_01_pt_3: "Flexible meal plans fitting your daily schedule.",

    service_02_title: "Training Program",
    service_02_highlight: "Scientific & Custom",
    service_02_highlight_1: "Built On Latest",
    service_02_highlight_2: "Scientific Principles",
    service_02_spec_main: "Built for your goals and fitness level",
    service_02_spec_sub: "Progressive overload & periodic updates",
    service_02_pt_1: "Custom plan built for your goals and fitness level.",
    service_02_pt_2: "Optimal volume for progressive, injury-free overload.",
    service_02_pt_3: "Continuous adjustments based on real weekly results.",

    service_03_title: "Direct Support",
    service_03_highlight: "With Me Personally 1:1",
    service_03_highlight_1: "Real Coaching — With Me",
    service_03_highlight_2: "Personally",
    service_03_spec_main: "Daily direct 1:1 communication",
    service_03_spec_sub: "Instant 1:1 video form corrections",
    service_03_pt_1: "Daily direct 1:1 communication.",
    service_03_pt_2: "Video exercise form checks and feedback.",
    service_03_pt_3: "Instant adjustments for any travel, injury, or schedule challenge.",
    service_03_pt_4: "True 1:1 dedication to every detail.",

    services_promise_1: "OUR PROMISE",
    services_promise_2: "NO TEMPLATES.",
    services_promise_3: "JUST RESULTS.",
    services_copypaste_sub: "Every program is built from scratch for you — no templates, zero copy-paste.",

    // Packages / Pricing (Section 4)
    pricing_delivery_smart: "Delivery within 72h",
    pricing_delivery_vip: "Delivery within 48h",
    pricing_delivery_elite: "Same-Day Delivery",
    pricing_dur_3mo: "3 Months",
    pricing_dur_6mo: "6 Months",
    pricing_dur_12mo: "12 Months",
    pricing_dur_1mo: "1 Month",
    pricing_currency: "AED",
    pricing_cta: "Choose Plan",
    pricing_availability: "Only 3 spots remaining this month",
    pricing_per_month: "/ month",

    // Comparison Table
    table_title: "Quick Comparison",
    row_nutrition: "Custom Nutrition Plan",
    row_training: "Custom Training Program",
    row_supplements: "Supplements Protocol",
    row_daily_whatsapp: "Daily 1:1 Direct Support",
    row_weekly_video: "Weekly Video Review",
    row_priority_support: "Priority Support & Response",
    row_calls: "Regular Coaching Calls",
    row_performance: "Performance Optimization",
    row_reports: "Periodic Reports & Analytics",
    row_prep: "Contest / Photoshoot Prep",

    // FAQ
    faq_title: "Frequently Asked Questions",
    faq_1_q: "Are the programs suitable for beginners or only advanced athletes?",
    faq_1_a: "Absolutely suitable for all levels! Every program is built from scratch tailored to your current level and goals, built on certified scientific principles (NASM) to guarantee safe, optimal, and injury-free progression.",
    faq_2_q: "How does follow-up and communication work?",
    faq_2_a: "Everything is organized and tracked professionally through the Bolder Fit app. You can log your workouts, track weekly progressive overload, alongside ongoing direct chat for questions and timely plan adjustments.",
    faq_3_q: "Do I need a gym membership to start?",
    faq_3_a: "Not at all! Your training plan is custom-built around what is available to you: whether a fully equipped gym, a home gym with dumbbells, or bodyweight exercises. The plan will be customized to reach your goals with whatever you have.",
    faq_4_q: "When will I start seeing real changes in my body?",
    faq_4_a: "Results depend on your consistency with the workout and nutrition plan. With full commitment, you will experience noticeable transformations in measurements, strength, energy, and muscle definition within the first 3 to 4 weeks.",
    faq_5_q: "How do I start and subscribe? Does activation take time?",
    faq_5_a: "Activation happens immediately! As soon as you choose your package and click 'Get Started', your Bolder Fit app access is activated automatically so we kick off your transformation right away.",

    // Modal
    modal_title: "Confirm Your Package",
    modal_subtitle: "Enter your details to proceed directly with GAP Coaching.",
    modal_name_lbl: "Full Name:",
    modal_phone_lbl: "Phone / WhatsApp Number:",
    modal_goal_lbl: "Primary Goal:",
    modal_cta: "Confirm & Connect on WhatsApp",
    modal_close: "Close",

    // Footer
    footer_currency_notice: "All prices are displayed in UAE Dirhams (AED)",
    footer_rights: "All Rights Reserved."
  }
};

const LanguageContext = createContext<LanguageContextType>({
  lang: "ar",
  toggleLang: () => {},
  setLang: () => {},
  t: () => "",
  isAr: true,
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Language>("ar");

  useEffect(() => {
    const saved = localStorage.getItem("site_lang") as Language;
    if (saved === "ar" || saved === "en") {
      setLangState(saved);
      document.documentElement.lang = saved;
      document.documentElement.dir = saved === "ar" ? "rtl" : "ltr";
    }
  }, []);

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    localStorage.setItem("site_lang", newLang);
    document.documentElement.lang = newLang;
    document.documentElement.dir = newLang === "ar" ? "rtl" : "ltr";
  };

  const toggleLang = () => {
    setLang(lang === "ar" ? "en" : "ar");
  };

  const t = (key: string): string => {
    const dict = translations[lang] as Record<string, string>;
    return dict[key] || key;
  };

  return (
    <LanguageContext.Provider
      value={{
        lang,
        toggleLang,
        setLang,
        t,
        isAr: lang === "ar",
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);
