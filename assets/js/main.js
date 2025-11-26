// assets/js/main.js

// CONFIG: numero WhatsApp (placeholder per ora)
const WHATSAPP_PHONE = "0000000000"; // da sostituire con numero reale

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
  contatti_generic: "Ciao! Vorrei maggiori informazioni sui tuoi servizi e disponibilità."
};

// Inizializza CTA WhatsApp in base a data-wa-key
function initWhatsAppCTAs() {
  const buttons = document.querySelectorAll("[data-wa-key]");
  buttons.forEach((btn) => {
    const key = btn.getAttribute("data-wa-key");
    const customText = btn.getAttribute("data-wa-text");
    const baseMessage = whatsappMessages[key] || "";
    const message = customText ? `${baseMessage} ${customText}`.trim() : baseMessage;
    const encodedMessage = encodeURIComponent(message);

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
  if (!container || !Array.isArray(eventsData)) return;

  const preview = eventsData.slice(0, 3);
  container.innerHTML = "";

  preview.forEach((event) => {
    const card = document.createElement("article");
    card.className = "card";

    card.innerHTML = `
      <h3>${event.title}</h3>
      <p><strong>Data:</strong> ${event.date}</p>
      <p><strong>Luogo:</strong> ${event.city} – ${event.location}</p>
      <p>${event.shortDescription}</p>
      <a class="btn js-whatsapp-cta" data-wa-key="${event.whatsappKey}" data-wa-text="Mi interessa l'evento: ${event.title} del ${event.date}.">
        Prenota su WhatsApp
      </a>
    `;

    container.appendChild(card);
  });
}

// Render eventi per pagina Eventi & Gruppi
function renderEventsPage() {
  const container = document.getElementById("events-list");
  if (!container || !Array.isArray(eventsData)) return;

  container.innerHTML = "";

  eventsData.forEach((event) => {
    const card = document.createElement("article");
    card.className = "card";

    card.innerHTML = `
      <h3>${event.title}</h3>
      <p><strong>Data:</strong> ${event.date}</p>
      <p><strong>Luogo:</strong> ${event.city} – ${event.location}</p>
      <p>${event.shortDescription}</p>
      <a class="btn js-whatsapp-cta" data-wa-key="${event.whatsappKey}" data-wa-text="Mi interessa l'evento: ${event.title} del ${event.date}.">
        Prenota su WhatsApp
      </a>
    `;

    container.appendChild(card);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  // Home preview
  renderHomeEventsPreview();

  // Pagina Eventi & Gruppi
  renderEventsPage();

  // CTA WhatsApp
  initWhatsAppCTAs();
});
