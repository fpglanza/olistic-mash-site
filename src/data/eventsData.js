export const eventsData = [
  {
    id: "event_aurora_cerchio_maggio",
    title: "Cerchio “Aurora” · Armonizzazione per chi sta attraversando un cambiamento",
    type: "armonizzazione", // armonizzazione | cerchio | speciale
    mode: "online",         // online | presenza
    locationLabel: "Online · Zoom",
    city: null,
    date: "2025-05-23",     // ISO per futura logica
    timeStart: "20:30",
    timeEnd: "22:00",
    durationMinutes: 90,
    priceLabel: "30€",
    isHighlighted: true,
    badgeLabel: "Armonizzazione di gruppo",
    description:
      "Un incontro di gruppo per alleggerire il peso emotivo, ritrovare centratura e sentirti sostenuta mentre attraversi una fase di passaggio nella tua vita.",
    bullets: [
      "Centratura iniziale e condivisione delle intenzioni.",
      "Armonizzazione energetica guidata per tutto il gruppo.",
      "Spazio finale per integrare ciò che è emerso e fare domande."
    ],
    whatsappKey: "event_event_aurora_cerchio_maggio",
    image: "/assets/images/eventi/cerchio-aurora.jpg"
  },
  {
    id: "event_cerchio_presenza_giugno",
    title: "Cerchio di presenza e radicamento “Sorgente”",
    type: "cerchio",
    mode: "presenza",
    locationLabel: "In presenza · Venezia",
    city: "Venezia",
    date: "2025-06-08",
    timeStart: "10:00",
    timeEnd: "12:30",
    durationMinutes: 150,
    priceLabel: "45€",
    isHighlighted: false,
    badgeLabel: "Cerchio di presenza",
    description:
      "Una mattinata dedicata al corpo, al respiro e alla condivisione autentica, per tornare a sentire stabilità dentro di te, al di là delle richieste esterne.",
    bullets: [],
    whatsappKey: "event_event_cerchio_presenza_giugno",
    image: "/assets/images/eventi/cerchio-presenza.jpg"
  },
  {
    id: "event_special_solstizio",
    title: "Rituale di solstizio d’estate · Rilasciare il vecchio, accogliere il nuovo",
    type: "speciale",
    mode: "online",
    locationLabel: "Online · Zoom",
    city: null,
    date: "2025-06-21",
    timeStart: "21:00",
    timeEnd: "22:30",
    durationMinutes: 90,
    priceLabel: "33€",
    isHighlighted: false,
    badgeLabel: "Speciale solstizio",
    description:
      "Un evento speciale per chiudere un ciclo, lasciare andare ciò che appesantisce e scegliere consapevolmente quali energie portare con sé nella nuova stagione.",
    bullets: [],
    whatsappKey: "event_event_special_solstizio",
    image: "/assets/images/eventi/solstizio.jpg"
  },

  // 🔽 NUOVI EVENTI 🔽

  {
    id: "event_cerchio_luna_nuova_ottobre",
    title: "Cerchio di Luna Nuova · Intenzioni & ascolto di sé",
    type: "cerchio",
    mode: "presenza",
    locationLabel: "In presenza · Milano",
    city: "Milano",
    date: "2025-10-02",
    timeStart: "20:00",
    timeEnd: "22:00",
    durationMinutes: 120,
    priceLabel: "30€",
    isHighlighted: false,
    badgeLabel: "Cerchio di luna",
    description:
      "Un cerchio serale per fermarti, ascoltare ciò che si muove dentro e piantare nuove intenzioni in linea con ciò che senti davvero.",
    bullets: [
      "Momento di condivisione iniziale e centratura.",
      "Pratica guidata per ascoltare desideri e bisogni del nuovo ciclo.",
      "Ritualità semplice per radicare le tue intenzioni."
    ],
    whatsappKey: "event_event_cerchio_luna_nuova_ottobre",
    image: "/assets/images/eventi/cerchio-luna-nuova.jpg"
  },
  {
    id: "event_armonizzazione_mensile_online",
    title: "Armonizzazione mensile · Pulizia energetica & radicamento",
    type: "armonizzazione",
    mode: "online",
    locationLabel: "Online · Zoom",
    city: null,
    date: "2025-10-20",
    timeStart: "21:00",
    timeEnd: "22:15",
    durationMinutes: 75,
    priceLabel: "25€",
    isHighlighted: false,
    badgeLabel: "Armonizzazione mensile",
    description:
      "Un appuntamento mensile per scaricare il peso accumulato, alleggerire mente e corpo e ritrovare una base di presenza da cui ripartire.",
    bullets: [
      "Per chi si sente spesso sovraccarica e drenata.",
      "Lavoro energetico mirato su pulizia e centratura.",
      "Spazio finale breve per integrare ciò che emerge."
    ],
    whatsappKey: "event_event_armonizzazione_mensile_online",
    image: "/assets/images/eventi/armonizzazione-mensile.jpg"
  },
  {
    id: "event_cerchio_donne_ascolto",
    title: "Cerchio di donne · Ascolto, parola & sostegno reciproco",
    type: "cerchio",
    mode: "presenza",
    locationLabel: "In presenza · Padova",
    city: "Padova",
    date: "2025-11-09",
    timeStart: "15:00",
    timeEnd: "18:00",
    durationMinutes: 180,
    priceLabel: "40€",
    isHighlighted: false,
    badgeLabel: "Cerchio di donne",
    description:
      "Uno spazio intimo di parola, ascolto e presenza per condividere ciò che stai vivendo senza sentirti giudicata o “troppo”.",
    bullets: [
      "Per chi sente il bisogno di non attraversare da sola questo momento.",
      "Cerchio in piccolo gruppo, con tempi morbidi e rispettosi.",
      "Lavoro su ascolto di sé, confini e sostegno reciproco."
    ],
    whatsappKey: "event_event_cerchio_donne_ascolto",
    image: "/assets/images/eventi/cerchio-donne.jpg"
  },
  {
    id: "event_special_equinox_autunno",
    title: "Rituale di Equinozio d’autunno · Equilibrio tra luce e ombra",
    type: "speciale",
    mode: "online",
    locationLabel: "Online · Zoom",
    city: null,
    date: "2025-09-22",
    timeStart: "20:30",
    timeEnd: "22:00",
    durationMinutes: 90,
    priceLabel: "33€",
    isHighlighted: false,
    badgeLabel: "Rituale stagionale",
    description:
      "Un rituale collettivo per onorare ciò che si sta chiudendo, accogliere l’autunno e riequilibrare luce e ombra dentro di te.",
    bullets: [
      "Per chi vive cambiamenti interni in questo periodo dell’anno.",
      "Pratiche di radicamento, respiro e visualizzazione.",
      "Ritualità semplice per portare l’equinozio nella vita quotidiana."
    ],
    whatsappKey: "event_event_special_equinox_autunno",
    image: "/assets/images/eventi/equinozio-autunno.jpg"
  },
  {
    id: "event_reiki_gruppo_inverno",
    title: "Reiki di gruppo · Riposo & rigenerazione invernale",
    type: "armonizzazione",
    mode: "online",
    locationLabel: "Online · Zoom",
    city: null,
    date: "2025-12-12",
    timeStart: "21:00",
    timeEnd: "22:00",
    durationMinutes: 60,
    priceLabel: "22€",
    isHighlighted: false,
    badgeLabel: "Reiki di gruppo",
    description:
      "Un trattamento Reiki collettivo per rallentare, lasciare andare la stanchezza dell’anno e prepararti al nuovo con più leggerezza.",
    bullets: [
      "Per chi arriva a fine anno scarica, confusa o molto stanca.",
      "Trattamento Reiki a distanza in piccolo gruppo.",
      "Spazio per integrare sensazioni e messaggi del corpo."
    ],
    whatsappKey: "event_event_reiki_gruppo_inverno",
    image: "/assets/images/eventi/reiki-gruppo-inverno.jpg"
  },
  {
    id: "event_seminario_confini_energia",
    title: "Seminario esperienziale · Confini & energia nelle relazioni",
    type: "speciale",
    mode: "presenza",
    locationLabel: "In presenza · Bologna",
    city: "Bologna",
    date: "2025-11-23",
    timeStart: "10:00",
    timeEnd: "17:00",
    durationMinutes: 420,
    priceLabel: "90€",
    isHighlighted: false,
    badgeLabel: "Seminario intensivo",
    description:
      "Una giornata di lavoro esperienziale per riconoscere dove e come perdi energia nelle relazioni, e come creare confini più sani.",
    bullets: [
      "Per chi si sente spesso svuotata dopo le interazioni con gli altri.",
      "Lavoro su consapevolezza dei propri limiti e bisogni.",
      "Strumenti pratici da portare nella vita quotidiana."
    ],
    whatsappKey: "event_event_seminario_confini_energia",
    image: "/assets/images/eventi/seminario-confini.jpg"
  }
];
