const CACHE_NAME = "chick-v1";
const urlsToCache = [
  "./",
  "./index.html",
  "./jooje.html",
  "./manifest.json",
  "./media/chick_still.png",
  "./media/chick_left.png",
  "./media/chick_right.png",
  "./media/heart.png",
  "./media/broken_heart.png",
  "./media/eat.wav",
  "./media/heartbreak.wav",
  "./media/jooje.mp3",
  "./media/icon-192.png",
  "./media/icon-512.png"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
