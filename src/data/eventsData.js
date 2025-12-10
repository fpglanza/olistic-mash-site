// src/data/eventsData.js

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
  }
];
