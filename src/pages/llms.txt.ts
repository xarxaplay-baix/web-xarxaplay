import type { APIRoute } from "astro";
import { site } from "../site.config";
import { routes, postsFor } from "../data/routes";
import { homeFaq } from "../data/faq";

// llms.txt: resum en text pla per a assistents i cercadors d'IA (https://llmstxt.org).
const u = (p: string) => new URL(p, site.url).toString();

export const GET: APIRoute = () => {
  const lines = [
    "# XarxaPlay",
    "",
    "> Centre d'esports de xarxa a Sant Boi de Llobregat (Baix Llobregat, Barcelona): 11 pistes de pàdel, 4 de pickleball i 1 de tennis, dins el Complex Esportiu Baldiri Aleu. Obert de dilluns a diumenge, festius inclosos. Reserves per Playtomic. Escola de pàdel per a nens i adults amb primera classe gratuïta. / Centro de deportes de red en Sant Boi de Llobregat: 11 pistas de pádel, 4 de pickleball y 1 de tenis.",
    "",
    "## Dades clau",
    `- Adreça: ${site.address.street}, ${site.address.postalCode} ${site.address.city} (${site.address.region})`,
    "- Horari: dilluns a divendres 8:00–22:30; dissabte 8:00–20:00; diumenge 8:00–14:00",
    "- Telèfon: +34 611 75 52 75 · +34 936 30 28 38 (fix)",
    `- Email: ${site.email}`,
    `- Reserves: ${site.playtomic}`,
    "- Serveis: aparcament gratuït (centenars de places a menys de 2 minuts), vestidors i armariets, gravació de partits gratis (Tape Sports), bar restaurant Can Baldiri amb terrassa, botiga de material.",
    "- Activitats: americanes de pàdel setmanals; tornejos de pàdel, pickleball i tennis durant l'any; jornades per a escoles i empreses.",
    "- Zona: Sant Boi de Llobregat, a uns 15 minuts de Barcelona; a prop de Cornellà, Sant Joan Despí, Viladecans, Gavà, el Prat, Sant Vicenç dels Horts i Santa Coloma de Cervelló.",
    `- Instagram: ${site.instagram} · YouTube: ${site.youtube}`,
    "",
    "## Pàgines (català)",
    `- [Inici](${u(routes.home.ca)}): pistes de pàdel, pickleball i tennis a Sant Boi`,
    `- [Pàdel](${u(routes.padel.ca)}): 11 pistes de pàdel, reserva, serveis i FAQ`,
    `- [Pickleball](${u(routes.pickleball.ca)}): 4 pistes de pickleball i FAQ`,
    `- [Tennis](${u(routes.tennis.ca)}): pista de tennis exterior renovada`,
    `- [Escola de pàdel](${u(routes.escola.ca)}): classes per a nens i adults, prova gratuïta`,
    `- [Blog](${u(routes.blog.ca)})`,
    "",
    "## Páginas (castellano)",
    `- [Inicio](${u(routes.home.es)})`,
    `- [Pádel](${u(routes.padel.es)})`,
    `- [Pickleball](${u(routes.pickleball.es)})`,
    `- [Tenis](${u(routes.tennis.es)})`,
    `- [Escuela de pádel](${u(routes.escola.es)})`,
    `- [Blog](${u(routes.blog.es)})`,
    "",
    "## Articles / Artículos",
    ...postsFor("ca").map((p) => `- [${p.title}](${u(p.url)}): ${p.description}`),
    ...postsFor("es").map((p) => `- [${p.title}](${u(p.url)}): ${p.description}`),
    "",
    "## Preguntes freqüents",
    ...homeFaq("ca").flatMap((f) => [`### ${f.q}`, f.a, ""]),
    "## Preguntas frecuentes",
    ...homeFaq("es").flatMap((f) => [`### ${f.q}`, f.a, ""]),
  ];
  return new Response(lines.join("\n"), { headers: { "Content-Type": "text/plain; charset=utf-8" } });
};
