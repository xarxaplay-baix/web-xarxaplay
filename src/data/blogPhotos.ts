// Fotos reals (amb gent jugant) de cada article del blog. Si un article no en té, es mostra la il·lustració SVG.
// Per canviar-ne una: posa la foto a public/img/ (versió gran .webp + versió petita -360/-600) i actualitza aquí.
export interface BlogPhoto { src: string; small: string; alt: { ca: string; es: string } }

export const blogPhotos: Record<string, BlogPhoto | undefined> = {
  beneficis: { src: "/img/padel-remat.webp", small: "/img/padel-remat-360.webp", alt: { ca: "Jugadora fent un remat a una pista de pàdel de XarxaPlay", es: "Jugadora rematando en una pista de pádel de XarxaPlay" } },
  pickleball: { src: "/img/pickleball-volea.webp", small: "/img/pickleball-volea-360.webp", alt: { ca: "Jugador de pickleball colpejant una volea a Sant Boi", es: "Jugador de pickleball golpeando una volea en Sant Boi" } },
  americana: { src: "/img/padel-joc-parella.webp", small: "/img/padel-joc-parella-600.webp", alt: { ca: "Parella jugant a pàdel a XarxaPlay", es: "Pareja jugando a pádel en XarxaPlay" } },
  escola: { src: "/img/padel-servei.webp", small: "/img/padel-servei-360.webp", alt: { ca: "Jugador servint en una pista de pàdel", es: "Jugador sacando en una pista de pádel" } },
  // PENDENT: foto amb gent jugant a tennis (de moment, la pista)
  tennis: { src: "/img/tennis-pista.webp", small: "/img/tennis-pista-600.webp", alt: { ca: "Pista de tennis de XarxaPlay a Sant Boi", es: "Pista de tenis de XarxaPlay en Sant Boi" } },
  tornejos: { src: "/img/pickleball-torneig.webp", small: "/img/pickleball-torneig-360.webp", alt: { ca: "Participants d'un campionat a XarxaPlay", es: "Participantes de un campeonato en XarxaPlay" } },
};
