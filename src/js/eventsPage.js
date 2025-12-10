// src/js/eventsPage.js
import { eventsData } from "../data/eventsData.js";

const MONTHS_IT_SHORT = ["GEN", "FEB", "MAR", "APR", "MAG", "GIU", "LUG", "AGO", "SET", "OTT", "NOV", "DIC"];

function formatDateBadge(isoDate) {
  const d = new Date(isoDate);
  const day = String(d.getDate()).padStart(2, "0");
  const month = MONTHS_IT_SHORT[d.getMonth()] || "";
  return { day, month };
}

function formatTimeRange(start, end) {
  if (!start || !end) return "";
  return `${start} – ${end}`;
}

function renderEventCard(event) {
  const { day, month } = formatDateBadge(event.date);
  const timeRange = formatTimeRange(event.timeStart, event.timeEnd);

  return `
    <article
      class="flex flex-col justify-between rounded-[24px] border border-[var(--color-border-soft)] bg-[var(--color-surface)] p-6 shadow-sm"
      data-event-id="${event.id}"
      data-event-type="${event.type}"
      data-event-mode="${event.mode}"
    >
      <header class="flex items-start justify-between gap-3">
        <div class="flex items-center gap-3">
          <div class="flex h-10 w-10 flex-col items-center justify-center rounded-full bg-[var(--color-accent-soft)] text-[0.7rem] font-semibold leading-tight text-[var(--color-accent-strong)]">
            <span>${day}</span>
            <span>${month}</span>
          </div>
          <div class="text-xs font-medium uppercase tracking-[0.16em] text-[var(--color-text-muted)]">
            ${event.badgeLabel || ""}
          </div>
        </div>
        <div class="text-xs text-right text-[var(--color-text-muted)]">
          <span class="block">${event.locationLabel || ""}</span>
          ${timeRange ? `<span class="block">${timeRange}</span>` : ""}
        </div>
      </header>

      <div class="mt-4 space-y-2">
        <h3 class="text-base font-semibold leading-snug">
          ${event.title}
        </h3>
        <p class="text-sm leading-relaxed text-[var(--color-text-muted)]">
          ${event.description}
        </p>
      </div>

      <div class="mt-4 flex flex-wrap items-center gap-3 text-xs text-[var(--color-text-muted)]">
        ${event.durationMinutes ? `<span>Durata: ${Math.round(event.durationMinutes)} minuti</span>` : ""}
        ${
          event.priceLabel
            ? `<span class="h-1 w-1 rounded-full bg-[var(--color-border-soft)]"></span><span>Contributo: ${event.priceLabel}</span>`
            : ""
        }
      </div>

      <div class="mt-5">
        <a
          href="#"
          class="btn w-full justify-center border border-[var(--color-accent-soft)] bg-[var(--color-surface)] text-[var(--color-accent-strong)] hover:bg-[var(--color-accent-soft)]"
          data-wa-key="${event.whatsappKey}"
        >
          Prenota il tuo posto su WhatsApp
        </a>
      </div>
    </article>
  `;
}

function filterEvents(events, { typeFilter, onlineOnly }) {
  return events.filter((event) => {
    const matchType = typeFilter === "tutti" ? true : event.type === typeFilter;
    const matchMode = onlineOnly ? event.mode === "online" : true;
    return matchType && matchMode;
  });
}

function renderEventsList(events) {
  const container = document.getElementById("events-list");
  if (!container) return;

  if (!events.length) {
    container.innerHTML = `
      <p class="col-span-full text-center text-sm text-[var(--color-text-muted)]">
        Al momento non ci sono eventi che corrispondono a questi filtri.
      </p>
    `;
    return;
  }

  container.innerHTML = events.map(renderEventCard).join("");
}

document.addEventListener("DOMContentLoaded", () => {
  let currentTypeFilter = "tutti";   // tutti | armonizzazione | cerchio | speciale
  let onlineOnly = false;

  const filterButtons = document.querySelectorAll(".js-events-filter");
  const onlineCheckbox = document.querySelector(".js-events-online-only");

  function updateFiltersUI() {
    filterButtons.forEach((btn) => {
      const value = btn.getAttribute("data-filter");
      const isActive = value === currentTypeFilter;
      btn.classList.toggle("bg-[var(--color-accent-soft)]", isActive);
      btn.classList.toggle("text-[var(--color-accent-strong)]", isActive);
      btn.classList.toggle("border-[var(--color-border-soft)]", !isActive);
      btn.classList.toggle("bg-[var(--color-surface)]", !isActive);
      btn.classList.toggle("text-[var(--color-text-muted)]", !isActive);
    });
  }

  function applyFiltersAndRender() {
    const filtered = filterEvents(eventsData, {
      typeFilter: currentTypeFilter,
      onlineOnly
    });
    renderEventsList(filtered);
  }

  // click su pulsanti filtro
  filterButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const value = btn.getAttribute("data-filter");
      currentTypeFilter = value || "tutti";
      updateFiltersUI();
      applyFiltersAndRender();
    });
  });

  // switch solo online
  if (onlineCheckbox) {
    onlineCheckbox.addEventListener("change", (e) => {
      onlineOnly = e.target.checked;
      applyFiltersAndRender();
    });
  }

  // inizializza
  updateFiltersUI();
  applyFiltersAndRender();
});
