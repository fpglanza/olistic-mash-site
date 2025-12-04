// ----------------------------
// IMPORTS VITE
// ----------------------------
import "../css/main.css";

import { siteHeader } from "./layout/header.js";
import { siteFooter } from "./layout/footer.js";


// ----------------------------
// WHATSAPP CONFIG
// ----------------------------
const WHATSAPP_PHONE = "+393343421236";

const whatsappMessages = {
  home_general: "Ciao! Vorrei avere più informazioni sui tuoi percorsi e consulenze.",
  home_services: "Ciao! Vorrei scoprire meglio i tuoi servizi.",
  home_micro_fit: "Ciao! Vorrei capire se il tuo percorso è giusto per me.",
  home_unity: "Ciao! Vorrei prenotare o avere informazioni su Unity Connection.",
  home_testimonials: "Ciao! Vorrei iniziare il mio percorso con te.",
  home_final: "Ciao! Voglio iniziare il mio percorso verso più presenza e centratura.",
  eventi_generic: "Ciao! Vorrei informazioni sui prossimi eventi e cerchi.",
  event_generic: "Ciao! Vorrei partecipare a uno dei tuoi eventi.",
  chi_sono_generic: "Ciao! Ho letto la tua storia e vorrei capire come puoi aiutarmi.",
  unity_info: "Ciao! Vorrei informazioni su Unity Connection.",
  unity_booking: "Ciao! Vorrei prenotare una sessione Unity Connection.",
  percorsi_guide: "Ciao! Vorrei una guida per capire qual è il percorso più adatto a me.",
  reiki_info: "Ciao! Vorrei avere maggiori informazioni sui percorsi e trattamenti Reiki.",
  contatti_generic: "Ciao! Vorrei maggiori informazioni sui tuoi servizi e disponibilità.",
  chi_sono_percorso: "Ciao, ti scrivo dalla pagina Chi sono, sezione Il mio percorso.",
  chi_sono_approccio: "Ciao, ti scrivo dalla pagina Chi sono, sezione approccio olistico.",
  chi_sono_missione: "Ciao, ti scrivo dalla pagina Chi sono, sezione La mia missione.",
};


// ----------------------------
// WHATSAPP CTA HANDLER
// ----------------------------
function initWhatsAppCTAs() {
  const buttons = document.querySelectorAll("[data-wa-key]");

  buttons.forEach((btn) => {
    const key = btn.getAttribute("data-wa-key");
    const customText = btn.getAttribute("data-wa-text");
    const baseMessage = whatsappMessages[key] || "";
    const message = customText
      ? `${baseMessage} ${customText}`.trim()
      : baseMessage;

    const encoded = encodeURIComponent(message || "Ciao!");

    const url = `https://wa.me/${WHATSAPP_PHONE}?text=${encoded}`;

    if (btn.tagName.toLowerCase() === "a") {
      btn.href = url;
      btn.target = "_blank";
      btn.rel = "noopener noreferrer";
    } else {
      btn.addEventListener("click", () =>
        window.open(url, "_blank", "noopener,noreferrer")
      );
    }
  });
}


// ----------------------------
// EVENTI — HOME PREVIEW
// ----------------------------
function renderHomeEventsPreview() {
  const container = document.getElementById("home-events-list");
  if (!container || !Array.isArray(window.eventsData)) return;

  const preview = window.eventsData.slice(0, 3);
  container.innerHTML = "";

  preview.forEach((event) => {
    const card = document.createElement("article");
    card.className = "card event-card";

    card.innerHTML = `
      <div class="event-card__header">
        <div class="event-card__date">
          <span class="event-card__day">${event.date.slice(8, 10)}</span>
          <span class="event-card__month">${event.date.slice(5, 7)}</span>
        </div>
      </div>
      <h3>${event.title}</h3>
      <p>${event.shortDescription}</p>
      <p class="small event-card__meta">${event.city} · ${event.location}</p>
      <a class="btn btn-secondary mt-24"
         data-wa-key="${event.whatsappKey}"
         data-wa-text="Mi interessa l'evento: ${event.title} del ${event.date}.">
        Prenota su WhatsApp
      </a>
    `;

    container.appendChild(card);
  });
}


// ----------------------------
// EVENTI — PAGINA EVENTI
// ----------------------------
function renderEventsPage() {
  const container = document.getElementById("events-list");
  if (!container || !Array.isArray(window.eventsData)) return;

  container.innerHTML = "";

  window.eventsData.forEach((event) => {
    const card = document.createElement("article");
    card.className = "card event-card";

    card.innerHTML = `
      <div class="event-card__header">
        <div class="event-card__date">
          <span class="event-card__day">${event.date.slice(8, 10)}</span>
          <span class="event-card__month">${event.date.slice(5, 7)}</span>
        </div>
      </div>
      <h3>${event.title}</h3>
      <p>${event.shortDescription}</p>
      <p class="small event-card__meta">${event.city} · ${event.location}</p>
      <a class="btn btn-secondary mt-24"
         data-wa-key="${event.whatsappKey}"
         data-wa-text="Mi interessa l'evento: ${event.title} del ${event.date}.">
        Prenota su WhatsApp
      </a>
    `;

    container.appendChild(card);
  });
}


// ----------------------------
// NAVBAR MOBILE (usa .nav.nav--open)
// ----------------------------
function initMobileNav() {
  const nav = document.querySelector(".nav");
  if (!nav) return;

  const toggle = nav.querySelector(".nav__toggle");
  if (!toggle) return;

  const links = nav.querySelectorAll(".nav__link");

  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("nav--open");
    toggle.setAttribute("aria-expanded", isOpen);
  });

  links.forEach((link) =>
    link.addEventListener("click", () => {
      nav.classList.remove("nav--open");
      toggle.setAttribute("aria-expanded", "false");
    })
  );
}


// ----------------------------
// TESTIMONIAL CAROUSEL
// ----------------------------
function initTestimonialCarousels() {
  const carousels = document.querySelectorAll("[data-testimonial-carousel]");

  carousels.forEach((carousel) => {
    const slides = Array.from(carousel.querySelectorAll("[data-testimonial-slide]"));
    const prevBtn = carousel.querySelector("[data-carousel-prev]");
    const nextBtn = carousel.querySelector("[data-carousel-next]");

    if (!slides.length) return;

    let index = 0;

    function showSlide(i) {
      slides.forEach((slide, n) => {
        slide.classList.toggle("testimonial-slide--active", n === i);
      });
    }

    prevBtn?.addEventListener("click", () => {
      index = (index - 1 + slides.length) % slides.length;
      showSlide(index);
    });

    nextBtn?.addEventListener("click", () => {
      index = (index + 1) % slides.length;
      showSlide(index);
    });

    setInterval(() => {
      index = (index + 1) % slides.length;
      showSlide(index);
    }, 10000);

    showSlide(index);
  });
}


// ----------------------------
// VIDEO LAZY
// ----------------------------
function initLazyVideos() {
  document.querySelectorAll(".video-lazy").forEach((container) => {
    container.addEventListener("click", () => {
      const id = container.dataset.videoId;
      container.innerHTML = `
        <iframe
          src="https://www.youtube.com/embed/${id}?autoplay=1"
          title="Video"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      `;
    });
  });
}


// ----------------------------
// ON LOAD — BOOTSTRAP EVERYTHING
// ----------------------------
document.addEventListener("DOMContentLoaded", () => {
  // Inject header and footer
  const headerSlot = document.querySelector("[data-site-header]");
  if (headerSlot) headerSlot.outerHTML = siteHeader;

  const footerSlot = document.querySelector("[data-site-footer]");
  if (footerSlot) footerSlot.outerHTML = siteFooter;

  // Re-init navbar AFTER injection
  initMobileNav();

  // Page features
  renderHomeEventsPreview();
  renderEventsPage();
  initWhatsAppCTAs();
  initTestimonialCarousels();
  initLazyVideos();
});
