const CACHE="check-raw-material-v6";
const CORE=["./","./index.html","./manifest.webmanifest","./assets/icon.png","./assets/icon-192.png","./assets/icon-512.png","./assets/icon-maskable-512.png","./assets/icon-32.png"];
self.addEventListener("install",e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(CORE)).then(()=>self.skipWaiting())));
self.addEventListener("activate",e=>e.waitUntil(self.clients.claim()));
self.addEventListener("fetch",e=>{
  e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request).then(x=>{
    const copy=x.clone(); caches.open(CACHE).then(c=>c.put(e.request,copy)); return x;
  }).catch(()=>caches.match("./index.html"))));
});