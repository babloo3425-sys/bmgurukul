// Back to Top Button

const backBtn = document.getElementById("backToTop");

if (backBtn) {

    backBtn.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}

/* ======================
   IMAGE LIGHTBOX
====================== */

const galleryImages =
document.querySelectorAll(".screenshots-grid img, .screenshot-grid .shot img");
const lightbox =
document.getElementById("lightbox");

const lightboxImg =
document.getElementById("lightbox-img");

const closeBtn =
document.querySelector(".close-lightbox");

if (galleryImages.length && lightbox && lightboxImg && closeBtn) {

    galleryImages.forEach(img => {

        img.addEventListener("click", () => {

            lightbox.style.display = "flex";
            lightboxImg.src = img.src;

        });

    });

    closeBtn.addEventListener("click", () => {

        lightbox.style.display = "none";

    });

    lightbox.addEventListener("click", (e) => {

        if (e.target === lightbox) {

            lightbox.style.display = "none";

        }

    });

}
const menuToggle = document.getElementById("menuToggle");
const nav = document.querySelector("header nav");

if (menuToggle && nav) {
    menuToggle.addEventListener("click", () => {
        nav.classList.toggle("active");
    });
}

document.querySelectorAll(".faq-question").forEach(button=>{

button.addEventListener("click",()=>{

const item=button.parentElement;

document.querySelectorAll(".faq-item").forEach(faq=>{

if(faq!==item){

faq.classList.remove("active");

}

});

item.classList.toggle("active");

});

});

/* ===========================
   GOOGLE ANALYTICS EVENTS
=========================== */

function trackWhatsAppClick(buttonName){

    if(typeof gtag==="function"){

        gtag("event","whatsapp_click",{

            button_name:buttonName,

            event_category:"Contact",

            event_label:buttonName

        });

    }

}

function trackEmailClick(buttonName){

    if(typeof gtag==="function"){

        gtag("event","email_click",{

            button_name:buttonName,

            event_category:"Contact",

            event_label:buttonName

        });

    }

}
