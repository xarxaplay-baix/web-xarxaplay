// Mapa de rutes CA/ES i accés als articles del blog.
export type Lang = "ca" | "es";

export const routes = {
  home: { ca: "/", es: "/es/" },
  padel: { ca: "/padel/", es: "/es/padel/" },
  pickleball: { ca: "/pickleball/", es: "/es/pickleball/" },
  tennis: { ca: "/tennis/", es: "/es/tenis/" },
  escola: { ca: "/escola-padel/", es: "/es/escuela-padel/" },
  blog: { ca: "/blog/", es: "/es/blog/" },
  avis: { ca: "/avis-legal/", es: "/es/aviso-legal/" },
  privacitat: { ca: "/privacitat/", es: "/es/privacidad/" },
  galetes: { ca: "/galetes/", es: "/es/cookies/" },
} as const;

export type RouteKey = keyof typeof routes;

/** Enllaç a una secció de la portada (p. ex. "tornejos") en l'idioma indicat. */
export const homeAnchor = (lang: Lang, id: string) => `${routes.home[lang]}#${id}`;

export interface Post {
  lang: Lang;
  slug: string;
  url: string;
  key: string;
  title: string;
  seoTitle: string;
  description: string;
  tag: string;
  minutes: number;
  date: Date;
  related: string[];
  Content: any;
}

const modules = import.meta.glob("../content/blog/*/*.md", { eager: true }) as Record<string, any>;

// Ordre de presentació al blog
const ORDER = ["beneficis", "pickleball", "americana", "escola", "tennis", "tornejos"];

export const posts: Post[] = Object.entries(modules)
  .map(([path, m]) => {
    const [, lang, file] = path.match(/blog\/(ca|es)\/(.+)\.md$/)!;
    const fm = m.frontmatter;
    const slug = file;
    return {
      lang: lang as Lang,
      slug,
      url: `${lang === "es" ? "/es" : ""}/blog/${slug}/`,
      key: fm.key,
      title: fm.title,
      seoTitle: fm.seoTitle ?? fm.title,
      description: fm.description,
      tag: fm.tag,
      minutes: fm.minutes,
      date: new Date(fm.date),
      related: fm.related ?? [],
      Content: m.Content,
    };
  })
  .sort((a, b) => ORDER.indexOf(a.key) - ORDER.indexOf(b.key));

export const postsFor = (lang: Lang) => posts.filter((p) => p.lang === lang);
export const postByKey = (lang: Lang, key: string) => posts.find((p) => p.lang === lang && p.key === key)!;

/** Resol els enllaços interns {padel}, {escola}, {blog:clau}... d'un text HTML segons l'idioma. */
export function resolveLinks(html: string, lang: Lang): string {
  return html.replace(/\{(blog:)?([a-z]+)\}/g, (m, isBlog, key) => {
    if (isBlog) return postByKey(lang, key)?.url ?? m;
    return (routes as any)[key]?.[lang] ?? m;
  });
}
