importScripts('https://www.gstatic.com/firebasejs/7.6.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.6.0/firebase-messaging.js');
firebase.initializeApp({
  apiKey: "AIzaSyClPL2nFwcRw816rORKUn4KTRkxziA9iuI",
  authDomain: "prm-prj.firebaseapp.com",
  databaseURL: "https://prm-prj.firebaseio.com",
  projectId: "prm-prj",
  storageBucket: "prm-prj.appspot.com",
  messagingSenderId: "533885649295",
  appId: "1:533885649295:web:a50f68346cc29ddf494bfa"
});
const messaging = firebase.messaging();
messaging.setBackgroundMessageHandler(function(payload) {
  alert('has message');
  const sender = JSON.parse(payload.data.message);
  const notificationTitle = 'New CometChat message';
  const notificationOptions = {
    body: payload.data.alert,
    icon: sender.data.entities.sender.entity.avatar,
  };
  alert('has message');
});
