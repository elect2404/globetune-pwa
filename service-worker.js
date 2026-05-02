// GlobeTune Service Worker v1.0
const CACHE_NAME = 'globetune-v1';
const OFFLINE_URL = '/offline.html';

// Recursos a cachear al instalar
const PRECACHE_ASSETS = [
  '/',
  '/index.html',
  'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap',
  'https://unpkg.com/@phosphor-icons/web'
];

// ── Instalación ──────────────────────────────────────────────
self.addEventListener('install', (event) => {
  console.log('[GlobeTune SW] Instalando...');
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(PRECACHE_ASSETS).catch((err) => {
        console.warn('[GlobeTune SW] Error precaching:', err);
      });
    })
  );
  self.skipWaiting();
});

// ── Activación ───────────────────────────────────────────────
self.addEventListener('activate', (event) => {
  console.log('[GlobeTune SW] Activado.');
  event.waitUntil(
    caches.keys().then((keyList) =>
      Promise.all(
        keyList.map((key) => {
          if (key !== CACHE_NAME) {
            console.log('[GlobeTune SW] Eliminando caché antiguo:', key);
            return caches.delete(key);
          }
        })
      )
    )
  );
  self.clients.claim();
});

// ── Estrategia de fetch ──────────────────────────────────────
self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);

  // No interceptar streams de audio ni API de Radio Browser
  if (
    url.hostname.includes('radio-browser.info') ||
    url.hostname.includes('geojs.io') ||
    event.request.destination === 'audio'
  ) {
    return; // Dejar pasar sin cache
  }

  // Estrategia: Network First → Cache fallback
  event.respondWith(
    fetch(event.request)
      .then((response) => {
        // Guardar copia en caché si es válida
        if (response && response.status === 200 && response.type === 'basic') {
          const responseClone = response.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseClone);
          });
        }
        return response;
      })
      .catch(() => {
        // Sin red → buscar en caché
        return caches.match(event.request).then((cached) => {
          if (cached) return cached;
          // Si es navegación y no hay caché, mostrar página offline
          if (event.request.mode === 'navigate') {
            return caches.match(OFFLINE_URL);
          }
        });
      })
  );
});

// ── Push Notifications (base) ────────────────────────────────
self.addEventListener('push', (event) => {
  const data = event.data?.json() ?? {};
  self.registration.showNotification(data.title || 'GlobeTune', {
    body: data.body || 'Nueva emisora disponible',
    icon: '/icons/icon-192.png',
    badge: '/icons/icon-192.png'
  });
});
