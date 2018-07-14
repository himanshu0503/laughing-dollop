importScripts('https://www.gstatic.com/firebasejs/5.2.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/5.2.0/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing in the
// messagingSenderId.
firebase.initializeApp({
  'messagingSenderId': '684149880129'
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();

self.addEventListener('notificationclick', function(event) {
  console.log('notification clicked');
});
