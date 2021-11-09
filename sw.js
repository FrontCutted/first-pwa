var cacheName = "my-PWA";
var filesToCache = 
  [
    '/', '/index.html', 
    '/css.css', '/main.js'
  ];

self.addEventListener('install', function(e){
  e.waitUntil(
    caches.open(cacheName).then(function(cache){
      return cache.addAll(filesToCache);
    })
  )
  self.skipWaiting();
})

self.addEventListener('fetch', function(e){
  e.respondWith(
    caches.match(e.request).then(function(r){
      return r || fetch(e.request);
    })
  )
})