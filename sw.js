const CACHE_NAME = 'sobral-diario-v2';
const assets = [
  './',
  './index.html',
  'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(assets);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
