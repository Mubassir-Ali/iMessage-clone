import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyCeW5Y4b_6Nq0NwqNkH4a4HfmEpkRvqTbw",
    authDomain: "imessage-clone-bc7dd.firebaseapp.com",
    projectId: "imessage-clone-bc7dd",
    storageBucket: "imessage-clone-bc7dd.appspot.com",
    messagingSenderId: "568102676414",
    appId: "1:568102676414:web:7bc2466eea8baf96aabbef"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig)
  const db =firebaseApp.firestore()