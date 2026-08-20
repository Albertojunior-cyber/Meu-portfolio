<meta name='viewport' content='width=device-width, initial-scale=1'/>self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('beltychat-v1').then((cache) => {
      return cache.addAll(['/', '/index.html']);
    })
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request))
  );
});self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('beltychat-v1').then((cache) => {
      return cache.addAll(['/', '/index.html']);
    })
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request))
  );
});self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('beltychat-v1').then((cache) => {
      return cache.addAll(['/', '/index.html']);
    })
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request))
  );
});self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('beltychat-v1').then((cache) => {
      return cache.addAll(['/', '/index.html']);
    })
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request))
  );
});self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('beltychat-v1').then((cache) => {
      return cache.addAll(['/', '/index.html']);
    })
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request))
  );
});