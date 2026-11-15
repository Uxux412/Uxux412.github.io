// Service Worker: macht das Spiel nach dem ersten Laden offline spielbar.
// Bei Änderungen am Spiel die Versionsnummer erhöhen, damit Geräte die neue Fassung holen.
const CACHE = 'geschichtswaechter-v2';
const FILES = ['./', './index.html', './manifest.webmanifest', './icon-192.png', './icon-512.png'];

self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(CACHE).then((cache) => cache.addAll(FILES)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

// Netz zuerst (damit Updates ankommen), bei fehlendem Netz aus dem Cache
self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;
  event.respondWith(
    // 'no-cache' = beim Server nachfragen, ob es eine neuere Fassung gibt (statt alten Browser-Cache zu nehmen)
    fetch(event.request, { cache: 'no-cache' })
      .then((response) => {
        const copy = response.clone();
        caches.open(CACHE).then((cache) => cache.put(event.request, copy));
        return response;
      })
      .catch(() => caches.match(event.request).then((hit) => hit || caches.match('./index.html')))
  );
});
