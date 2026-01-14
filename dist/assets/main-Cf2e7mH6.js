(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const r of e.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function a(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function n(t){if(t.ep)return;t.ep=!0;const e=a(t);fetch(t.href,e)}})();const l="/assets/gold-SEzsD-wQ.png",u=`
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
`,m=`
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
`,c=[{id:"event_aurora_cerchio_maggio",title:"Cerchio “Aurora” · Armonizzazione per chi sta attraversando un cambiamento",type:"armonizzazione",mode:"online",locationLabel:"Online · Zoom",city:null,date:"2025-05-23",timeStart:"20:30",timeEnd:"22:00",durationMinutes:90,priceLabel:"30€",isHighlighted:!0,badgeLabel:"Armonizzazione di gruppo",description:"Un incontro di gruppo per alleggerire il peso emotivo, ritrovare centratura e sentirti sostenuta mentre attraversi una fase di passaggio nella tua vita.",bullets:["Centratura iniziale e condivisione delle intenzioni.","Armonizzazione energetica guidata per tutto il gruppo.","Spazio finale per integrare ciò che è emerso e fare domande."],whatsappKey:"event_event_aurora_cerchio_maggio",image:"/assets/images/eventi/cerchio-aurora.jpg"},{id:"event_cerchio_presenza_giugno",title:"Cerchio di presenza e radicamento “Sorgente”",type:"cerchio",mode:"presenza",locationLabel:"In presenza · Venezia",city:"Venezia",date:"2025-06-08",timeStart:"10:00",timeEnd:"12:30",durationMinutes:150,priceLabel:"45€",isHighlighted:!1,badgeLabel:"Cerchio di presenza",description:"Una mattinata dedicata al corpo, al respiro e alla condivisione autentica, per tornare a sentire stabilità dentro di te, al di là delle richieste esterne.",bullets:[],whatsappKey:"event_event_cerchio_presenza_giugno",image:"/assets/images/eventi/cerchio-presenza.jpg"},{id:"event_special_solstizio",title:"Rituale di solstizio d’estate · Rilasciare il vecchio, accogliere il nuovo",type:"speciale",mode:"online",locationLabel:"Online · Zoom",city:null,date:"2025-06-21",timeStart:"21:00",timeEnd:"22:30",durationMinutes:90,priceLabel:"33€",isHighlighted:!1,badgeLabel:"Speciale solstizio",description:"Un evento speciale per chiudere un ciclo, lasciare andare ciò che appesantisce e scegliere consapevolmente quali energie portare con sé nella nuova stagione.",bullets:[],whatsappKey:"event_event_special_solstizio",image:"/assets/images/eventi/solstizio.jpg"},{id:"event_cerchio_luna_nuova_ottobre",title:"Cerchio di Luna Nuova · Intenzioni & ascolto di sé",type:"cerchio",mode:"presenza",locationLabel:"In presenza · Milano",city:"Milano",date:"2025-10-02",timeStart:"20:00",timeEnd:"22:00",durationMinutes:120,priceLabel:"30€",isHighlighted:!1,badgeLabel:"Cerchio di luna",description:"Un cerchio serale per fermarti, ascoltare ciò che si muove dentro e piantare nuove intenzioni in linea con ciò che senti davvero.",bullets:["Momento di condivisione iniziale e centratura.","Pratica guidata per ascoltare desideri e bisogni del nuovo ciclo.","Ritualità semplice per radicare le tue intenzioni."],whatsappKey:"event_event_cerchio_luna_nuova_ottobre",image:"/assets/images/eventi/cerchio-luna-nuova.jpg"},{id:"event_armonizzazione_mensile_online",title:"Armonizzazione mensile · Pulizia energetica & radicamento",type:"armonizzazione",mode:"online",locationLabel:"Online · Zoom",city:null,date:"2025-10-20",timeStart:"21:00",timeEnd:"22:15",durationMinutes:75,priceLabel:"25€",isHighlighted:!1,badgeLabel:"Armonizzazione mensile",description:"Un appuntamento mensile per scaricare il peso accumulato, alleggerire mente e corpo e ritrovare una base di presenza da cui ripartire.",bullets:["Per chi si sente spesso sovraccarica e drenata.","Lavoro energetico mirato su pulizia e centratura.","Spazio finale breve per integrare ciò che emerge."],whatsappKey:"event_event_armonizzazione_mensile_online",image:"/assets/images/eventi/armonizzazione-mensile.jpg"},{id:"event_cerchio_donne_ascolto",title:"Cerchio di donne · Ascolto, parola & sostegno reciproco",type:"cerchio",mode:"presenza",locationLabel:"In presenza · Padova",city:"Padova",date:"2025-11-09",timeStart:"15:00",timeEnd:"18:00",durationMinutes:180,priceLabel:"40€",isHighlighted:!1,badgeLabel:"Cerchio di donne",description:"Uno spazio intimo di parola, ascolto e presenza per condividere ciò che stai vivendo senza sentirti giudicata o “troppo”.",bullets:["Per chi sente il bisogno di non attraversare da sola questo momento.","Cerchio in piccolo gruppo, con tempi morbidi e rispettosi.","Lavoro su ascolto di sé, confini e sostegno reciproco."],whatsappKey:"event_event_cerchio_donne_ascolto",image:"/assets/images/eventi/cerchio-donne.jpg"},{id:"event_special_equinox_autunno",title:"Rituale di Equinozio d’autunno · Equilibrio tra luce e ombra",type:"speciale",mode:"online",locationLabel:"Online · Zoom",city:null,date:"2025-09-22",timeStart:"20:30",timeEnd:"22:00",durationMinutes:90,priceLabel:"33€",isHighlighted:!1,badgeLabel:"Rituale stagionale",description:"Un rituale collettivo per onorare ciò che si sta chiudendo, accogliere l’autunno e riequilibrare luce e ombra dentro di te.",bullets:["Per chi vive cambiamenti interni in questo periodo dell’anno.","Pratiche di radicamento, respiro e visualizzazione.","Ritualità semplice per portare l’equinozio nella vita quotidiana."],whatsappKey:"event_event_special_equinox_autunno",image:"/assets/images/eventi/equinozio-autunno.jpg"},{id:"event_reiki_gruppo_inverno",title:"Reiki di gruppo · Riposo & rigenerazione invernale",type:"armonizzazione",mode:"online",locationLabel:"Online · Zoom",city:null,date:"2025-12-12",timeStart:"21:00",timeEnd:"22:00",durationMinutes:60,priceLabel:"22€",isHighlighted:!1,badgeLabel:"Reiki di gruppo",description:"Un trattamento Reiki collettivo per rallentare, lasciare andare la stanchezza dell’anno e prepararti al nuovo con più leggerezza.",bullets:["Per chi arriva a fine anno scarica, confusa o molto stanca.","Trattamento Reiki a distanza in piccolo gruppo.","Spazio per integrare sensazioni e messaggi del corpo."],whatsappKey:"event_event_reiki_gruppo_inverno",image:"/assets/images/eventi/reiki-gruppo-inverno.jpg"},{id:"event_seminario_confini_energia",title:"Seminario esperienziale · Confini & energia nelle relazioni",type:"speciale",mode:"presenza",locationLabel:"In presenza · Bologna",city:"Bologna",date:"2025-11-23",timeStart:"10:00",timeEnd:"17:00",durationMinutes:420,priceLabel:"90€",isHighlighted:!1,badgeLabel:"Seminario intensivo",description:"Una giornata di lavoro esperienziale per riconoscere dove e come perdi energia nelle relazioni, e come creare confini più sani.",bullets:["Per chi si sente spesso svuotata dopo le interazioni con gli altri.","Lavoro su consapevolezza dei propri limiti e bisogni.","Strumenti pratici da portare nella vita quotidiana."],whatsappKey:"event_event_seminario_confini_energia",image:"/assets/images/eventi/seminario-confini.jpg"}],g="+393494157836",v={home_general:"Ciao! Vorrei avere più informazioni sui tuoi percorsi e consulenze.",home_services:"Ciao! Vorrei scoprire meglio i tuoi servizi.",home_micro_fit:"Ciao! Vorrei capire se il tuo percorso è giusto per me.",home_unity:"Ciao! Vorrei prenotare o avere informazioni su Unity Connection.",home_testimonials:"Ciao! Vorrei iniziare il mio percorso con te.",home_final:"Ciao! Voglio iniziare il mio percorso verso più presenza e centratura.",eventi_generic:"Ciao! Vorrei informazioni sui prossimi eventi e cerchi.",event_generic:"Ciao! Vorrei partecipare a uno dei tuoi eventi.",chi_sono_generic:"Ciao! Ho letto la tua storia e vorrei capire come puoi aiutarmi.",unity_info:"Ciao! Vorrei informazioni su Unity Connection.",unity_booking:"Ciao! Vorrei prenotare una sessione Unity Connection.",percorsi_guide:"Ciao! Vorrei una guida per capire qual è il percorso più adatto a me.",reiki_info:"Ciao! Vorrei avere maggiori informazioni sui percorsi e trattamenti Reiki.",contatti_generic:"Ciao! Vorrei maggiori informazioni sui tuoi servizi e disponibilità.",chi_sono_percorso:"Ciao, ti scrivo dalla pagina Chi sono, sezione Il mio percorso.",chi_sono_approccio:"Ciao, ti scrivo dalla pagina Chi sono, sezione approccio olistico.",chi_sono_missione:"Ciao, ti scrivo dalla pagina Chi sono, sezione La mia missione."};function h(){document.querySelectorAll("[data-wa-key]").forEach(i=>{const a=i.getAttribute("data-wa-key"),n=i.getAttribute("data-wa-text"),t=v[a]||"",e=n?`${t} ${n}`.trim():t,r=encodeURIComponent(e||"Ciao!"),s=`https://wa.me/${g}?text=${r}`;i.tagName.toLowerCase()==="a"?(i.href=s,i.target="_blank",i.rel="noopener noreferrer"):i.addEventListener("click",()=>window.open(s,"_blank","noopener,noreferrer"))})}function _(){const o=document.getElementById("home-events-list");if(!o||!Array.isArray(c))return;const i=c.slice(0,3);o.innerHTML="",i.forEach(a=>{const n=a.shortDescription||a.description||"",t=a.locationLabel||[a.city,a.location].filter(Boolean).join(" · "),e=document.createElement("article");e.className="card event-card",e.innerHTML=`
      <div class="event-card__header">
        <div class="event-card__date">
          <span class="event-card__day">${a.date.slice(8,10)}</span>
          <span class="event-card__month">${a.date.slice(5,7)}</span>
        </div>
      </div>
      <h3>${a.title}</h3>
      <p>${n}</p>
      <p class="small event-card__meta">${t}</p>
      <a class="btn btn-secondary mt-24"
         data-wa-key="${a.whatsappKey}"
         data-wa-text="Mi interessa l'evento: ${a.title} del ${a.date}.">
        Prenota su WhatsApp
      </a>
    `,o.appendChild(e)})}function f(){const o=document.querySelector(".nav");if(!o)return;const i=o.querySelector(".nav__toggle");if(!i)return;const a=o.querySelectorAll(".nav__link");i.addEventListener("click",()=>{const n=o.classList.toggle("nav--open");i.setAttribute("aria-expanded",n)}),a.forEach(n=>n.addEventListener("click",()=>{o.classList.remove("nav--open"),i.setAttribute("aria-expanded","false")}))}function z(){document.querySelectorAll("[data-testimonial-carousel]").forEach(i=>{const a=Array.from(i.querySelectorAll("[data-testimonial-slide]")),n=i.querySelector("[data-carousel-prev]"),t=i.querySelector("[data-carousel-next]");if(!a.length)return;let e=0;function r(s){a.forEach((d,p)=>{d.classList.toggle("testimonial-slide--active",p===s)})}n?.addEventListener("click",()=>{e=(e-1+a.length)%a.length,r(e)}),t?.addEventListener("click",()=>{e=(e+1)%a.length,r(e)}),setInterval(()=>{e=(e+1)%a.length,r(e)},1e4),r(e)})}function b(){document.querySelectorAll(".video-lazy").forEach(o=>{o.addEventListener("click",()=>{const i=o.dataset.videoId;o.innerHTML=`
        <iframe
          src="https://www.youtube.com/embed/${i}?autoplay=1"
          title="Video"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      `})})}document.addEventListener("DOMContentLoaded",()=>{const o=document.querySelector("[data-site-header]");o&&(o.outerHTML=u);const i=document.querySelector("[data-site-footer]");i&&(i.outerHTML=m),f(),_(),h(),z(),b()});export{c as e};
