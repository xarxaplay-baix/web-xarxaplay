import type { APIRoute } from "astro";
import { site } from "../site.config";

// Mentre la web no sigui indexable (versió de proves), es bloqueja tot el rastreig.
export const GET: APIRoute = () => {
  const body = site.indexable
    ? `User-agent: *\nAllow: /\n\nSitemap: ${site.url}/sitemap-index.xml\n`
    : `User-agent: *\nDisallow: /\n`;
  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
};
