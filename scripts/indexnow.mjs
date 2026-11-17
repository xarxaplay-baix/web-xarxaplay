// Avisa Bing (i la resta de cercadors IndexNow: Copilot, Yandex, Seznam...) de totes les URL del sitemap
// després de cada desplegament. No fa res mentre la web no sigui indexable (robots.txt amb "Disallow: /").
import { readFileSync, existsSync } from "node:fs";

const KEY = "6f3b1c9e4a7d42e8b05c1f2a9d8e7c63";
const HOST = "www.xarxaplay.es";

const robots = existsSync("dist/robots.txt") ? readFileSync("dist/robots.txt", "utf8") : "";
if (/^Disallow: \/\s*$/m.test(robots)) {
  console.log("IndexNow: la web encara no és indexable; no s'envia res.");
  process.exit(0);
}
const xml = readFileSync("dist/sitemap-0.xml", "utf8");
const urlList = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
const res = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({ host: HOST, key: KEY, keyLocation: `https://${HOST}/${KEY}.txt`, urlList }),
});
console.log(`IndexNow: ${urlList.length} URL enviades → HTTP ${res.status}`);
