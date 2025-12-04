(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const t of a)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function i(a){const t={};return a.integrity&&(t.integrity=a.integrity),a.referrerPolicy&&(t.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?t.credentials="include":a.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(a){if(a.ep)return;a.ep=!0;const t=i(a);fetch(a.href,t)}})();const d=`
<header class="site-header">
  <div class="nav container">
    
    <!-- MOBILE TOP BAR: centered logo + hamburger -->
    <div class="nav__mobile flex items-center justify-center gap-4 w-full md:hidden">
      <a href="index.html" class="nav__logo">
        <img src="assets/img/logo.png" alt="Logo" class="nav__logo-img" />
      </a>

      <button
        class="nav__toggle"
        type="button"
        aria-label="Apri il menu di navigazione"
        aria-expanded="false"
      >
        <span class="nav__toggle-lines">
          <span class="nav__toggle-line"></span>
          <span class="nav__toggle-line"></span>
          <span class="nav__toggle-line"></span>
        </span>
      </button>
    </div>

    <!-- DESKTOP NAV: centered with logo in the middle -->
    <nav class="nav__desktop hidden md:flex items-center justify-center w-full">
      <ul class="nav__desktop-left flex items-center gap-6">
        <li><a class="nav__link" href="index.html#hero">Home</a></li>
        <li><a class="nav__link" href="chi-sono.html">Chi sono</a></li>
        <li><a class="nav__link" href="consulenze-unity.html">Consulenze</a></li>
      </ul>

      <!-- Center logo -->
      <a href="index.html" class="nav__logo mx-10">
        <img src="assets/img/logo.png" alt="Logo" class="nav__logo-img" />
      </a>

      <ul class="nav__desktop-right flex items-center gap-6">
        <li><a class="nav__link" href="eventi-gruppi.html">Eventi</a></li>
        <li><a class="nav__link" href="percorsi-reiki.html">Percorsi</a></li>
        <li><a class="nav__link" href="contatti.html">Contatti</a></li>
      </ul>
    </nav>

    <!-- MOBILE DROPDOWN MENU (reuses your existing .nav__links styles) -->
    <nav aria-label="Navigazione mobile" class="md:hidden">
      <ul class="nav__links">
        <li><a class="nav__link" href="index.html#hero">Home</a></li>
        <li><a class="nav__link" href="chi-sono.html">Chi sono</a></li>
        <li><a class="nav__link" href="consulenze-unity.html">Consulenze</a></li>
        <li><a class="nav__link" href="eventi-gruppi.html">Eventi & Gruppi</a></li>
        <li><a class="nav__link" href="percorsi-reiki.html">Percorsi & Reiki</a></li>
        <li><a class="nav__link" href="contatti.html">Contatti</a></li>
      </ul>
    </nav>

  </div>
</header>
`,u=`
<footer class="site-footer">
  <div class="container">
    <p class="small text-center">
      © 2025 Coach Olistica – Tutti i diritti riservati.
      <span class="tw-pill ml-2">
        Tailwind attivo
      </span>
    </p>
  </div>
</footer>
`,p="+393343421236",m={home_general:"Ciao! Vorrei avere più informazioni sui tuoi percorsi e consulenze.",home_services:"Ciao! Vorrei scoprire meglio i tuoi servizi.",home_micro_fit:"Ciao! Vorrei capire se il tuo percorso è giusto per me.",home_unity:"Ciao! Vorrei prenotare o avere informazioni su Unity Connection.",home_testimonials:"Ciao! Vorrei iniziare il mio percorso con te.",home_final:"Ciao! Voglio iniziare il mio percorso verso più presenza e centratura.",eventi_generic:"Ciao! Vorrei informazioni sui prossimi eventi e cerchi.",event_generic:"Ciao! Vorrei partecipare a uno dei tuoi eventi.",chi_sono_generic:"Ciao! Ho letto la tua storia e vorrei capire come puoi aiutarmi.",unity_info:"Ciao! Vorrei informazioni su Unity Connection.",unity_booking:"Ciao! Vorrei prenotare una sessione Unity Connection.",percorsi_guide:"Ciao! Vorrei una guida per capire qual è il percorso più adatto a me.",reiki_info:"Ciao! Vorrei avere maggiori informazioni sui percorsi e trattamenti Reiki.",contatti_generic:"Ciao! Vorrei maggiori informazioni sui tuoi servizi e disponibilità.",chi_sono_percorso:"Ciao, ti scrivo dalla pagina Chi sono, sezione Il mio percorso.",chi_sono_approccio:"Ciao, ti scrivo dalla pagina Chi sono, sezione approccio olistico.",chi_sono_missione:"Ciao, ti scrivo dalla pagina Chi sono, sezione La mia missione."};function h(){document.querySelectorAll("[data-wa-key]").forEach(e=>{const i=e.getAttribute("data-wa-key"),n=e.getAttribute("data-wa-text"),a=m[i]||"",t=n?`${a} ${n}`.trim():a,s=encodeURIComponent(t||"Ciao!"),r=`https://wa.me/${p}?text=${s}`;e.tagName.toLowerCase()==="a"?(e.setAttribute("href",r),e.setAttribute("target","_blank"),e.setAttribute("rel","noopener noreferrer")):e.addEventListener("click",()=>{window.open(r,"_blank","noopener,noreferrer")})})}function _(){const o=document.getElementById("home-events-list");if(!o||typeof eventsData>"u"||!Array.isArray(eventsData))return;const e=eventsData.slice(0,3);o.innerHTML="",e.forEach(i=>{const n=document.createElement("article");n.className="card event-card",n.innerHTML=`
      <div class="event-card__header">
        <div class="event-card__date">
          <span class="event-card__day">${i.date.slice(8,10)}</span>
          <span class="event-card__month">${i.date.slice(5,7)}</span>
        </div>
      </div>
      <h3>${i.title}</h3>
      <p>${i.shortDescription}</p>
      <p class="small event-card__meta">${i.city} · ${i.location}</p>
      <a class="btn btn-secondary mt-24" data-wa-key="${i.whatsappKey}" data-wa-text="Mi interessa l'evento: ${i.title} del ${i.date}.">
        Prenota su WhatsApp
      </a>
    `,o.appendChild(n)})}function v(){const o=document.getElementById("events-list");!o||typeof eventsData>"u"||!Array.isArray(eventsData)||(o.innerHTML="",eventsData.forEach(e=>{const i=document.createElement("article");i.className="card event-card",i.innerHTML=`
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
    `,o.appendChild(i)}))}function f(){const o=document.querySelector(".nav");if(!o)return;const e=o.querySelector(".nav__toggle"),i=o.querySelectorAll(".nav__link");e&&(e.addEventListener("click",()=>{const n=o.classList.toggle("nav--open");e.setAttribute("aria-expanded",n?"true":"false")}),i.forEach(n=>{n.addEventListener("click",()=>{o.classList.remove("nav--open"),e.setAttribute("aria-expanded","false")})}))}function g(){document.querySelectorAll("[data-testimonial-carousel]").forEach(e=>{const i=Array.from(e.querySelectorAll("[data-testimonial-slide]")),n=e.querySelector("[data-carousel-prev]"),a=e.querySelector("[data-carousel-next]");if(!i.length||!n||!a)return;let t=0;function s(r){i.forEach((l,c)=>{l.classList.toggle("testimonial-slide--active",c===r)})}n.addEventListener("click",()=>{t=(t-1+i.length)%i.length,s(t)}),a.addEventListener("click",()=>{t=(t+1)%i.length,s(t)}),setInterval(()=>{t=(t+1)%i.length,s(t)},1e4),s(t)})}function y(){document.querySelectorAll(".video-lazy").forEach(e=>{e.addEventListener("click",()=>{const i=e.dataset.videoId;e.innerHTML=`
        <iframe
          src="https://www.youtube.com/embed/${i}?autoplay=1"
          title="Video testimonianza – percorso Unity Connection"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      `})})}document.addEventListener("DOMContentLoaded",()=>{const o=document.querySelector("[data-site-header]");o&&(o.outerHTML=d);const e=document.querySelector("[data-site-footer]");e&&(e.outerHTML=u),f(),_(),v(),h(),g(),y()});
