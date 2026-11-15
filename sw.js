/* Benefit Planner – service worker (verze 1.7)
   - vlastní soubory: nejdřív síť (nová verze se projeví hned), bez internetu z mezipaměti
   - písma a knihovna PDF: z mezipaměti, jinak ze sítě
   - RSS a ostatní požadavky: bez zásahu
   - klik na notifikaci: otevře / přepne na aplikaci
   Uživatelská data se sem nedostanou – zůstávají zašifrovaná v localStorage. */
const CACHE = 'benefit-planner-1.7';
const CORE = ['./', './index.html', './manifest.webmanifest', './icon-192.png', './icon-512.png', './apple-touch-icon.png'];
const SHARED = /^(fonts\.googleapis\.com|fonts\.gstatic\.com|cdnjs\.cloudflare\.com)$/;

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(CORE)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys()
    .then(keys => Promise.all(keys.filter(k => k.startsWith('benefit-planner-') && k !== CACHE).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});
const put = (req, res) => { if (res && (res.ok || res.type === 'opaque')) { const copy = res.clone(); caches.open(CACHE).then(c => c.put(req, copy)); } return res; };
self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin === self.location.origin) {
    e.respondWith(fetch(req).then(res => put(req, res))
      .catch(() => caches.match(req, { ignoreSearch: true }).then(r => r || caches.match('./index.html'))));
  } else if (SHARED.test(url.hostname)) {
    e.respondWith(caches.match(req).then(r => r || fetch(req).then(res => put(req, res))));
  }
});
self.addEventListener('notificationclick', e => {
  e.notification.close();
  const hash = (e.notification.data && e.notification.data.hash) || 'menu';
  e.waitUntil(self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then(list => {
    if (list.length) { list[0].postMessage({ type: 'open', hash }); return list[0].focus(); }
    return self.clients.openWindow('./#' + hash);
  }));
});
