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

    updateLanguageButton();
}

applyLanguage();

langToggle.addEventListener("click", () => {

    currentLang = currentLang === "en" ? "hi" : "en";

    localStorage.setItem("language", currentLang);

    applyLanguage();

});