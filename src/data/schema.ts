// Dades estructurades (schema.org, JSON-LD) compartides per totes les pàgines.
import { site } from "../site.config";
import type { Lang } from "./routes";

export const abs = (p: string) => new URL(p, site.url).toString();
export const BUSINESS_ID = abs("/#xarxaplay");
export const WEBSITE_ID = abs("/#website");

export function business(lang: Lang) {
  const es = lang === "es";
  const node: Record<string, unknown> = {
    "@type": "SportsActivityLocation",
    "@id": BUSINESS_ID,
    name: "XarxaPlay",
    alternateName: "XarxaPlay Baix Llobregat",
    description: es
      ? "Centro de deportes de red en Sant Boi de Llobregat (Baix Llobregat): 11 pistas de pádel, 4 de pickleball y 1 de tenis, escuela de pádel, americanas y torneos."
      : "Centre d'esports de xarxa a Sant Boi de Llobregat (Baix Llobregat): 11 pistes de pàdel, 4 de pickleball i 1 de tennis, escola de pàdel, americanes i tornejos.",
    url: abs("/"),
    telephone: site.phone,
    email: site.email,
    image: [abs("/img/og-xarxaplay.jpg"), abs("/img/padel-pistes-sant-boi-1600.webp")],
    logo: abs("/img/logo-xarxaplay.png"),
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      postalCode: site.address.postalCode,
      addressLocality: site.address.city,
      addressRegion: site.address.region,
      addressCountry: site.address.country,
    },
    contactPoint: [
      { "@type": "ContactPoint", telephone: site.phone, contactType: "customer service", availableLanguage: ["ca", "es"] },
      { "@type": "ContactPoint", telephone: site.phoneFix, contactType: "customer service", availableLanguage: ["ca", "es"] },
    ],
    areaServed: [
      { "@type": "City", name: "Sant Boi de Llobregat" },
      { "@type": "AdministrativeArea", name: "Baix Llobregat" },
    ],
    knowsAbout: es ? ["Pádel", "Pickleball", "Tenis", "Escuela de pádel", "Americanas de pádel"] : ["Pàdel", "Pickleball", "Tennis", "Escola de pàdel", "Americanes de pàdel"],
    amenityFeature: (es
      ? ["11 pistas de pádel", "4 pistas de pickleball", "1 pista de tenis", "Aparcamiento gratuito", "Vestuarios y taquillas", "Grabación de partidos gratis", "Bar restaurante con terraza", "Tienda de material"]
      : ["11 pistes de pàdel", "4 pistes de pickleball", "1 pista de tennis", "Aparcament gratuït", "Vestidors i armariets", "Gravació de partits gratis", "Bar restaurant amb terrassa", "Botiga de material"]
    ).map((name) => ({ "@type": "LocationFeatureSpecification", name, value: true })),
    publicAccess: true,
    containedInPlace: { "@type": "SportsActivityLocation", name: "Complex Esportiu Baldiri Aleu" },
    hasMap: "https://www.google.com/maps/search/?api=1&query=XarxaPlay%2C+Carrer+Baldiri+Aleu+1-7%2C+Sant+Boi+de+Llobregat",
    potentialAction: {
      "@type": "ReserveAction",
      target: { "@type": "EntryPoint", urlTemplate: site.playtomic, actionPlatform: ["http://schema.org/DesktopWebPlatform", "http://schema.org/MobileWebPlatform"] },
      name: es ? "Reservar pista" : "Reservar pista",
    },
    sameAs: [
      "https://www.google.com/search?kgmid=/g/11xvxqqcgc",
      site.instagram,
      site.youtube,
      site.playtomic,
    ],
  };
  if (site.openingHours.length) {
    node.openingHoursSpecification = site.openingHours.map((h) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: h.days.map((d) => `https://schema.org/${d}`),
      opens: h.opens,
      closes: h.closes,
    }));
  }
  if (site.geo) node.geo = { "@type": "GeoCoordinates", latitude: site.geo.lat, longitude: site.geo.lng };
  return node;
}

export function website() {
  return {
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: abs("/"),
    name: "XarxaPlay",
    inLanguage: ["ca", "es"],
    publisher: { "@id": BUSINESS_ID },
  };
}

const strip = (s: string) => s.replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim();

export function faqPage(url: string, items: { q: string; a: string }[], lang: Lang) {
  return {
    "@type": "FAQPage",
    "@id": abs(url) + "#faq",
    inLanguage: lang,
    mainEntity: items.map((i) => ({
      "@type": "Question",
      name: strip(i.q),
      acceptedAnswer: { "@type": "Answer", text: strip(i.a) },
    })),
  };
}

export function breadcrumbList(url: string, crumbs: { name: string; url: string }[]) {
  return {
    "@type": "BreadcrumbList",
    "@id": abs(url) + "#breadcrumb",
    itemListElement: crumbs.map((c, i) => ({ "@type": "ListItem", position: i + 1, name: strip(c.name), item: abs(c.url) })),
  };
}
