import firebase from 'firebase/app'
import 'firebase/firestore'

// Initialize Firebase
var config = {
    apiKey: "AIzaSyAHjqOML_B-ZTYRvsATTVQog_oFFPD4uaE",
    authDomain: "sircularity-f8c41.firebaseapp.com",
    databaseURL: "https://sircularity-f8c41.firebaseio.com",
    projectId: "sircularity-f8c41",
    storageBucket: "sircularity-f8c41.appspot.com",
    messagingSenderId: "938412003445",
  };
  firebase.initializeApp(config);
  const db = firebase.firestore();



  export default db;