const CACHE_NAME = 'diario-sobral-v1';
const assets = [
  './',
  './index.html',
  'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80'
];

// Instala o service worker e guarda os arquivos no cache
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(assets);
    })
  );
});

// Responde mesmo quando estiver offline
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request);
        })
    );
});
