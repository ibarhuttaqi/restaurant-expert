import 'regenerator-runtime';
import CacheHelper from './utils/cache-helper';

// Daftar asset yang akan di-caching
const assetsToCache = [
  './',
  './images/icons/icon-72x72.png',
  './images/icons/icon-96x96.png',
  './images/icons/icon-128x128.png',
  './images/icons/icon-144x144.png',
  './images/icons/icon-152x152.png',
  './images/icons/icon-192x192.png',
  './images/icons/icon-384x384.png',
  './images/icons/icon-512x512.png',
  './index.html',
  './images/logo/item_delicious_adeptus_temptation.webp',
  './app.bundle.js',
  './app.webmanifest',
  './sw.bundle.js',
  'https://restaurant-api.dicoding.dev/images/large/'
];

self.addEventListener('install', (event) => {
  console.log('Installing Service Worker ...');
  event.waitUntil(CacheHelper.cachingAppShell([...assetsToCache]));
});

self.addEventListener('activate', (event) => {
  console.log('Activating Service Worker ...');
  event.waitUntil(CacheHelper.deleteOldCache());
});

self.addEventListener('fetch', (event) => {
  // console.log(event.request);
  // event.respondWith(fetch(event.request));
  event.respondWith(CacheHelper.revalidateCache(event.request));
});