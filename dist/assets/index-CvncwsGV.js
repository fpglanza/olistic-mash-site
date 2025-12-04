(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))a(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function t(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(i){if(i.ep)return;i.ep=!0;const o=t(i);fetch(i.href,o)}})();const d="+393343421236",p={home_general:"Ciao! Vorrei avere più informazioni sui tuoi percorsi e consulenze.",home_services:"Ciao! Vorrei scoprire meglio i tuoi servizi.",home_micro_fit:"Ciao! Vorrei capire se il tuo percorso è giusto per me.",home_unity:"Ciao! Vorrei prenotare o avere informazioni su Unity Connection.",home_testimonials:"Ciao! Vorrei iniziare il mio percorso con te.",home_final:"Ciao! Voglio iniziare il mio percorso verso più presenza e centratura.",eventi_generic:"Ciao! Vorrei informazioni sui prossimi eventi e cerchi.",event_generic:"Ciao! Vorrei partecipare a uno dei tuoi eventi.",chi_sono_generic:"Ciao! Ho letto la tua storia e vorrei capire come puoi aiutarmi.",unity_info:"Ciao! Vorrei informazioni su Unity Connection.",unity_booking:"Ciao! Vorrei prenotare una sessione Unity Connection.",percorsi_guide:"Ciao! Vorrei una guida per capire qual è il percorso più adatto a me.",reiki_info:"Ciao! Vorrei avere maggiori informazioni sui percorsi e trattamenti Reiki.",contatti_generic:"Ciao! Vorrei maggiori informazioni sui tuoi servizi e disponibilità.",chi_sono_percorso:"Ciao, ti scrivo dalla pagina Chi sono, sezione Il mio percorso.",chi_sono_approccio:"Ciao, ti scrivo dalla pagina Chi sono, sezione approccio olistico.",chi_sono_missione:"Ciao, ti scrivo dalla pagina Chi sono, sezione La mia missione."};function u(){document.querySelectorAll("[data-wa-key]").forEach(e=>{const t=e.getAttribute("data-wa-key"),a=e.getAttribute("data-wa-text"),i=p[t]||"",o=a?`${i} ${a}`.trim():i,n=encodeURIComponent(o||"Ciao!"),s=`https://wa.me/${d}?text=${n}`;e.tagName.toLowerCase()==="a"?(e.setAttribute("href",s),e.setAttribute("target","_blank"),e.setAttribute("rel","noopener noreferrer")):e.addEventListener("click",()=>{window.open(s,"_blank","noopener,noreferrer")})})}function m(){const r=document.getElementById("home-events-list");if(!r||!Array.isArray(eventsData))return;const e=eventsData.slice(0,3);r.innerHTML="",e.forEach(t=>{const a=document.createElement("article");a.className="card event-card",a.innerHTML=`
      <div class="event-card__header">
        <div class="event-card__date">
          <span class="event-card__day">${t.date.slice(8,10)}</span>
          <span class="event-card__month">${t.date.slice(5,7)}</span>
        </div>
      </div>
      <h3>${t.title}</h3>
      <p>${t.shortDescription}</p>
      <p class="small event-card__meta">${t.city} · ${t.location}</p>
      <a class="btn btn-secondary mt-24" data-wa-key="${t.whatsappKey}" data-wa-text="Mi interessa l'evento: ${t.title} del ${t.date}.">
        Prenota su WhatsApp
      </a>
    `,r.appendChild(a)})}function f(){const r=document.getElementById("events-list");!r||!Array.isArray(eventsData)||(r.innerHTML="",eventsData.forEach(e=>{const t=document.createElement("article");t.className="card event-card",t.innerHTML=`
      <div class="event-card__header">
        <div class="event-card__date">
          <span class="event-card__day">${e.date.slice(8,10)}</span>
          <span class="event-card__month">${e.date.slice(5,7)}</span>
        </div>
      </div>
      <h3>${e.title}</h3>
      <p>${e.shortDescription}</p>
      <p class="small event-card__meta">${e.city} · ${e.location}</p>
      <a class="btn btn-secondary mt-24" data-wa-key="${e.whatsappKey}" data-wa-text="Mi interessa l'evento: ${e.title} del ${e.date}.">
        Prenota su WhatsApp
      </a>
    `,r.appendChild(t)}))}function h(){document.querySelectorAll(".nav").forEach(e=>{const t=e.querySelector(".nav__toggle"),a=e.querySelectorAll(".nav__link");t&&(t.addEventListener("click",()=>{const i=e.classList.toggle("nav--open");t.setAttribute("aria-expanded",i?"true":"false")}),a.forEach(i=>{i.addEventListener("click",()=>{e.classList.contains("nav--open")&&(e.classList.remove("nav--open"),t.setAttribute("aria-expanded","false"))})}))})}function v(){document.querySelectorAll("[data-testimonial-carousel]").forEach(e=>{const t=Array.from(e.querySelectorAll("[data-testimonial-slide]")),a=e.querySelector("[data-carousel-prev]"),i=e.querySelector("[data-carousel-next]");if(!t.length||!a||!i)return;let o=0;function n(s){t.forEach((c,l)=>{c.classList.toggle("testimonial-slide--active",l===s)})}a.addEventListener("click",()=>{o=(o-1+t.length)%t.length,n(o)}),i.addEventListener("click",()=>{o=(o+1)%t.length,n(o)}),setInterval(()=>{o=(o+1)%t.length,n(o)},1e4),n(o)})}document.querySelectorAll(".video-lazy").forEach(r=>{r.addEventListener("click",()=>{const e=r.dataset.videoId;r.innerHTML=`
      <iframe
        src="https://www.youtube.com/embed/${e}?autoplay=1"
        title="Video testimonianza – percorso Unity Connection"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    `})});document.addEventListener("DOMContentLoaded",()=>{m(),f(),u(),h(),v()});
