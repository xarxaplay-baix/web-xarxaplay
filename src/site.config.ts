// Configuració general de la web.
export const site = {
  url: "https://www.xarxaplay.es",
  // IMPORTANT: posa-ho a true només quan la web nova estigui publicada al domini xarxaplay.es.
  // Mentre sigui false, Google no indexarà la versió de proves (azurestaticapps.net).
  indexable: false,
  // Google Analytics 4 (es carrega només si el visitant accepta les galetes)
  gaId: "G-54PRQKW3FH",
  playtomic: "https://playtomic.com/clubs/new-complex-esportiu-baldiri-aleu",
  instagram: "https://www.instagram.com/xarxaplay/",
  youtube: "https://www.youtube.com/@XarxaPlay",
  phone: "+34611755275",
  phoneFix: "+34936302838",
  email: "info@xarxaplay.es",
  address: {
    street: "C/ Baldiri Aleu 1-7",
    postalCode: "08830",
    city: "Sant Boi de Llobregat",
    region: "Barcelona",
    country: "ES",
  },
  // Clau d'IndexNow (Bing, Copilot, Yandex...). El fitxer public/<clau>.txt ha de contenir la mateixa clau.
  indexNowKey: "6f3b1c9e4a7d42e8b05c1f2a9d8e7c63",

  // PENDENT DEL CLUB: horaris reals. Quan es tinguin, omplir i es publicaran a les dades estructurades.
  // Format: { days: ["Monday", ...], opens: "08:00", closes: "23:00" }
  openingHours: [] as { days: string[]; opens: string; closes: string }[],
  // PENDENT: coordenades exactes de l'entrada (Google Maps → clic dret → copiar coordenades).
  geo: null as null | { lat: number; lng: number },
};
