import type { APIRoute } from "astro";
import { site } from "../site.config";

// Mentre la web no sigui indexable (versió de proves), es bloqueja tot el rastreig.
// Quan sigui indexable, s'obre a tots els cercadors i, de manera explícita, als cercadors i assistents d'IA
// (ChatGPT, Perplexity, Claude, Gemini, Copilot...) perquè puguin citar XarxaPlay a les respostes.
const AI_BOTS = [
  "OAI-SearchBot", "ChatGPT-User", "GPTBot",
  "PerplexityBot", "Perplexity-User",
  "ClaudeBot", "Claude-SearchBot", "Claude-User",
  "Google-Extended", "Applebot", "Applebot-Extended",
  "Bingbot", "DuckAssistBot", "meta-externalagent", "MistralAI-User", "CCBot",
];

export const GET: APIRoute = () => {
  const body = site.indexable
    ? [
        "User-agent: *",
        "Allow: /",
        "",
        ...AI_BOTS.flatMap((b) => [`User-agent: ${b}`, "Allow: /", ""]),
        `Sitemap: ${site.url}/sitemap-index.xml`,
        "",
      ].join("\n")
    : `User-agent: *\nDisallow: /\n`;
  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
};
