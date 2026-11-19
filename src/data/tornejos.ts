// Calendari de tornejos: tipus, textos i Schema.org. Les dades venen de tornejos.json (vegeu scripts/tornejos-xlsx.py).
import raw from "./tornejos.json";
import { site } from "../site.config";
import { abs, BUSINESS_ID } from "./schema";
import type { Lang } from "./routes";

export type Sport = "padel" | "pickleball" | "tennis";
export type EvType = "torneig" | "americana" | "lliga" | "clinic" | "exhibicio" | "altres";
export type Level = "tots" | "iniciacio" | "intermedi" | "avancat";
export type Category = "oberta" | "masculina" | "femenina" | "mixta" | "infantil";
export type State = "obertes" | "ultimes" | "complet" | "ajornat" | "cancellat";
export interface TEvent {
  id: string; start: string; end: string; timeStart: string | null; timeEnd: string | null;
  sport: Sport; type: EvType; title: Record<Lang, string>; desc: Record<Lang, string>;
  level: Level | null; category: Category | null; price: number | null; places: number | null;
  state: State; url: string | null;
}
const all = raw as TEvent[];

/** Data d'avui a Madrid (AAAA-MM-DD), per amagar els esdeveniments ja acabats en compilar. */
const today = () => new Intl.DateTimeFormat("sv-SE", { timeZone: "Europe/Madrid" }).format(new Date());
export const upcomingEvents = () => all.filter((e) => e.end >= today());

export const eventLabels = {
  ca: {
    filter: "Filtra per esport", all: "Tots", when: "Quan", hint: "Els dies marcats tenen tornejos. Fes-hi clic per veure'ls.",
    sport: { padel: "Pàdel", pickleball: "Pickleball", tennis: "Tennis" },
    type: { torneig: "Torneig", americana: "Americana", lliga: "Lliga", clinic: "Clínic", exhibicio: "Exhibició", altres: "Esdeveniment" },
    level: { tots: "Tots els nivells", iniciacio: "Iniciació", intermedi: "Intermedi", avancat: "Avançat" },
    category: { oberta: "Oberta", masculina: "Masculina", femenina: "Femenina", mixta: "Mixta", infantil: "Infantil" },
    state: { obertes: "Inscripcions obertes", ultimes: "Últimes places", complet: "Complet", ajornat: "Ajornat", cancellat: "Cancel·lat" },
    free: "Gratuït", priceAsk: "Preu: consulta'ns", places: "places",
    signup: "Inscriu-t'hi", ask: "Demana informació", info: "Més informació",
    emptyH: "Aviat publicarem les properes dates",
    emptyP: "Estem preparant el calendari de tornejos i americanes. Segueix-nos a Instagram o escriu-nos i t'avisarem.",
    emptyCta: "Segueix-nos a Instagram", showAll: "Veure tots", dayOf: "Tornejos del",
  },
  es: {
    filter: "Filtra por deporte", all: "Todos", when: "Cuándo", hint: "Los días marcados tienen torneos. Haz clic para verlos.",
    sport: { padel: "Pádel", pickleball: "Pickleball", tennis: "Tenis" },
    type: { torneig: "Torneo", americana: "Americana", lliga: "Liga", clinic: "Clínic", exhibicio: "Exhibición", altres: "Evento" },
    level: { tots: "Todos los niveles", iniciacio: "Iniciación", intermedi: "Intermedio", avancat: "Avanzado" },
    category: { oberta: "Abierta", masculina: "Masculina", femenina: "Femenina", mixta: "Mixta", infantil: "Infantil" },
    state: { obertes: "Inscripciones abiertas", ultimes: "Últimas plazas", complet: "Completo", ajornat: "Aplazado", cancellat: "Cancelado" },
    free: "Gratis", priceAsk: "Precio: consúltanos", places: "plazas",
    signup: "Inscríbete", ask: "Pide información", info: "Más información",
    emptyH: "Pronto publicaremos las próximas fechas",
    emptyP: "Estamos preparando el calendario de torneos y americanas. Síguenos en Instagram o escríbenos y te avisaremos.",
    emptyCta: "Síguenos en Instagram", showAll: "Ver todos", dayOf: "Torneos del",
  },
} as const;

const iso = (date: string, time: string | null) => (time ? `${date}T${time}:00${madridOffset(date)}` : date);
/** Desplaçament horari de Madrid per a una data (CET +01:00 / CEST +02:00). */
function madridOffset(date: string) {
  const parts = new Intl.DateTimeFormat("en-US", { timeZone: "Europe/Madrid", timeZoneName: "shortOffset" }).formatToParts(new Date(`${date}T12:00:00Z`));
  const off = parts.find((p) => p.type === "timeZoneName")?.value ?? "GMT+1";
  const h = Number(off.replace("GMT", "")) || 1;
  return `+0${h}:00`;
}
const STATUS: Record<State, string> = {
  obertes: "https://schema.org/EventScheduled", ultimes: "https://schema.org/EventScheduled", complet: "https://schema.org/EventScheduled",
  ajornat: "https://schema.org/EventPostponed", cancellat: "https://schema.org/EventCancelled",
};

/** Un SportsEvent per esdeveniment futur (resultats enriquits d'esdeveniments a Google). */
export function eventsSchema(lang: Lang, pageUrl: string) {
  return upcomingEvents().map((e) => ({
    "@type": "SportsEvent",
    "@id": abs(`${pageUrl}#tj-${e.id}`),
    name: e.title[lang],
    ...(e.desc[lang] ? { description: e.desc[lang] } : {}),
    sport: eventLabels[lang].sport[e.sport],
    startDate: iso(e.start, e.timeStart),
    endDate: iso(e.end, e.timeEnd ?? null),
    eventStatus: STATUS[e.state],
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    inLanguage: lang,
    url: abs(`${pageUrl}#tj-${e.id}`),
    image: [abs(`/img/og-${e.sport}.jpg`)],
    location: { "@type": "SportsActivityLocation", "@id": BUSINESS_ID, name: "XarxaPlay",
      address: { "@type": "PostalAddress", streetAddress: site.address.street, postalCode: site.address.postalCode,
        addressLocality: site.address.city, addressRegion: site.address.region, addressCountry: site.address.country } },
    organizer: { "@type": "Organization", "@id": BUSINESS_ID, name: "XarxaPlay", url: site.url },
    ...(e.price !== null ? { offers: { "@type": "Offer", price: e.price, priceCurrency: "EUR",
      availability: e.state === "complet" ? "https://schema.org/SoldOut" : "https://schema.org/InStock",
      url: e.url ?? abs(pageUrl) } } : {}),
    ...(e.places ? { maximumAttendeeCapacity: e.places } : {}),
  }));
}
