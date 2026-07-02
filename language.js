/* ==========================================
   BmGurukul Language System
========================================== */
function setText(id, text) {
    const element = document.getElementById(id);

    if (element) {
        element.textContent = text;
    }
}

const langToggle = document.getElementById("langToggle");

let currentLang = localStorage.getItem("language") || "en";

const translations = {

    en: {
        welcome: "Welcome to",
        brand: "Bm GurukuL",
        heroDesc: "The official ecosystem of BM projects bringing together BmPlayer, BmKalaHub, BmVideoX, BmReels, BmTheaterHub and BmGapShap on one platform.",
        viewProjects: "View Projects",
        contact: "Contact Me",

        aboutTitle: "About Me",
        aboutDesc: "Hi, I'm Bablu Kumar, an Android and Web Developer. I build digital products under the BM brand including BmPlayer, BmKalaHub, BmVideoX, BmTheaterHub, BmReels and BmGapShap.",
       
       journeyTitle: "My Journey",

       journey1: "Started Android App Development",
       journey2: "Built and Published Music Player",
       journey3: "Created Artist Marketplace Platform",
       journey4: "Expanded into Web Apps & Platforms",

        projectsTitle: "My Projects",

        bmplayerDesc: "Offline Music Player with Equalizer, Background Playback and AdMob.",
        bmkalahubDesc: "Artist Marketplace with Booking, Profiles and WhatsApp Contact.",
        bmvideoxDesc: "Advanced Video Player",
        bmtheaterhubDesc: "Theatre Artist Community",
        bmreelsDesc: "Short Video Sharing Platform",
        bmgapshapDesc: "Chat, Voice & Video Calling App",

        viewDetails: "View Details",

        roadmapTitle: "Future Vision",

        roadmap1: "☁️ Cloud Sync",
        roadmap2: "🤖 AI Features",
        roadmap3: "💎 Premium Apps",
        roadmap4: "🌍 Global Launch",

        statsTitle: "📊 BmGurukul at a Glance",
        statsDesc: "Building innovative digital products with modern technologies for creators, artists, entertainment, and communication.",

        projectsStat: "Projects",
        technologiesStat: "Technologies",
        platformsStat: "Platforms",
        developedStat: "Self Developed",
    
        servicesTitle:"Our Services",

        service1Title:"Business Website",
        service1Desc:"Professional responsive websites for businesses, shops, schools and organizations.",

        service2Title:"Portfolio Website",
        service2Desc:"Modern portfolio websites for professionals, artists and creators.",

        service3Title:"Android Apps",
        service3Desc:"Custom Android applications with modern UI and powerful features.",

        service4Title:"Web Applications",
        service4Desc:"Custom dashboards, booking systems, admin panels and databases.",

        service5Title:"SEO Setup",
        service5Desc:"Google Search Console, Analytics, Sitemap and SEO optimization.",

        service6Title:"Support & Maintenance",
        service6Desc:"Website updates, maintenance and long-term technical support.",

        pricingTitle:"Pricing Plans",

        starterTitle:"Starter",
        starterStarting:"Starting at",
        starterPrice:"₹9,999",

        starter1:"✔ Responsive Website",
        starter2:"✔ Mobile Friendly",
        starter3:"✔ Up to 5 Pages",
        starter4:"✔ Contact Form",
        starter5:"✔ WhatsApp Integration",

        starterBtn:"Get Started",

        popularBadge:"Most Popular",

        proTitle:"Professional",
        proStarting:"Starting at",
        proPrice:"₹19,999",

        pro1:"✔ Everything in Starter",
        pro2:"✔ SEO Setup",
        pro3:"✔ Google Analytics",
        pro4:"✔ Search Console",
        pro5:"✔ Premium Design",
        pro6:"✔ Domain Setup",

        proBtn:"Choose Plan",

        premiumTitle:"Premium",
        premiumPrice:"Custom Quote",
        premiumNote:"For custom business solutions and enterprise projects.",

        premium1:"✔ Custom Web Application",
        premium2:"✔ Admin Panel",
        premium3:"✔ Database",
        premium4:"✔ Login System",
        premium5:"✔ Booking & Dashboard",

        premiumBtn:"Contact Us",
 
        consultationTitle:"Ready to Build Your Dream Project?",

        consultationDesc:"Get a free consultation and discuss your website or app idea. We help businesses, creators, schools and startups build modern digital products.",

        consultationBtn:"📱 Get Free Consultation",
        consultationWhatsApp:"https://wa.me/919546801267?text=Hello%20BM%20GurukuL,%0A%0AI%20visited%20your%20website%20and%20I'm%20interested%20in%20building%20a%20professional%20website%20or%20web%20application%20for%20my%20business.%0A%0AI%20would%20like%20to%20discuss%20my%20project%20requirements,%20budget,%20timeline,%20and%20the%20best%20solution.%0A%0AProject%20Type%3A%0ABusiness%20Name%3A%0ABudget%3A%0APreferred%20Completion%20Time%3A%0A%0AThank%20you!",

        consultationEmail:"📧 Email Us",

        whyTitle:"Why Choose BM GurukuL?",

        why1Title:"⚡ Fast Delivery",
        why1Desc:"Projects delivered on time with professional quality.",

        why2Title:"📱 Mobile Responsive",
        why2Desc:"Every website works perfectly on mobile, tablet and desktop.",

        why3Title:"🌍 SEO Ready",
        why3Desc:"Google-friendly websites with Search Console and Analytics.",

        why4Title:"🔒 Secure & Reliable",
        why4Desc:"Modern coding practices for stable and secure websites.",

        why5Title:"🎨 Modern Design",
        why5Desc:"Clean, premium and attractive user interface.",

        why6Title:"🤝 Long-Term Support",
        why6Desc:"Continuous support and maintenance after project delivery.",

        processTitle:"Our Work Process",

        process1Title:"Requirement Discussion",
        process1Desc:"We understand your business goals and project requirements.",

        process2Title:"Planning & Design",
        process2Desc:"We create a modern design and project structure before development.",

        process3Title:"Development",
        process3Desc:"We build a fast, secure and responsive website or application.",

        process4Title:"Testing & Launch",
        process4Desc:"After testing, we deploy your project and provide support.",

        faqTitle:"Frequently Asked Questions",

        faqQ1:"How long does it take to build a website?",
        faqA1:"Most business websites are completed within 5–10 days depending on the project.",

        faqQ2:"Will my website work on mobile?",
        faqA2:"Yes. Every website is fully responsive for mobile, tablet and desktop.",

        faqQ3:"Do you provide SEO setup?",
        faqA3:"Yes. We configure Search Console, Google Analytics and basic SEO.",

        faqQ4:"Do you provide support after delivery?",
        faqA4:"Yes. We provide technical support after project delivery.",

        contactTitle: "Get In Touch",
        contactBrand: "BM GurukuL",
        contactDesc: "Building Android Apps, Web Platforms & Digital Products under the BM brand.",

        emailBtn: "Email Me",
        whatsappBtn: "WhatsApp",
        viewProjectsContactBtn: "View Projects",

        footerTitle: "BM GurukuL",
        footerTagline: "Apps • Platforms • Digital Products",
        footerProjects: "BmPlayer • BmKalaHub • BmVideoX • BmTheaterHub • BmFlix • BmGapShap",
        footerCopyright: "© 2026 Bablu Kumar",

        backToTop:"⬆ Back to Top",

    },

    hi: {
        welcome: "स्वागत है",
        brand: "BM गुरुकुल",
        heroDesc: "बीएम प्रोजेक्ट्स का आधिकारिक प्लेटफ़ॉर्म, जहाँ BmPlayer, BmKalaHub, BmVideoX, BmReels, BmTheaterHub और BmGapShap एक ही स्थान पर उपलब्ध हैं।",
        viewProjects: "प्रोजेक्ट्स देखें",
        contact: "संपर्क करें",
    
       aboutTitle: "मेरे बारे में",
       aboutDesc: "नमस्ते, मैं बबलू कुमार हूँ। मैं एक Android और Web Developer हूँ। मैं BM ब्रांड के अंतर्गत BmPlayer, BmKalaHub, BmVideoX, BmTheaterHub, BmReels और BmGapShap जैसे डिजिटल प्रोजेक्ट्स विकसित करता हूँ।", 
 
       journeyTitle: "मेरी यात्रा",

       journey1: "Android ऐप डेवलपमेंट की शुरुआत की",
       journey2: "म्यूजिक प्लेयर बनाया और प्रकाशित किया",
       journey3: "कलाकारों के लिए मार्केटप्लेस प्लेटफ़ॉर्म बनाया",
       journey4: "वेब ऐप्स और प्लेटफ़ॉर्म की ओर विस्तार किया",

       projectsTitle: "मेरे प्रोजेक्ट्स",

       bmplayerDesc: "इक्वलाइज़र, बैकग्राउंड प्लेबैक और AdMob के साथ ऑफलाइन म्यूजिक प्लेयर।",
       bmkalahubDesc: "बुकिंग, प्रोफाइल और WhatsApp संपर्क के साथ कलाकारों का मार्केटप्लेस।",
       bmvideoxDesc: "उन्नत वीडियो प्लेयर",
       bmtheaterhubDesc: "थिएटर कलाकार समुदाय",
       bmreelsDesc: "शॉर्ट वीडियो शेयरिंग प्लेटफ़ॉर्म",
       bmgapshapDesc: "चैट, वॉइस और वीडियो कॉलिंग ऐप",

       viewDetails: "विवरण देखें",

       servicesTitle:"हमारी सेवाएँ",

       service1Title:"बिज़नेस वेबसाइट",
       service1Desc:"व्यवसाय, दुकान, स्कूल और संस्थानों के लिए प्रोफेशनल रिस्पॉन्सिव वेबसाइट।",

       service2Title:"पोर्टफोलियो वेबसाइट",
       service2Desc:"प्रोफेशनल, कलाकार और क्रिएटर्स के लिए आधुनिक पोर्टफोलियो वेबसाइट।",

       service3Title:"एंड्रॉइड ऐप्स",
       service3Desc:"आधुनिक डिज़ाइन और शक्तिशाली फीचर्स के साथ कस्टम एंड्रॉइड ऐप्स।",

       service4Title:"वेब एप्लिकेशन",
       service4Desc:"कस्टम डैशबोर्ड, बुकिंग सिस्टम, एडमिन पैनल और डेटाबेस।",

       service5Title:"SEO सेटअप",
       service5Desc:"Google Search Console, Analytics, Sitemap और SEO ऑप्टिमाइज़ेशन।",

       service6Title:"सपोर्ट और मेंटेनेंस",
       service6Desc:"वेबसाइट अपडेट, मेंटेनेंस और लंबे समय तक तकनीकी सहायता।",

       pricingTitle:"मूल्य योजना",

       starterTitle:"स्टार्टर",
       starterStarting:"शुरुआत",
       starterPrice:"₹9,999",

       starter1:"✔ रिस्पॉन्सिव वेबसाइट",
       starter2:"✔ मोबाइल फ्रेंडली",
       starter3:"✔ 5 पेज तक",
       starter4:"✔ संपर्क फ़ॉर्म",
       starter5:"✔ व्हाट्सएप इंटीग्रेशन",

       starterBtn:"शुरू करें",

       popularBadge:"सबसे लोकप्रिय",

       proTitle:"प्रोफेशनल",
       proStarting:"शुरुआत",
       proPrice:"₹19,999",

       pro1:"✔ स्टार्टर की सभी सुविधाएँ",
       pro2:"✔ SEO सेटअप",
       pro3:"✔ Google Analytics",
       pro4:"✔ Search Console",
       pro5:"✔ प्रीमियम डिज़ाइन",
       pro6:"✔ डोमेन सेटअप",

       proBtn:"प्लान चुनें",

       premiumTitle:"प्रीमियम",
       premiumPrice:"कस्टम कोटेशन",
       premiumNote:"कस्टम बिज़नेस समाधान और बड़े प्रोजेक्ट्स के लिए।",

       premium1:"✔ कस्टम वेब एप्लिकेशन",
       premium2:"✔ एडमिन पैनल",
       premium3:"✔ डेटाबेस",
       premium4:"✔ लॉगिन सिस्टम",
       premium5:"✔ बुकिंग और डैशबोर्ड",

       premiumBtn:"संपर्क करें",

       consultationTitle:"क्या आप अपना ड्रीम प्रोजेक्ट शुरू करना चाहते हैं?",

       consultationDesc:"अपनी वेबसाइट या ऐप के बारे में निःशुल्क सलाह लें। हम व्यवसाय, स्कूल, क्रिएटर्स और स्टार्टअप्स के लिए आधुनिक डिजिटल समाधान बनाते हैं।",

       consultationBtn:"📱 निःशुल्क सलाह लें",
       consultationWhatsApp:"https://wa.me/919546801267?text=नमस्ते%20BM%20GurukuL,%0A%0Aमैंने%20आपकी%20वेबसाइट%20देखी%20और%20अपने%20व्यवसाय%20के%20लिए%20एक%20प्रोफेशनल%20वेबसाइट%20या%20वेब%20एप्लिकेशन%20बनवाने%20में%20रुचि%20रखता/रखती%20हूँ।%0A%0Aमैं%20अपने%20प्रोजेक्ट,%20बजट,%20समय-सीमा%20और%20सबसे%20उपयुक्त%20समाधान%20पर%20चर्चा%20करना%20चाहता/चाहती%20हूँ।%0A%0Aप्रोजेक्ट%20का%20प्रकार:%0ABusiness/Company%20का%20नाम:%0Aबजट:%0Aप्रोजेक्ट%20पूरा%20करने%20का%20समय:%0A%0Aधन्यवाद!",

       consultationEmail:"📧 ईमेल करें",

       whyTitle:"BM GurukuL को क्यों चुनें?",

       why1Title:"⚡ तेज़ डिलीवरी",
       why1Desc:"समय पर प्रोफेशनल गुणवत्ता के साथ प्रोजेक्ट डिलीवर किए जाते हैं।",

       why2Title:"📱 मोबाइल फ्रेंडली",
       why2Desc:"हर वेबसाइट मोबाइल, टैबलेट और डेस्कटॉप पर बेहतरीन चलती है।",

       why3Title:"🌍 SEO तैयार",
       why3Desc:"Google Search Console और Analytics के साथ SEO-अनुकूल वेबसाइट।",

       why4Title:"🔒 सुरक्षित और भरोसेमंद",
       why4Desc:"आधुनिक कोडिंग तकनीकों से सुरक्षित और स्थिर वेबसाइट।",

       why5Title:"🎨 आधुनिक डिज़ाइन",
       why5Desc:"साफ़, आकर्षक और प्रीमियम यूज़र इंटरफेस।",

       why6Title:"🤝 दीर्घकालिक सहायता",
       why6Desc:"प्रोजेक्ट पूरा होने के बाद भी निरंतर सपोर्ट और मेंटेनेंस।",

       processTitle:"हमारी कार्य प्रक्रिया",

       process1Title:"आवश्यकताओं पर चर्चा",
       process1Desc:"हम आपके व्यवसाय और प्रोजेक्ट की आवश्यकताओं को समझते हैं।",

       process2Title:"योजना और डिज़ाइन",
       process2Desc:"डेवलपमेंट से पहले आधुनिक डिज़ाइन और प्रोजेक्ट की योजना तैयार की जाती है।",

       process3Title:"डेवलपमेंट",
       process3Desc:"हम तेज़, सुरक्षित और मोबाइल फ्रेंडली वेबसाइट या एप्लिकेशन बनाते हैं।",

       process4Title:"टेस्टिंग और लॉन्च",
       process4Desc:"टेस्टिंग के बाद प्रोजेक्ट को लाइव किया जाता है और पूरा सपोर्ट दिया जाता है।",

       faqTitle:"अक्सर पूछे जाने वाले प्रश्न",

       faqQ1:"वेबसाइट बनने में कितना समय लगता है?",
       faqA1:"अधिकांश बिज़नेस वेबसाइट 5–10 दिनों में तैयार हो जाती हैं।",

       faqQ2:"क्या वेबसाइट मोबाइल पर सही चलेगी?",
       faqA2:"हाँ, हर वेबसाइट मोबाइल, टैबलेट और डेस्कटॉप के लिए पूरी तरह रिस्पॉन्सिव होती है।",

       faqQ3:"क्या आप SEO भी करते हैं?",
       faqA3:"हाँ, हम Search Console, Google Analytics और बेसिक SEO सेटअप करते हैं।",

       faqQ4:"क्या प्रोजेक्ट पूरा होने के बाद भी सपोर्ट मिलेगा?",
       faqA4:"हाँ, प्रोजेक्ट डिलीवरी के बाद भी तकनीकी सहायता प्रदान की जाती है।",

       roadmapTitle: "भविष्य की योजना",

       roadmap1: "☁️ क्लाउड सिंक",
       roadmap2: "🤖 AI सुविधाएँ",
       roadmap3: "💎 प्रीमियम ऐप्स",
       roadmap4: "🌍 वैश्विक लॉन्च",

       statsTitle: "📊 एक नज़र में BmGurukul",
       statsDesc: "रचनाकारों, कलाकारों, मनोरंजन और संचार के लिए आधुनिक तकनीकों से नवाचारी डिजिटल प्रोजेक्ट्स विकसित किए जा रहे हैं।", 

       projectsStat: "प्रोजेक्ट्स",
       technologiesStat: "तकनीकें",
       platformsStat: "प्लेटफ़ॉर्म",
       developedStat: "स्वयं विकसित",

       contactTitle: "संपर्क करें",
       contactBrand: "BM गुरुकुल",
       contactDesc: "BM ब्रांड के अंतर्गत Android Apps, Web Platforms और Digital Products विकसित किए जा रहे हैं।",

       emailBtn: "ईमेल करें",
       whatsappBtn: "व्हाट्सएप",
       viewProjectsContactBtn: "प्रोजेक्ट्स देखें",

       footerTitle: "BM गुरुकुल",
       footerTagline: "ऐप्स • प्लेटफ़ॉर्म • डिजिटल प्रोडक्ट्स",
       footerProjects: "BmPlayer • BmKalaHub • BmVideoX • BmTheaterHub • BmFlix • BmGapShap",
       footerCopyright: "© 2026 बबलू कुमार",

       backToTop:"⬆ ऊपर जाएँ",
    }

};

function updateLanguageButton() {
    langToggle.textContent =
        currentLang === "en" ? "हिन्दी" : "English";
}

function applyLanguage() {

setText("welcomeText", translations[currentLang].welcome);
setText("brandText", translations[currentLang].brand);

setText("heroDesc", translations[currentLang].heroDesc);
setText("viewProjectsBtn", translations[currentLang].viewProjects);
setText("contactBtn", translations[currentLang].contact);

setText("aboutTitle", translations[currentLang].aboutTitle);
setText("aboutDesc", translations[currentLang].aboutDesc);

setText("journeyTitle", translations[currentLang].journeyTitle);
setText("journey1", translations[currentLang].journey1);
setText("journey2", translations[currentLang].journey2);
setText("journey3", translations[currentLang].journey3);
setText("journey4", translations[currentLang].journey4);

setText("projectsTitle", translations[currentLang].projectsTitle);

setText("bmplayerDesc", translations[currentLang].bmplayerDesc);
setText("bmkalahubDesc", translations[currentLang].bmkalahubDesc);
setText("bmvideoxDesc", translations[currentLang].bmvideoxDesc);
setText("bmtheaterhubDesc", translations[currentLang].bmtheaterhubDesc);
setText("bmreelsDesc", translations[currentLang].bmreelsDesc);
setText("bmgapshapDesc", translations[currentLang].bmgapshapDesc);

setText("bmplayerBtn", translations[currentLang].viewDetails);
setText("bmkalahubBtn", translations[currentLang].viewDetails);
setText("bmvideoxBtn", translations[currentLang].viewDetails);
setText("bmtheaterhubBtn", translations[currentLang].viewDetails);
setText("bmreelsBtn", translations[currentLang].viewDetails);
setText("bmgapshapBtn", translations[currentLang].viewDetails);

setText("statsTitle", translations[currentLang].statsTitle);
setText("statsDesc", translations[currentLang].statsDesc);

setText("projectsStat", translations[currentLang].projectsStat);
setText("technologiesStat", translations[currentLang].technologiesStat);
setText("platformsStat", translations[currentLang].platformsStat);
setText("developedStat", translations[currentLang].developedStat);

setText("servicesTitle", translations[currentLang].servicesTitle);

setText("service1Title", translations[currentLang].service1Title);
setText("service1Desc", translations[currentLang].service1Desc);

setText("service2Title", translations[currentLang].service2Title);
setText("service2Desc", translations[currentLang].service2Desc);

setText("service3Title", translations[currentLang].service3Title);
setText("service3Desc", translations[currentLang].service3Desc);

setText("service4Title", translations[currentLang].service4Title);
setText("service4Desc", translations[currentLang].service4Desc);

setText("service5Title", translations[currentLang].service5Title);
setText("service5Desc", translations[currentLang].service5Desc);

setText("service6Title", translations[currentLang].service6Title);
setText("service6Desc", translations[currentLang].service6Desc);

setText("pricingTitle", translations[currentLang].pricingTitle);

setText("starterTitle", translations[currentLang].starterTitle);
setText("starterStarting", translations[currentLang].starterStarting);
setText("starterPrice", translations[currentLang].starterPrice);

setText("starter1", translations[currentLang].starter1);
setText("starter2", translations[currentLang].starter2);
setText("starter3", translations[currentLang].starter3);
setText("starter4", translations[currentLang].starter4);
setText("starter5", translations[currentLang].starter5);

setText("starterBtn", translations[currentLang].starterBtn);

setText("popularBadge", translations[currentLang].popularBadge);

setText("proTitle", translations[currentLang].proTitle);
setText("proStarting", translations[currentLang].proStarting);
setText("proPrice", translations[currentLang].proPrice);

setText("pro1", translations[currentLang].pro1);
setText("pro2", translations[currentLang].pro2);
setText("pro3", translations[currentLang].pro3);
setText("pro4", translations[currentLang].pro4);
setText("pro5", translations[currentLang].pro5);
setText("pro6", translations[currentLang].pro6);

setText("proBtn", translations[currentLang].proBtn);

setText("premiumTitle", translations[currentLang].premiumTitle);
setText("premiumPrice", translations[currentLang].premiumPrice);
setText("premiumNote", translations[currentLang].premiumNote);

setText("premium1", translations[currentLang].premium1);
setText("premium2", translations[currentLang].premium2);
setText("premium3", translations[currentLang].premium3);
setText("premium4", translations[currentLang].premium4);
setText("premium5", translations[currentLang].premium5);
setText("premiumBtn", translations[currentLang].premiumBtn);

setText("consultationTitle", translations[currentLang].consultationTitle);
setText("consultationDesc", translations[currentLang].consultationDesc);
setText("consultationBtn", translations[currentLang].consultationBtn);
document.getElementById("consultationBtn").href =
translations[currentLang].consultationWhatsApp;
setText("consultationEmail", translations[currentLang].consultationEmail);

setText("whyTitle", translations[currentLang].whyTitle);

setText("why1Title", translations[currentLang].why1Title);
setText("why1Desc", translations[currentLang].why1Desc);

setText("why2Title", translations[currentLang].why2Title);
setText("why2Desc", translations[currentLang].why2Desc);

setText("why3Title", translations[currentLang].why3Title);
setText("why3Desc", translations[currentLang].why3Desc);

setText("why4Title", translations[currentLang].why4Title);
setText("why4Desc", translations[currentLang].why4Desc);

setText("why5Title", translations[currentLang].why5Title);
setText("why5Desc", translations[currentLang].why5Desc);

setText("why6Title", translations[currentLang].why6Title);
setText("why6Desc", translations[currentLang].why6Desc);

setText("processTitle", translations[currentLang].processTitle);

setText("process1Title", translations[currentLang].process1Title);
setText("process1Desc", translations[currentLang].process1Desc);

setText("process2Title", translations[currentLang].process2Title);
setText("process2Desc", translations[currentLang].process2Desc);

setText("process3Title", translations[currentLang].process3Title);
setText("process3Desc", translations[currentLang].process3Desc);

setText("process4Title", translations[currentLang].process4Title);
setText("process4Desc", translations[currentLang].process4Desc);

setText("faqTitle",translations[currentLang].faqTitle);

setText("faqQ1",translations[currentLang].faqQ1);
setText("faqA1",translations[currentLang].faqA1);

setText("faqQ2",translations[currentLang].faqQ2);
setText("faqA2",translations[currentLang].faqA2);

setText("faqQ3",translations[currentLang].faqQ3);
setText("faqA3",translations[currentLang].faqA3);

setText("faqQ4",translations[currentLang].faqQ4);
setText("faqA4",translations[currentLang].faqA4);

setText("roadmapTitle", translations[currentLang].roadmapTitle);
setText("roadmap1", translations[currentLang].roadmap1);
setText("roadmap2", translations[currentLang].roadmap2);
setText("roadmap3", translations[currentLang].roadmap3);
setText("roadmap4", translations[currentLang].roadmap4);

setText("contactTitle", translations[currentLang].contactTitle);
setText("contactBrand", translations[currentLang].contactBrand);
setText("contactDesc", translations[currentLang].contactDesc);

setText("emailBtn", translations[currentLang].emailBtn);
setText("whatsappBtn", translations[currentLang].whatsappBtn);
setText("viewProjectsContactBtn", translations[currentLang].viewProjectsContactBtn);

setText("footerTitle", translations[currentLang].footerTitle);
setText("footerTagline", translations[currentLang].footerTagline);
setText("footerProjects", translations[currentLang].footerProjects);
setText("footerCopyright", translations[currentLang].footerCopyright);

setText("backToTopText", translations[currentLang].backToTop);
 
    updateLanguageButton();
}

applyLanguage();

langToggle.addEventListener("click", () => {

    currentLang = currentLang === "en" ? "hi" : "en";

    localStorage.setItem("language", currentLang);

    applyLanguage();

});