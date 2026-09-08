// firebase-messaging-sw.js — tem de estar na RAIZ do site, ao lado do index.html.
// Recebe as notificações quando a página não está aberta (ou está em segundo plano).
importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js');

// >>> Substitui pelos valores da tua app Web no Firebase (Project settings → General → Your apps → Web)
firebase.initializeApp({
  apiKey: "AIzaSyDVzqfJ8HnrGW8tguzZhuLX7ngNes9ieVY",
  authDomain: "barbearia-capitao.firebaseapp.com",
  projectId: "barbearia-capitao"",
  messagingSenderId: "908910252457",
  appId: "1:908910252457:web:64bb8e2c5d3836cc81b4b8",
});

const messaging = firebase.messaging();

// Mensagens com campo `notification` são mostradas automaticamente pelo browser.
// Ao clicar, abre (ou foca) o site.
self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  const url = self.location.origin + '/';
  event.waitUntil(clients.matchAll({ type: 'window', includeUncontrolled: true }).then((list) => {
    for (const c of list) { if (c.url.startsWith(self.location.origin) && 'focus' in c) return c.focus(); }
    return clients.openWindow(url);
  }));
});
