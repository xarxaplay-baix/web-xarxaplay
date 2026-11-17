import ca from "./ca.json";
import es from "./es.json";
import type { Lang } from "../data/routes";

/** Textos de la interfície per idioma (el castellà hereta del català les claus que no tingui). */
export const texts = (lang: Lang): Record<string, string> => (lang === "es" ? { ...ca, ...es } : ca);
