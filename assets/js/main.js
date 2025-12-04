// assets/js/main.js
import "../css/main.css";

import { siteHeader } from "./layout/header.js";
import { siteFooter } from "./layout/footer.js";

// CONFIG: numero WhatsApp (placeholder per ora)
const WHATSAPP_PHONE = "+393343421236"; // da sostituire con numero reale

// Template messaggi WhatsApp
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

// Inizializza CTA WhatsApp in base a data-wa-key
function initWhatsAppCTAs() {
  const buttons = document.querySelectorAll("[data-wa-key]");
  buttons.forEach((btn) => {
    const key = btn.getAttribute("data-wa-key");
    const customText = btn.getAttribute("data-wa-text");
    const baseMessage = whatsappMessages[key] || "";
    const message = customText ? `${baseMessage} ${customText}`.trim() : baseMessage;
    const encodedMessage = encodeURIComponent(message || "Ciao!");

    const href = `https://wa.me/${WHATSAPP_PHONE}?text=${encodedMessage}`;

    if (btn.tagName.toLowerCase() === "a") {
      btn.setAttribute("href", href);
      btn.setAttribute("target", "_blank");
      btn.setAttribute("rel", "noopener noreferrer");
    } else {
      btn.addEventListener("click", () => {
        window.open(href, "_blank", "noopener,noreferrer");
      });
    }
  });
}

// Render eventi in una lista (per Home preview)
function renderHomeEventsPreview() {
  const container = document.getElementById("home-events-list");
  if (!container || typeof eventsData === "undefined" || !Array.isArray(eventsData)) return;

  const preview = eventsData.slice(0, 3);
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
      <a class="btn btn-secondary mt-24" data-wa-key="${event.whatsappKey}" data-wa-text="Mi interessa l'evento: ${event.title} del ${event.date}.">
        Prenota su WhatsApp
      </a>
    `;

    container.appendChild(card);
  });
}

// Render eventi per pagina Eventi & Gruppi
function renderEventsPage() {
  const container = document.getElementById("events-list");
  if (!container || typeof eventsData === "undefined" || !Array.isArray(eventsData)) return;

  container.innerHTML = "";

  eventsData.forEach((event) => {
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
      <a class="btn btn-secondary mt-24" data-wa-key="${event.whatsappKey}" data-wa-text="Mi interessa l'evento: ${event.title} del ${event.date}.">
        Prenota su WhatsApp
      </a>
    `;

    container.appendChild(card);
  });
}

// NAVBAR MOBILE – hamburger menu (usa .nav.nav--open come da CSS)
function initMobileNav() {
  const nav = document.querySelector(".nav");
  if (!nav) return;

  const toggle = nav.querySelector(".nav__toggle");
  const links = nav.querySelectorAll(".nav__link");

  if (!toggle) return;

  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("nav--open");
    toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });

  // Chiudi il menu quando clicchi una voce (mobile UX)
  links.forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("nav--open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

// TESTIMONIAL CAROUSEL
function initTestimonialCarousels() {
  const carousels = document.querySelectorAll("[data-testimonial-carousel]");

  carousels.forEach((carousel) => {
    const slides = Array.from(
      carousel.querySelectorAll("[data-testimonial-slide]")
    );
    const prevBtn = carousel.querySelector("[data-carousel-prev]");
    const nextBtn = carousel.querySelector("[data-carousel-next]");

    if (!slides.length || !prevBtn || !nextBtn) return;

    let currentIndex = 0;

    function showSlide(index) {
      slides.forEach((slide, i) => {
        slide.classList.toggle("testimonial-slide--active", i === index);
      });
    }

    prevBtn.addEventListener("click", () => {
      currentIndex = (currentIndex - 1 + slides.length) % slides.length;
      showSlide(currentIndex);
    });

    nextBtn.addEventListener("click", () => {
      currentIndex = (currentIndex + 1) % slides.length;
      showSlide(currentIndex);
    });

    // cambio automatico ogni 10 secondi
    const interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % slides.length;
      showSlide(currentIndex);
    }, 10000);

    // mostra la prima slide all’inizio
    showSlide(currentIndex);
  });
}

// VIDEO LAZY
function initLazyVideos() {
  const containers = document.querySelectorAll(".video-lazy");
  containers.forEach((container) => {
    container.addEventListener("click", () => {
      const id = container.dataset.videoId;

      container.innerHTML = `
        <iframe
          src="https://www.youtube.com/embed/${id}?autoplay=1"
          title="Video testimonianza – percorso Unity Connection"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      `;
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  // 1. Inietta header e footer
  const headerSlot = document.querySelector("[data-site-header]");
  if (headerSlot) {
    headerSlot.outerHTML = siteHeader;
  }

  const footerSlot = document.querySelector("[data-site-footer]");
  if (footerSlot) {
    footerSlot.outerHTML = siteFooter;
  }

  // 2. Ora che l'header è stato iniettato, possiamo agganciare il toggle mobile
  initMobileNav();

  // 3. Inizializza funzionalità di pagina
  renderHomeEventsPreview();
  renderEventsPage();
  initWhatsAppCTAs();
  initTestimonialCarousels();
  initLazyVideos();
});
