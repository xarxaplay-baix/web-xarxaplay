// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://www.xarxaplay.es",
  trailingSlash: "ignore",
  integrations: [
    sitemap({
      i18n: { defaultLocale: "ca", locales: { ca: "ca-ES", es: "es-ES" } },
    }),
  ],
});
