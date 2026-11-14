# Web de XarxaPlay

Web de XarxaPlay: pàdel, pickleball i tennis a Sant Boi de Llobregat (Baix Llobregat).
Feta amb [Astro](https://astro.build) i publicada a **Azure Static Web Apps** (pla Free).

- Català: `/` · Castellà: `/es/`
- Reserves: [Playtomic](https://playtomic.com/clubs/new-complex-esportiu-baldiri-aleu)

## Com es publica

Cada canvi que es puja a la branca `main` es publica sol:
GitHub Actions construeix la web (`npm run build`) i la puja a Azure
(`.github/workflows/azure-static-web-apps.yml`).

Cal un secret al repositori: **Settings → Secrets and variables → Actions →**
`AZURE_STATIC_WEB_APPS_API_TOKEN` (el token de desplegament de la Static Web App a Azure).

## On és cada cosa

| Què | On |
|---|---|
| Textos de la portada (CA / ES) | `src/i18n/ca.json`, `src/i18n/es.json` |
| Estructura de la portada | `src/components/Home.astro` |
| Capçalera, SEO, schema.org | `src/layouts/Base.astro` |
| Configuració (domini, indexació) | `src/site.config.ts` |
| Estils | `src/styles/global.css` |
| Fotos optimitzades | `public/img/` |
| Configuració d'Azure (404, capçaleres, redireccions 301) | `public/staticwebapp.config.json` |

## Abans de publicar al domini xarxaplay.es

1. Posar `indexable: true` a `src/site.config.ts` (ara la versió de proves no s'indexa a Google).
2. Afegir les redireccions 301 de les URL antigues de WordPress a `public/staticwebapp.config.json`.
3. Connectar el domini a Azure (Static Web App → Dominios personalizados) mantenint els registres MX del correu.
4. Configurar el formulari de prova gratuïta (Formspree o similar).

## Treballar en local

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # genera dist/
```

Requereix Node.js 22 o superior.
