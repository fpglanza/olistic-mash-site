import{e as u}from"./main-Cf2e7mH6.js";const f=["GEN","FEB","MAR","APR","MAG","GIU","LUG","AGO","SET","OTT","NOV","DIC"];function m(t){const e=new Date(t),s=String(e.getDate()).padStart(2,"0"),a=f[e.getMonth()]||"";return{day:s,month:a}}function p(t,e){return!t||!e?"":`${t} – ${e}`}function g(t){const{day:e,month:s}=m(t.date),a=p(t.timeStart,t.timeEnd);return`
    <article
      class="flex flex-col justify-between rounded-[24px] border border-[var(--color-border-soft)] bg-[var(--color-surface)] p-6 shadow-sm"
      data-event-id="${t.id}"
      data-event-type="${t.type}"
      data-event-mode="${t.mode}"
    >
      <header class="flex items-start justify-between gap-3">
        <div class="flex items-center gap-3">
          <div class="flex h-10 w-10 flex-col items-center justify-center rounded-full bg-[var(--color-accent-soft)] text-[0.7rem] font-semibold leading-tight text-[var(--color-accent-strong)]">
            <span>${e}</span>
            <span>${s}</span>
          </div>
          <div class="text-xs font-medium uppercase tracking-[0.16em] text-[var(--color-text-muted)]">
            ${t.badgeLabel||""}
          </div>
        </div>
        <div class="text-xs text-right text-[var(--color-text-muted)]">
          <span class="block">${t.locationLabel||""}</span>
          ${a?`<span class="block">${a}</span>`:""}
        </div>
      </header>

      <div class="mt-4 space-y-2">
        <h3 class="text-base font-semibold leading-snug">
          ${t.title}
        </h3>
        <p class="text-sm leading-relaxed text-[var(--color-text-muted)]">
          ${t.description}
        </p>
      </div>

      <div class="mt-4 flex flex-wrap items-center gap-3 text-xs text-[var(--color-text-muted)]">
        ${t.durationMinutes?`<span>Durata: ${Math.round(t.durationMinutes)} minuti</span>`:""}
        ${t.priceLabel?`<span class="h-1 w-1 rounded-full bg-[var(--color-border-soft)]"></span><span>Contributo: ${t.priceLabel}</span>`:""}
      </div>

      <div class="mt-5">
        <a
          href="#"
          class="btn w-full justify-center border border-[var(--color-accent-soft)] bg-[var(--color-surface)] text-[var(--color-accent-strong)] hover:bg-[var(--color-accent-soft)]"
          data-wa-key="${t.whatsappKey}"
        >
          Prenota il tuo posto su WhatsApp
        </a>
      </div>
    </article>
  `}function v(t,{typeFilter:e,onlineOnly:s}){return t.filter(a=>{const c=e==="tutti"?!0:a.type===e,r=s?a.mode==="online":!0;return c&&r})}function x(t){const e=document.getElementById("events-list");if(e){if(!t.length){e.innerHTML=`
      <p class="col-span-full text-center text-sm text-[var(--color-text-muted)]">
        Al momento non ci sono eventi che corrispondono a questi filtri.
      </p>
    `;return}e.innerHTML=t.map(g).join("")}}document.addEventListener("DOMContentLoaded",()=>{let t="tutti",e=!1,s=!1;const a=document.querySelectorAll(".js-events-filter"),c=document.querySelector(".js-events-online-only"),r=document.getElementById("events-show-more");function d(){a.forEach(o=>{const n=o.getAttribute("data-filter")===t;o.classList.toggle("bg-[var(--color-accent-soft)]",n),o.classList.toggle("text-[var(--color-accent-strong)]",n),o.classList.toggle("border-[var(--color-border-soft)]",!n),o.classList.toggle("bg-[var(--color-surface)]",!n),o.classList.toggle("text-[var(--color-text-muted)]",!n)})}function l(){const o=v(u,{typeFilter:t,onlineOnly:e});r&&(o.length<=3?r.classList.add("hidden"):(r.classList.remove("hidden"),r.textContent=s?"Mostra meno eventi":"Mostra tutti gli eventi"));const i=s?o:o.slice(0,3);x(i)}a.forEach(o=>{o.addEventListener("click",()=>{t=o.getAttribute("data-filter")||"tutti",s=!1,d(),l()})}),c&&c.addEventListener("change",o=>{e=o.target.checked,s=!1,l()}),r&&r.addEventListener("click",()=>{s=!s,l()}),d(),l()});
