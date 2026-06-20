export const EVENTS_CONTENT = {
  hero: {
    title: "Celebra tu evento en Fina Estampa – Cieneguilla",
    subtitle:
      "Espacios únicos rodeados de naturaleza, con gastronomía de primera",
    microcopy: "Haz de tu celebración un recuerdo inolvidable",
    badge: "+200 eventos realizados en Cieneguilla",
    benefits: [
      { icon: "lucide:utensils", text: "Gastronomía premium" },
      { icon: "lucide:leaf", text: "Espacios naturales" },
      { icon: "lucide:users", text: "Capacidad hasta 200 invitados" },
    ],
    ctas: [
      {
        text: "Reserva tu evento ahora",
        link: "#reserva",
        variant: "primary" as const,
        action: "modal" as const,
      },
      {
        text: "Descargar brochure",
        link: "#",
        variant: "secondary" as const,
        action: "link" as const,
      },
      {
        text: "Agendar visita guiada",
        link: "#visita",
        variant: "tertiary" as const,
        action: "link" as const,
      },
    ],
  },
  tabs: {
    title: "Opciones de servicio",
    subtitle: "Elige el tipo de evento que deseas celebrar",
    services: [
      {
        id: "privados",
        title: "Eventos Privados",
        description:
          "Bodas, cumpleaños, aniversarios y celebraciones especiales",
        image: "/images/portada-fina-estampa.png",
        features: [
          "Decoración personalizada",
          "Menú a la carta",
          "Coordinador de eventos",
          "Música y entretenimiento",
        ],
        cta: {
          text: "Solicitar cotización",
          link: "#cotizacion",
        },
      },
      {
        id: "catering",
        title: "Catering Diario",
        description: "Grupos pequeños y reuniones informales",
        image: "/images/portada-fina-estampa.png",
        features: [
          "Menú buffet o a la carta",
          "Servicio rápido",
          "Opciones vegetarianas",
          "Bebidas incluidas",
        ],
        cta: {
          text: "Solicitar cotización",
          link: "#cotizacion",
        },
      },
      {
        id: "grandes",
        title: "Eventos Grandes",
        description: "Corporativos, conferencias y eventos masivos",
        image: "/images/portada-fina-estampa.png",
        features: [
          "Capacidad hasta 200 personas",
          "Menú ampliado",
          "Equipo de audio y video",
          "Estacionamiento privado",
        ],
        cta: {
          text: "Solicitar cotización",
          link: "#cotizacion",
        },
      },
    ],
  },
  menu: {
    title: "Experiencias Gastronómicas",
    subtitle: "Deléitate con nuestra cocina peruana",
    options: [
      {
        id: "buffet",
        title: "Servicio Buffet",
        description: "Variedad de platos para todos los gustos",
        image: "/images/portada-fina-estampa.png",
        dishes: [
          "Ceviche",
          "Lomo Saltado",
          "Ají de Gallina",
          "Arroz con Pollo",
        ],
      },
      {
        id: "familiar",
        title: "Estilo Familiar",
        description: "Platos servidos en el centro de la mesa",
        image: "/images/portada-fina-estampa.png",
        dishes: ["Chancho a la Caja China", "Papas a la Huancaína", "Causas"],
      },
      {
        id: "coctel",
        title: "Servicio Cóctel",
        description: "Pasapalos y bebidas para eventos sociales",
        image: "/images/portada-fina-estampa.png",
        dishes: ["Tequeños", "Causitas", "Chicharrones", "Bebidas"],
      },
    ],
    ctas: [
      {
        text: "Descargar menú de eventos",
        link: "/menu-eventos.pdf",
        variant: "primary" as const,
      },
      {
        text: "Agendar degustación",
        link: "#degustacion",
        variant: "secondary" as const,
      },
    ],
  },
  form: {
    title: "Planifica tu evento",
    subtitle: "Completa el formulario y nos pondremos en contacto contigo",
    fields: {
      name: {
        label: "Nombre completo",
        placeholder: "Tu nombre",
        type: "text" as const,
        required: true,
      },
      email: {
        label: "Correo electrónico",
        placeholder: "tu@email.com",
        type: "email" as const,
        required: true,
      },
      phone: {
        label: "Teléfono",
        placeholder: "+51 999 999 999",
        type: "tel" as const,
        required: true,
      },
      date: {
        label: "Fecha del evento",
        placeholder: "DD/MM/YYYY",
        type: "date" as const,
        required: true,
      },
      guests: {
        label: "Número de invitados",
        placeholder: "Cantidad de personas",
        type: "number" as const,
        required: true,
      },
      eventType: {
        label: "Tipo de evento",
        placeholder: "Selecciona el tipo",
        type: "select" as const,
        required: true,
        options: ["Boda", "Cumpleaños", "Aniversario", "Corporativo", "Otro"],
      },
    },
    ctas: [
      {
        text: "Enviar solicitud de evento",
        variant: "primary" as const,
      },
      {
        text: "Agendar llamada con nuestro equipo",
        variant: "secondary" as const,
      },
    ],
  },
  location: {
    title: "Ubicación",
    subtitle: "Fina Estampa Cieneguilla",
    address: "Tambo Viejo - Cieneguilla, Lima, Perú",
    phone: "+51 942 235 532",
    whatsapp: "+51 942 235 532",
    ctas: [
      {
        text: "Contactar por WhatsApp",
        link: "https://wa.me/51942235532",
        icon: "lucide:message-circle",
        variant: "primary" as const,
      },
      {
        text: "Llamar ahora",
        link: "tel:+51942235532",
        icon: "lucide:phone",
        variant: "secondary" as const,
      },
      {
        text: "Cómo llegar",
        link: "https://maps.google.com",
        icon: "lucide:map-pin",
        variant: "tertiary" as const,
      },
    ],
  },
  gallery: {
    title: "Galería de Eventos",
    subtitle: "Momentos inolvidables celebrados en Fina Estampa",
    categories: [
      {
        id: "bodas",
        title: "Bodas",
        images: [
          "/images/portada-fina-estampa.png",
          "/images/portada-fina-estampa.png",
          "/images/portada-fina-estampa.png",
        ],
      },
      {
        id: "cumpleanos",
        title: "Cumpleaños",
        images: [
          "/images/portada-fina-estampa.png",
          "/images/portada-fina-estampa.png",
          "/images/portada-fina-estampa.png",
        ],
      },
      {
        id: "corporativos",
        title: "Corporativos",
        images: [
          "/images/portada-fina-estampa.png",
          "/images/portada-fina-estampa.png",
          "/images/portada-fina-estampa.png",
        ],
      },
    ],
    cta: {
      text: "Ver más fotos en Instagram",
      link: "https://instagram.com/finaestampa_cieneguilla",
      icon: "lucide:instagram",
    },
  },
  faq: {
    title: "Preguntas Frecuentes",
    subtitle: "Resolvemos tus dudas sobre eventos en Fina Estampa",
    questions: [
      {
        id: "cancelaciones",
        question: "¿Cuál es la política de cancelaciones?",
        answer:
          "Las cancelaciones deben realizarse con al menos 15 días de anticipación para obtener un reembolso del 50% del depósito inicial. Si se cancela con menos de 15 días, el depósito no será reembolsable.",
      },
      {
        id: "minimos",
        question: "¿Cuál es el mínimo de consumo requerido?",
        answer:
          "El consumo mínimo varía según el día de la semana, el tipo de evento y la cantidad de invitados. Te invitamos a ponerte en contacto con nuestro equipo para recibir una propuesta personalizada adaptada a tu presupuesto.",
      },
      {
        id: "cambios",
        question: "¿Puedo ajustar el número de invitados después de reservar?",
        answer:
          "Sí, puedes realizar modificaciones en el número de asistentes hasta 7 días hábiles antes de la fecha del evento. El precio final y el menú se ajustarán proporcionalmente.",
      },
      {
        id: "personal",
        question: "¿El servicio incluye personal de atención?",
        answer:
          "Totalmente. Todos nuestros servicios de eventos incluyen meseros profesionales, personal de bar, chefs, asistentes de cocina y un coordinador del evento dedicado a supervisar que todo salga perfecto.",
      },
      {
        id: "menu",
        question: "¿Es posible personalizar el menú?",
        answer:
          "Sí, ofrecemos la posibilidad de personalizar tu menú. Contamos con paquetes predefinidos (buffet, estilo familiar, cóctel), pero podemos adaptarlos e incluir platos específicos o variantes a tu gusto.",
      },
      {
        id: "estacionamiento",
        question: "¿Cuentan con estacionamiento para invitados?",
        answer:
          "Sí, contamos con un amplio estacionamiento privado y vigilado dentro de nuestras instalaciones en Cieneguilla para garantizar la máxima comodidad y seguridad de todos tus invitados.",
      },
      {
        id: "decoracion",
        question: "¿Se permite llevar decoración y proveedores externos?",
        answer:
          "Sí, permitimos decoración externa y proveedores independientes (fotógrafos, DJ, etc.). Coordinaremos con ellos el horario de ingreso para el montaje y desmontaje seguro de los equipos.",
      },
      {
        id: "dietas",
        question: "¿Tienen opciones de menú para restricciones alimenticias?",
        answer:
          "Por supuesto. Ofrecemos exquisitas alternativas vegetarianas, veganas, sin gluten y adaptadas a personas con alergias alimenticias. Solo debes indicárnoslo durante la fase de planificación.",
      },
      {
        id: "equipos",
        question: "¿Cuentan con equipos de sonido y proyección?",
        answer:
          "Disponemos de equipos de audio profesional, micrófonos inalámbricos y proyectores multimedia de alta definición, ideales para discursos, presentaciones corporativas o videos de recuerdo.",
      }
    ],
    cta: {
      text: "Consultar más preguntas",
      link: "#contacto",
    },
  },
  testimonials: {
    title: "Lo que dicen nuestros clientes",
    subtitle: "Experiencias reales de eventos celebrados con nosotros",
    reviews: [
      {
        id: 1,
        name: "María González",
        event: "Boda",
        text: "Nuestra boda fue perfecta gracias a Fina Estampa. La comida deliciosa y el servicio impecable.",
        image: "/images/portada-fina-estampa.png",
        rating: 5,
      },
      {
        id: 2,
        name: "Carlos Rodríguez",
        event: "Cumpleaños",
        text: "Celebramos el cumpleaños de mi madre aquí y fue una experiencia maravillosa. Muy recomendado.",
        image: "/images/portada-fina-estampa.png",
        rating: 5,
      },
      {
        id: 3,
        name: "Ana Martínez",
        event: "Corporativo",
        text: "Organizamos nuestro evento corporativo y todo salió perfecto. Excelente atención y espacios hermosos.",
        image: "/images/portada-fina-estampa.png",
        rating: 5,
      },
      {
        id: 4,
        name: "Luis Fernández",
        event: "Bodas de Oro",
        text: "Excelente atención de principio a fin. El chancho a la caja china estuvo espectacular y la decoración campestre superó nuestras expectativas.",
        image: "/images/portada-fina-estampa.png",
        rating: 5,
      },
      {
        id: 5,
        name: "Gabriela Torres",
        event: "Baby Shower",
        text: "El ambiente natural en Cieneguilla le dio un toque único a mi baby shower. Mis invitados quedaron encantados con la comida y el servicio de bar.",
        image: "/images/portada-fina-estampa.png",
        rating: 5,
      },
      {
        id: 6,
        name: "Ricardo Delgado",
        event: "Aniversario",
        text: "Un lugar mágico. La coordinación fue impecable, la música en su punto y los cocteles deliciosos. Definitivamente volveremos para futuros eventos.",
        image: "/images/portada-fina-estampa.png",
        rating: 5,
      },
    ],
    cta: {
      text: "Deja tu reseña",
      link: "#resena",
    },
  },
  finalCta: {
    title: "Haz de tu evento una experiencia inolvidable en Fina Estampa",
    subtitle: "Reserva ahora y deja que nos encarguemos de todo",
    ctas: [
      {
        text: "Reserva tu evento ahora",
        link: "#reserva",
        variant: "primary" as const,
      },
      {
        text: "Descargar brochure",
        link: "#",
        variant: "secondary" as const,
      },
      {
        text: "Contactar por WhatsApp",
        link: "https://wa.me/51942235532",
        variant: "tertiary" as const,
      },
    ],
  },
} as const;

export type EventsContent = typeof EVENTS_CONTENT;
