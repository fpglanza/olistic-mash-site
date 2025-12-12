(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const t of o)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function i(o){const t={};return o.integrity&&(t.integrity=o.integrity),o.referrerPolicy&&(t.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?t.credentials="include":o.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(o){if(o.ep)return;o.ep=!0;const t=i(o);fetch(o.href,t)}})();const l="data:image/png;base64,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",m=`
<header class="site-header">
  <div class="nav container">
    
    <!-- MOBILE TOP BAR -->
    <div class="nav__mobile flex items-center justify-center gap-4 w-full md:hidden">
      <a href="index.html" class="nav__logo">
        <img src="${l}" alt="Logo" class="nav__logo-img" />
      </a>

      <button
        class="nav__toggle"
        type="button"
        aria-label="Apri il menu"
        aria-expanded="false"
      >
        <span class="nav__toggle-lines">
          <span class="nav__toggle-line"></span>
          <span class="nav__toggle-line"></span>
          <span class="nav__toggle-line"></span>
        </span>
      </button>
    </div>

    <!-- DESKTOP NAVBAR (logo al centro) -->
    <nav class="nav__desktop hidden md:flex items-center justify-center w-full">
      <ul class="nav__desktop-left flex items-center gap-6">
        <li><a class="nav__link" href="index.html#hero">Home</a></li>
        <li><a class="nav__link" href="chi-sono.html">Chi sono</a></li>
        <li><a class="nav__link" href="consulenze-unity.html">Consulenze</a></li>
      </ul>

      <a href="index.html" class="nav__logo mx-10">
        <img src="${l}" alt="Logo" class="nav__logo-img" />
      </a>

      <ul class="nav__desktop-right flex items-center gap-6">
        <li><a class="nav__link" href="eventi-gruppi.html">Eventi</a></li>
        <li><a class="nav__link" href="percorsi-reiki.html">Percorsi</a></li>
        <li><a class="nav__link" href="contatti.html">Contatti</a></li>
      </ul>
    </nav>

    <!-- MOBILE DROPDOWN MENU (must be direct child of .nav) -->
    <ul class="nav__links md:hidden">
      <li><a class="nav__link" href="index.html#hero">Home</a></li>
      <li><a class="nav__link" href="chi-sono.html">Chi sono</a></li>
      <li><a class="nav__link" href="consulenze-unity.html">Consulenze</a></li>
      <li><a class="nav__link" href="eventi-gruppi.html">Eventi & Gruppi</a></li>
      <li><a class="nav__link" href="percorsi-reiki.html">Percorsi & Reiki</a></li>
      <li><a class="nav__link" href="contatti.html">Contatti</a></li>
    </ul>

  </div>
</header>
`,u=`
<footer class="site-footer py-10">
  <div class="container text-center">
    
    <p class="small opacity-80">
      © 2025 Coach Olistica – Tutti i diritti riservati.
    </p>

    <div class="mt-3">
      <span class="tw-pill inline-block">
        Tailwind attivo
      </span>
    </div>

  </div>
</footer>
`,p="+393494157836",h={home_general:"Ciao! Vorrei avere più informazioni sui tuoi percorsi e consulenze.",home_services:"Ciao! Vorrei scoprire meglio i tuoi servizi.",home_micro_fit:"Ciao! Vorrei capire se il tuo percorso è giusto per me.",home_unity:"Ciao! Vorrei prenotare o avere informazioni su Unity Connection.",home_testimonials:"Ciao! Vorrei iniziare il mio percorso con te.",home_final:"Ciao! Voglio iniziare il mio percorso verso più presenza e centratura.",eventi_generic:"Ciao! Vorrei informazioni sui prossimi eventi e cerchi.",event_generic:"Ciao! Vorrei partecipare a uno dei tuoi eventi.",chi_sono_generic:"Ciao! Ho letto la tua storia e vorrei capire come puoi aiutarmi.",unity_info:"Ciao! Vorrei informazioni su Unity Connection.",unity_booking:"Ciao! Vorrei prenotare una sessione Unity Connection.",percorsi_guide:"Ciao! Vorrei una guida per capire qual è il percorso più adatto a me.",reiki_info:"Ciao! Vorrei avere maggiori informazioni sui percorsi e trattamenti Reiki.",contatti_generic:"Ciao! Vorrei maggiori informazioni sui tuoi servizi e disponibilità.",chi_sono_percorso:"Ciao, ti scrivo dalla pagina Chi sono, sezione Il mio percorso.",chi_sono_approccio:"Ciao, ti scrivo dalla pagina Chi sono, sezione approccio olistico.",chi_sono_missione:"Ciao, ti scrivo dalla pagina Chi sono, sezione La mia missione."};function g(){document.querySelectorAll("[data-wa-key]").forEach(e=>{const i=e.getAttribute("data-wa-key"),n=e.getAttribute("data-wa-text"),o=h[i]||"",t=n?`${o} ${n}`.trim():o,r=encodeURIComponent(t||"Ciao!"),s=`https://wa.me/${p}?text=${r}`;e.tagName.toLowerCase()==="a"?(e.href=s,e.target="_blank",e.rel="noopener noreferrer"):e.addEventListener("click",()=>window.open(s,"_blank","noopener,noreferrer"))})}function f(){const a=document.getElementById("home-events-list");if(!a||!Array.isArray(window.eventsData))return;const e=window.eventsData.slice(0,3);a.innerHTML="",e.forEach(i=>{const n=document.createElement("article");n.className="card event-card",n.innerHTML=`
      <div class="event-card__header">
        <div class="event-card__date">
          <span class="event-card__day">${i.date.slice(8,10)}</span>
          <span class="event-card__month">${i.date.slice(5,7)}</span>
        </div>
      </div>
      <h3>${i.title}</h3>
      <p>${i.shortDescription}</p>
      <p class="small event-card__meta">${i.city} · ${i.location}</p>
      <a class="btn btn-secondary mt-24"
         data-wa-key="${i.whatsappKey}"
         data-wa-text="Mi interessa l'evento: ${i.title} del ${i.date}.">
        Prenota su WhatsApp
      </a>
    `,a.appendChild(n)})}function v(){const a=document.getElementById("events-list");!a||!Array.isArray(window.eventsData)||(a.innerHTML="",window.eventsData.forEach(e=>{const i=document.createElement("article");i.className="card event-card",i.innerHTML=`
      <div class="event-card__header">
        <div class="event-card__date">
          <span class="event-card__day">${e.date.slice(8,10)}</span>
          <span class="event-card__month">${e.date.slice(5,7)}</span>
        </div>
      </div>
      <h3>${e.title}</h3>
      <p>${e.shortDescription}</p>
      <p class="small event-card__meta">${e.city} · ${e.location}</p>
      <a class="btn btn-secondary mt-24"
         data-wa-key="${e.whatsappKey}"
         data-wa-text="Mi interessa l'evento: ${e.title} del ${e.date}.">
        Prenota su WhatsApp
      </a>
    `,a.appendChild(i)}))}function A(){const a=document.querySelector(".nav");if(!a)return;const e=a.querySelector(".nav__toggle");if(!e)return;const i=a.querySelectorAll(".nav__link");e.addEventListener("click",()=>{const n=a.classList.toggle("nav--open");e.setAttribute("aria-expanded",n)}),i.forEach(n=>n.addEventListener("click",()=>{a.classList.remove("nav--open"),e.setAttribute("aria-expanded","false")}))}function y(){document.querySelectorAll("[data-testimonial-carousel]").forEach(e=>{const i=Array.from(e.querySelectorAll("[data-testimonial-slide]")),n=e.querySelector("[data-carousel-prev]"),o=e.querySelector("[data-carousel-next]");if(!i.length)return;let t=0;function r(s){i.forEach((c,d)=>{c.classList.toggle("testimonial-slide--active",d===s)})}n?.addEventListener("click",()=>{t=(t-1+i.length)%i.length,r(t)}),o?.addEventListener("click",()=>{t=(t+1)%i.length,r(t)}),setInterval(()=>{t=(t+1)%i.length,r(t)},1e4),r(t)})}function C(){document.querySelectorAll(".video-lazy").forEach(a=>{a.addEventListener("click",()=>{const e=a.dataset.videoId;a.innerHTML=`
        <iframe
          src="https://www.youtube.com/embed/${e}?autoplay=1"
          title="Video"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      `})})}document.addEventListener("DOMContentLoaded",()=>{const a=document.querySelector("[data-site-header]");a&&(a.outerHTML=m);const e=document.querySelector("[data-site-footer]");e&&(e.outerHTML=u),A(),f(),v(),g(),y(),C()});
