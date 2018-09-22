/** Service worker example code from https://developers.google.com/web/fundamentals/primers/service-workers/ **/


if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('/sw.js').then(function(registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function(err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}


self.addEventListener('install', function(event) {
    // Perform install steps
  });
  var CACHE_NAME = 'my-site-cache-v1';
  var urlsToCache = [
    '/',
    '/styles/main.css',
    '/script/main.js'
  ];
  
  self.addEventListener('install', function(event) {
    // Perform install steps
    event.waitUntil(
      caches.open(CACHE_NAME)
        .then(function(cache) {
          console.log('Opened cache');
          return cache.addAll(urlsToCache);
        })
    );
  });
 console.log('Service Worker: Registered');
 
 self.addEventListener('install', function(e) {

 });

 const cacheFiles = [
     '/',
     '/index.html',
     '/restaurant.html',
     '/css/styles.css',
     '/js/dbhelper.js',
     '/js/main.js',
     '/js/restaurant_info.js',
     '/data/restaurants.json',
     '/img/1.jpg',
     '/img/2.jpg',
     '/img/3.jpg',
     '/img/4.jpg',
     '/img/5.jpg',
     '/img/6.jpg',
     '/img/7.jpg',
     '/img/8.jpg',
     '/img/9.jpg',
     '/img/10.jpg'
 ];
