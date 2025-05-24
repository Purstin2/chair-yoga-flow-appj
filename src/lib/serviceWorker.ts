// Service worker for offline functionality and caching
// This will allow the app to work when offline or with poor connection

// Type definitions
declare const self: ServiceWorkerGlobalScope;

interface ExtendableEvent extends Event {
  waitUntil(fn: Promise<any>): void;
}

interface FetchEvent extends Event {
  request: Request;
  respondWith(response: Promise<Response> | Response): void;
}

interface SyncEvent extends Event {
  tag: string;
  waitUntil(fn: Promise<any>): void;
}

// Unique cache name for this version
const CACHE_NAME = 'chair-yoga-flow-cache-v1';

// Assets to cache on install
const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/manifest.json',
  '/favicon.ico',
  '/beep.mp3',
  '/complete.mp3'
];

// Install event - cache static assets
self.addEventListener('install', (event: ExtendableEvent) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Service Worker: Caching static assets');
        return cache.addAll(STATIC_ASSETS);
      })
      .then(() => self.skipWaiting())
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event: ExtendableEvent) => {
  const cacheWhitelist = [CACHE_NAME];
  
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            console.log('Service Worker: Deleting old cache', cacheName);
            return caches.delete(cacheName);
          }
          return Promise.resolve();
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch event - serve from cache first, then network
self.addEventListener('fetch', (event: FetchEvent) => {
  // Skip cross-origin requests
  if (!event.request.url.startsWith(self.location.origin)) {
    return;
  }
  
  // Handle API requests specially (don't cache by default)
  if (event.request.url.includes('/api/')) {
    return handleApiRequest(event);
  }
  
  // For other requests, use cache-first strategy
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Return cached response if found
        if (response) {
          return response;
        }
        
        // Otherwise fetch from network
        return fetch(event.request)
          .then(response => {
            // Don't cache non-successful responses
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }
            
            // Clone the response to save in cache and return to browser
            const responseToCache = response.clone();
            
            caches.open(CACHE_NAME)
              .then(cache => {
                cache.put(event.request, responseToCache);
              });
              
            return response;
          })
          .catch(error => {
            // For navigation requests, serve index.html as fallback
            if (event.request.mode === 'navigate') {
              return caches.match('/index.html');
            }
            
            console.error('Service Worker fetch failed:', error);
            throw error;
          });
      })
  );
});

// Handle API requests with network-first strategy
function handleApiRequest(event: FetchEvent) {
  event.respondWith(
    fetch(event.request)
      .then(response => {
        // Clone response to save in cache
        const responseToCache = response.clone();
        
        // Only cache successful responses
        if (response.status === 200) {
          caches.open(CACHE_NAME)
            .then(cache => {
              cache.put(event.request, responseToCache);
            });
        }
        
        return response;
      })
      .catch(() => {
        // If network request fails, try from cache
        return caches.match(event.request);
      })
  );
}

// Sync user data when connection is restored
self.addEventListener('sync', (event: SyncEvent) => {
  if (event.tag === 'sync-user-data') {
    event.waitUntil(syncUserData());
  }
});

// Function to sync user data from IndexedDB to server when online
async function syncUserData() {
  // This would be implemented with IndexedDB
  console.log('Syncing user data to server');
  // Implementation would depend on how you store offline changes
} 