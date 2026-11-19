/* Service worker minimo: rende il sito installabile e lo apre anche offline con l'ultima versione vista */
const CACHE = "mensa-v56";
const FILES = ["./", "index.html", "manifest.webmanifest", "icon-192.png", "apple-touch-icon.png", "fonts/inter.woff2", "fonts/bricolage-grotesque.woff2"];
self.addEventListener("install", e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)).then(() => self.skipWaiting())); });
self.addEventListener("activate", e => { e.waitUntil(caches.keys().then(k => Promise.all(k.filter(n => n !== CACHE).map(n => caches.delete(n)))).then(() => self.clients.claim())); });
/* rete prima (così il menu è sempre aggiornato), cache solo se offline */
self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET" || new URL(req.url).origin !== location.origin) return;
  /* niente cache del browser per pagina, traduzioni e manifest: così gli aggiornamenti arrivano subito */
  const u = new URL(req.url);
  const sempreFresco = req.mode === "navigate" || /\.(html|json|webmanifest|js)$/.test(u.pathname);
  const rete = fetch(sempreFresco ? new Request(req, { cache: "no-store" }) : req);
  e.respondWith(rete.then(res => { const copy = res.clone(); caches.open(CACHE).then(c => c.put(req, copy)); return res; }).catch(() => caches.match(req).then(r => r || caches.match("index.html"))));
});
