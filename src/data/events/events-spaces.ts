export const EVENTS_SPACES = [
  {
    id: "patio-exterior",
    name: "Patio Exterior",
    capacity: "150 personas",
    style: "Al aire libre con jardines",
    services: ["Iluminación", "Sonido", "Decoración base", "Estacionamiento"],
    image: "/images/portada-fina-estampa.png",
    description: "Espacio abierto rodeado de naturaleza, ideal para eventos al aire libre con vista a los jardines.",
  },
  {
    id: "salon-interior",
    name: "Salón Interior",
    capacity: "100 personas",
    style: "Climatizado y elegante",
    services: ["Aire acondicionado", "Sonido profesional", "Pantalla de proyección", "Baños privados"],
    image: "/images/portada-fina-estampa.png",
    description: "Salón climatizado con decoración elegante, perfecto para eventos formales y corporativos.",
  },
  {
    id: "terraza-semiprivada",
    name: "Terraza Semiprivada",
    capacity: "50 personas",
    style: "Intimo con vista panorámica",
    services: ["Iluminación ambiental", "Música", "Servicio de bar", "Calefacción"],
    image: "/images/portada-fina-estampa.png",
    description: "Terraza íntima con vista panorámica, ideal para eventos pequeños y reuniones especiales.",
  },
] as const;

export type EventsSpaces = typeof EVENTS_SPACES;
