// i18n + tour data
const I18N = {
  en: {
    nav: { tours: "Tours", about: "About", services: "Services", journal: "Journal", book: "Book a tour" },
    hero: {
      eyebrow: "CDMX · Slow tours, sharp eyes",
      h1a: "Mexico City,",
      h1b: "in",
      h1c: "good company",
      h1d: ".",
      lede: "Small-group e-bike rides, walking tours and day trips led by guides who actually live here. Three to four hours. No bus crowds. Real conversation.",
      ctaPrimary: "Browse tours",
      ctaGhost: "How we work",
      search: { tour: "Tour", date: "Date", people: "People", cta: "Find availability", any: "Any experience", today: "Pick a date", twoAdults: "2 adults" }
    },
    values: {
      eyebrow: "Why us",
      title: "Tours that don't feel like tours.",
      sub: "We're the operator. We hire the guides, design the routes, run the logistics. No middleman.",
      items: [
        { t: "Three to four hours", d: "Long enough to fall in love. Short enough to keep the rest of your day." },
        { t: "Locals, not narrators", d: "Our guides live in the neighborhoods they show you. They have favorite tacos." },
        { t: "Off the postcard", d: "Yes, we'll see the icons. We'll also show you the side streets nobody photographs." },
        { t: "Built for groups", d: "Birthdays, bachelorettes, brand offsites. We tailor the route to the room." }
      ]
    },
    catalog: {
      eyebrow: "The tours",
      title: "Pick your pace.",
      sub: "Four formats, one obsession with the city.",
      filters: ["All", "E-bike", "Walking", "Day trip", "New"]
    },
    editorial: {
      eyebrow: "Our approach",
      title: "We started this because the tours we kept seeing felt like assembly lines.",
      p1: "Buses with thirty strangers. Headsets. A flag. A guide reciting Wikipedia. We wanted something closer to how we'd actually show a friend the city — by bike where it makes sense, on foot when it doesn't, in a van when distance demands.",
      p2: "Every route is paced for a real conversation. Every stop earned its place. And every booking goes directly to a person on our team — no algorithm dispatch."
    },
    services: {
      eyebrow: "Beyond the tour",
      title: "Other things we do.",
      sub: "Same team, same standards.",
      items: [
        { t: "Airport transfers", d: "CDMX (MEX/NLU) to your hotel, in a clean car with a guide who'll point things out on the way." },
        { t: "Private guide by the day", d: "Open itinerary. We'll go where the day takes you — markets, museums, mezcalerías." },
        { t: "Custom group experiences", d: "Birthdays, retreats, brand activations. Tell us the brief, we'll build the day." }
      ]
    },
    testimonial: {
      eyebrow: "Notes from guests",
      quote: "The bike route through Roma and Condesa was the single best thing we did in the city. Our guide Mariana made it feel like we were riding with a friend who'd lived here forever.",
      name: "Hana K.",
      loc: "Brooklyn, NY · Mar 2026"
    },
    faq: {
      eyebrow: "Practical",
      title: "Questions, answered.",
      items: [
        { q: "How fit do I need to be for the e-bike tour?", a: "If you can stand on a bike and squeeze a brake, you're qualified. The motor does the climbing. We move at conversational pace and stop often." },
        { q: "What's your cancellation policy?", a: "Free cancellation up to 24 hours before. After that we charge a small fee to cover the guide's day. Weather cancellations are always free." },
        { q: "Can you accommodate dietary needs?", a: "Yes. The tours that include food (Girly Tour, custom routes) work around vegetarian, vegan, gluten-free, and most allergies. Tell us when you book." },
        { q: "Do you pick us up at the hotel?", a: "On day trips and airport transfers, yes. On bike and walking tours we meet at a starting point that makes the route work — usually a café you'll be glad to know about." },
        { q: "What languages?", a: "All our guides speak English and Spanish. French, Italian, German and Portuguese available with notice." }
      ]
    },
    footer: {
      tease: "Come ride with us.",
      teaseEm: "CDMX is waiting.",
      cta: "Book your tour",
      colTour: "Tours",
      colCompany: "Company",
      colHelp: "Help",
      copyright: "© 2026 Los Chillangos. CDMX, Mexico.",
      address: "Av. Álvaro Obregón 185, Roma Norte"
    },
    detail: {
      duration: "Duration",
      group: "Group size",
      meet: "Meeting point",
      lang: "Languages",
      level: "Difficulty",
      durVal: "3.5 hours",
      groupVal: "Up to 8",
      meetVal: "Café Avellaneda, Coyoacán",
      langVal: "EN · ES",
      levelVal: "Easy",
      headlineA: "The classic CDMX",
      headlineB: " ride.",
      sectionAbout: "About this ride",
      sectionItin: "Your afternoon",
      sectionIncl: "What's included",
      sectionMeet: "Meeting point",
      aboutP1: "We start in the leafy plazas of Coyoacán, weave through the canals of Chimalistac, slip into San Ángel for a market stop, then ride the bike lanes of Roma and Condesa until we hit Chapultepec at golden hour.",
      aboutP2: "It's a 14 km loop on quiet streets and dedicated lanes. Our e-bikes do the work on the climbs — most guests describe the effort as \"none.\" We stop every 25–30 minutes for context, photos, water, or a tlacoyo.",
      itin: [
        { t: "14:00", h: "Coyoacán's plazas", d: "Meet your guide and bikes at Café Avellaneda. Quick orientation, helmets, and a coffee for the road." },
        { t: "14:30", h: "Chimalistac & San Ángel", d: "Through one of the city's quietest neighborhoods, then a stop at the Saturday bazaar." },
        { t: "15:30", h: "Avenida Amsterdam", d: "Condesa's loop street, originally a horse track. We ride it slow." },
        { t: "16:30", h: "Chapultepec at golden hour", d: "We finish near the lake. Optional drinks at a rooftop the team likes." }
      ],
      includes: [
        "Premium e-bike (Riese & Müller)",
        "Helmet & gloves",
        "Bilingual guide (EN/ES)",
        "Bottled water + snack stop",
        "Photo set delivered next day",
        "Insurance"
      ],
      meetText: "We meet outside Café Avellaneda on Higuera, two blocks from Coyoacán's main plaza. Look for the pink Los Chillangos jersey."
    },
    booking: {
      steps: ["Date & time", "Group", "Cart", "Checkout", "Confirmed"],
      step1: { title: "Pick a date.", lede: "We run this tour Tuesday through Sunday. Fridays and weekends fill up two weeks ahead.", timeTitle: "Pick a time" },
      step2: { title: "Who's coming?", lede: "Up to 8 riders per tour. Kids 12+ welcome with a parent.", adult: { t: "Adults", d: "Ages 18 and up" }, teen: { t: "Teens", d: "Ages 12–17" }, addons: "Add-ons", privatize: { t: "Privatize this tour", d: "Have the guide and bikes to yourselves. +$140" } },
      step3: { title: "Your cart.", lede: "One last look before payment.", remove: "Remove", add: "Add another tour", code: "Promo code", cont: "Continue to checkout" },
      step4: { title: "Almost there.", lede: "We'll email your confirmation the moment payment clears.", contact: "Contact", payment: "Payment", card: "Credit card", oxxo: "OXXO Pay", first: "First name", last: "Last name", email: "Email", phone: "Phone (WhatsApp)", cardNum: "Card number", exp: "Expiry", cvc: "CVC", confirm: "Confirm and pay" },
      step5: { title: "You're going on a ride.", sub: "We sent your confirmation and meeting details to your inbox. Your guide will message you on WhatsApp the day before.", booking: "Booking", date: "Date", time: "Time", riders: "Riders", meet: "Meeting point", total: "Total paid", back: "Back to home", calendar: "Add to calendar" },
      summary: { tour: "Tour", date: "Date", time: "Time", riders: "Riders", subtotal: "Subtotal", fee: "Booking fee", total: "Total", from: "from", perPerson: "/ person" }
    },
    common: { from: "from", perPerson: "per person", duration: "Duration", group: "Group", new: "New", popular: "Most booked" }
  },
  es: {
    nav: { tours: "Tours", about: "Nosotros", services: "Servicios", journal: "Diario", book: "Reservar" },
    hero: {
      eyebrow: "CDMX · Tours pausados, mirada afilada",
      h1a: "La Ciudad",
      h1b: "en",
      h1c: "buena compañía",
      h1d: ".",
      lede: "Recorridos en bici eléctrica, caminatas y excursiones de medio día con guías que sí viven aquí. Tres o cuatro horas. Sin autobuses. Conversación de verdad.",
      ctaPrimary: "Ver tours",
      ctaGhost: "Cómo trabajamos",
      search: { tour: "Tour", date: "Fecha", people: "Personas", cta: "Ver disponibilidad", any: "Cualquier experiencia", today: "Elige fecha", twoAdults: "2 adultos" }
    },
    values: {
      eyebrow: "Por qué nosotros",
      title: "Tours que no se sienten como tours.",
      sub: "Operamos directo. Contratamos a las guías, diseñamos rutas, gestionamos logística. Sin intermediarios.",
      items: [
        { t: "Tres o cuatro horas", d: "Suficiente para enamorarse. Te dejamos el resto del día libre." },
        { t: "Locales, no narradores", d: "Las guías viven en los barrios que te muestran. Tienen sus tacos favoritos." },
        { t: "Fuera de la postal", d: "Sí, vemos los íconos. También las calles que nadie fotografía." },
        { t: "Hecho para grupos", d: "Cumpleaños, despedidas, offsites. Adaptamos la ruta al grupo." }
      ]
    },
    catalog: {
      eyebrow: "Los tours",
      title: "Elige tu ritmo.",
      sub: "Cuatro formatos, una obsesión por la ciudad.",
      filters: ["Todos", "Bici eléctrica", "Caminata", "Excursión", "Nuevo"]
    },
    editorial: {
      eyebrow: "Nuestro enfoque",
      title: "Empezamos esto porque los tours que veíamos se sentían como línea de ensamblaje.",
      p1: "Camiones con treinta desconocidos. Audífonos. Una bandera. Una guía recitando Wikipedia. Queríamos algo más cercano a cómo le mostraríamos la ciudad a un amigo: en bici cuando tiene sentido, a pie cuando no, en van cuando la distancia lo pide.",
      p2: "Cada ruta está pensada para una conversación real. Cada parada se ganó su lugar. Y cada reserva la atiende una persona del equipo — nada de algoritmos."
    },
    services: {
      eyebrow: "Más allá del tour",
      title: "Lo que también hacemos.",
      sub: "Mismo equipo, mismo estándar.",
      items: [
        { t: "Traslados aeropuerto", d: "CDMX (MEX/NLU) a tu hotel, en un coche limpio y con una guía que te cuenta la ciudad de camino." },
        { t: "Guía privada por día", d: "Itinerario abierto. Vamos donde el día nos lleve — mercados, museos, mezcalerías." },
        { t: "Experiencias a la medida", d: "Cumpleaños, retiros, activaciones de marca. Cuéntanos el brief, armamos el día." }
      ]
    },
    testimonial: {
      eyebrow: "Notas de visitantes",
      quote: "La ruta en bici por Roma y Condesa fue lo mejor que hicimos en la ciudad. Nuestra guía Mariana hizo que se sintiera como pasear con una amiga de toda la vida.",
      name: "Hana K.",
      loc: "Brooklyn, NY · Mar 2026"
    },
    faq: {
      eyebrow: "Lo práctico",
      title: "Preguntas, respondidas.",
      items: [
        { q: "¿Qué tan en forma hay que estar para el tour en bici?", a: "Si te puedes parar en una bici y apretar un freno, calificas. El motor hace las subidas. Vamos a ritmo de conversación y paramos a menudo." },
        { q: "¿Cuál es la política de cancelación?", a: "Cancelación gratis hasta 24 horas antes. Después cobramos una tarifa mínima para cubrir el día de la guía. Las cancelaciones por clima son siempre gratis." },
        { q: "¿Manejan restricciones alimentarias?", a: "Sí. Los tours con comida (Girly Tour, rutas a medida) funcionan con vegetariano, vegano, sin gluten y la mayoría de alergias. Avísanos al reservar." },
        { q: "¿Pasan por nosotros al hotel?", a: "En excursiones y traslados, sí. En tours de bici y caminata nos vemos en un punto de encuentro que hace funcionar la ruta — normalmente un café que te alegrará conocer." },
        { q: "¿Qué idiomas?", a: "Todas nuestras guías hablan español e inglés. Francés, italiano, alemán y portugués disponibles con anticipación." }
      ]
    },
    footer: {
      tease: "Ven a rodar con nosotras.",
      teaseEm: "CDMX te espera.",
      cta: "Reserva tu tour",
      colTour: "Tours",
      colCompany: "Empresa",
      colHelp: "Ayuda",
      copyright: "© 2026 Los Chillangos. CDMX, México.",
      address: "Av. Álvaro Obregón 185, Roma Norte"
    },
    detail: {
      duration: "Duración",
      group: "Tamaño del grupo",
      meet: "Punto de encuentro",
      lang: "Idiomas",
      level: "Dificultad",
      durVal: "3.5 horas",
      groupVal: "Hasta 8",
      meetVal: "Café Avellaneda, Coyoacán",
      langVal: "EN · ES",
      levelVal: "Fácil",
      headlineA: "La CDMX clásica,",
      headlineB: " en bici.",
      sectionAbout: "Sobre este tour",
      sectionItin: "Tu tarde",
      sectionIncl: "Qué incluye",
      sectionMeet: "Punto de encuentro",
      aboutP1: "Empezamos en las plazas de Coyoacán, atravesamos los canales de Chimalistac, paramos en San Ángel para visitar el mercado, y rodamos por las ciclovías de Roma y Condesa hasta llegar a Chapultepec a la hora dorada.",
      aboutP2: "Es un loop de 14 km por calles tranquilas y carriles dedicados. Las e-bikes se encargan de las subidas — la mayoría describe el esfuerzo como \"ninguno\". Paramos cada 25–30 minutos para contexto, fotos, agua, o un tlacoyo.",
      itin: [
        { t: "14:00", h: "Plazas de Coyoacán", d: "Encuentro con tu guía y las bicis en Café Avellaneda. Orientación rápida, cascos, y un café para el camino." },
        { t: "14:30", h: "Chimalistac y San Ángel", d: "Por uno de los barrios más tranquilos de la ciudad, y parada en el bazar del sábado." },
        { t: "15:30", h: "Avenida Amsterdam", d: "El loop de la Condesa, originalmente un hipódromo. Lo rodamos despacio." },
        { t: "16:30", h: "Chapultepec a la hora dorada", d: "Terminamos cerca del lago. Opcional: drinks en una azotea favorita del equipo." }
      ],
      includes: [
        "E-bike premium (Riese & Müller)",
        "Casco y guantes",
        "Guía bilingüe (EN/ES)",
        "Agua + parada de snack",
        "Set de fotos al día siguiente",
        "Seguro"
      ],
      meetText: "Nos vemos afuera de Café Avellaneda en Higuera, a dos cuadras de la plaza principal de Coyoacán. Busca el jersey rosa de Los Chillangos."
    },
    booking: {
      steps: ["Fecha y hora", "Grupo", "Carrito", "Pago", "Confirmado"],
      step1: { title: "Elige una fecha.", lede: "Operamos este tour de martes a domingo. Los viernes y fines de semana se llenan dos semanas antes.", timeTitle: "Elige una hora" },
      step2: { title: "¿Quién va?", lede: "Hasta 8 ciclistas por tour. Niños desde 12 años con un adulto.", adult: { t: "Adultos", d: "Mayores de 18" }, teen: { t: "Adolescentes", d: "12 a 17 años" }, addons: "Extras", privatize: { t: "Privatizar el tour", d: "Que la guía y las bicis sean solo para ustedes. +$140" } },
      step3: { title: "Tu carrito.", lede: "Una última revisión antes de pagar.", remove: "Quitar", add: "Añadir otro tour", code: "Código promocional", cont: "Continuar al pago" },
      step4: { title: "Ya casi.", lede: "Te enviamos confirmación apenas se procese el pago.", contact: "Contacto", payment: "Pago", card: "Tarjeta", oxxo: "OXXO Pay", first: "Nombre", last: "Apellido", email: "Email", phone: "Teléfono (WhatsApp)", cardNum: "Número de tarjeta", exp: "Vence", cvc: "CVC", confirm: "Confirmar y pagar" },
      step5: { title: "Te vas de tour.", sub: "Enviamos la confirmación y los detalles del encuentro a tu correo. Tu guía te escribirá por WhatsApp el día anterior.", booking: "Reserva", date: "Fecha", time: "Hora", riders: "Personas", meet: "Punto de encuentro", total: "Total pagado", back: "Volver al inicio", calendar: "Añadir al calendario" },
      summary: { tour: "Tour", date: "Fecha", time: "Hora", riders: "Personas", subtotal: "Subtotal", fee: "Cargo de reserva", total: "Total", from: "desde", perPerson: "/ persona" }
    },
    common: { from: "desde", perPerson: "por persona", duration: "Duración", group: "Grupo", new: "Nuevo", popular: "Más reservado" }
  }
};

const TOURS = [
  {
    id: "ebike-classic",
    cat: "ebike",
    duration: "3.5h",
    distance: "14 km",
    price: 89,
    tagEN: "Most booked",
    tagES: "Más reservado",
    tagColor: "terra",
    photo: "Coyoacán plaza · golden hour",
    photoTone: "warm",
    titleEN: "Classic CDMX e-bike",
    titleES: "CDMX clásica en bici",
    descEN: "Coyoacán to Chapultepec via Roma and Condesa. The greatest hits, on quiet bike lanes.",
    descES: "De Coyoacán a Chapultepec por Roma y Condesa. Los grandes éxitos, por ciclovías tranquilas."
  },
  {
    id: "ebike-art",
    cat: "ebike",
    duration: "4h",
    distance: "16 km",
    price: 95,
    tagEN: "New",
    tagES: "Nuevo",
    tagColor: "default",
    photo: "Soumaya museum · facade detail",
    photoTone: "moss",
    titleEN: "Contemporary art ride",
    titleES: "Arte contemporáneo",
    descEN: "Galleries, museums and street art across Polanco, Anzures and Roma. With studio visits when we can swing them.",
    descES: "Galerías, museos y arte urbano por Polanco, Anzures y Roma. Con visitas a estudios cuando se puede."
  },
  {
    id: "teotihuacan",
    cat: "daytrip",
    duration: "8h",
    distance: "—",
    price: 165,
    tagEN: null,
    tagES: null,
    tagColor: "default",
    photo: "Pyramid of the Sun · sunrise",
    photoTone: "terra",
    titleEN: "Teotihuacán day trip",
    titleES: "Excursión a Teotihuacán",
    descEN: "Pyramids before the buses arrive. Optional Basílica de Guadalupe stop on the way back.",
    descES: "Las pirámides antes de que lleguen los autobuses. Parada opcional en la Basílica al regreso."
  },
  {
    id: "xochimilco",
    cat: "daytrip",
    duration: "7h",
    distance: "—",
    price: 145,
    tagEN: null,
    tagES: null,
    tagColor: "default",
    photo: "Xochimilco trajinera · canal",
    photoTone: "warm",
    titleEN: "Xochimilco + Coyoacán",
    titleES: "Xochimilco + Coyoacán",
    descEN: "Trajinera on the canals, lunch on the boat, then Frida's neighborhood at a walking pace.",
    descES: "Trajinera por los canales, comida a bordo, y luego el barrio de Frida a pie."
  },
  {
    id: "girly",
    cat: "walking",
    duration: "4h",
    distance: "—",
    price: 110,
    tagEN: "Most booked",
    tagES: "Más reservado",
    tagColor: "terra",
    photo: "Lucha libre mask · pink",
    photoTone: "warm",
    titleEN: "Girly Tour",
    titleES: "Girly Tour",
    descEN: "Coffee crawl, photo spots, mezcal cocktails, and the night ends at Arena México for lucha libre.",
    descES: "Tour de cafés, puntos fotográficos, cocteles de mezcal y la noche cierra con lucha libre en la Arena México."
  },
  {
    id: "galleries",
    cat: "walking",
    duration: "3h",
    distance: "—",
    price: 75,
    tagEN: "New",
    tagES: "Nuevo",
    tagColor: "default",
    photo: "Galería · Roma Norte",
    photoTone: "moss",
    titleEN: "Galleries & photography",
    titleES: "Galerías y fotografía",
    descEN: "Five spaces in Roma and Juárez, with intros from the curators when they're around.",
    descES: "Cinco espacios en Roma y Juárez, con introducción de los curadores cuando están."
  }
];

window.I18N = I18N;
window.TOURS = TOURS;
