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
  // Titular de la web (avís legal i privacitat)
  owner: {
    name: "Associació per a l'Impuls de l'Esport i el Benestar (AIEB)",
    cif: "G-26913954",
    registry: "Registre d'entitats jurídiques de la Generalitat de Catalunya, núm. 78877",
    privacyEmail: "info@complexbaldirialeu.com",
  },
  address: {
    street: "C/ Baldiri Aleu 1-7",
    postalCode: "08830",
    city: "Sant Boi de Llobregat",
    region: "Barcelona",
    country: "ES",
  },
  // Clau d'IndexNow (Bing, Copilot, Yandex...). El fitxer public/<clau>.txt ha de contenir la mateixa clau.
  indexNowKey: "6f3b1c9e4a7d42e8b05c1f2a9d8e7c63",

  // Horaris del Complex Esportiu Baldiri Aleu (normativa d'ús, 00-general/04-altes-contracte-i-normativa-us.docx),
  // temporada d'hivern. A l'estiu, diumenges i festius fins a les 18:00. Vigílies (24 i 31/12, 5/1, 23/6) tanca a les 18:00.
  // Tancat: 1 i 6/1, Divendres Sant, Dilluns de Pasqua, 20/5 (Festa Major), 25 i 26/12.
  // Han de coincidir amb la fitxa de Google Business Profile.
  openingHours: [
    { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "07:30", closes: "22:30" },
    { days: ["Saturday"], opens: "08:00", closes: "20:00" },
    { days: ["Sunday", "PublicHolidays"], opens: "08:00", closes: "14:00" },
  ] as { days: string[]; opens: string; closes: string }[],
  // PENDENT: coordenades exactes de l'entrada (Google Maps → clic dret → copiar coordenades).
  geo: null as null | { lat: number; lng: number },
};
