import firebase from 'firebase/app';
import 'firebase/firestore'
import 'firebase/auth'

var firebaseConfig = {
    apiKey: "AIzaSyCX4Ppj4qgutiIDUVx6nMaeUWpdOJurEds",
    authDomain: "marioplan-5fe88.firebaseapp.com",
    databaseURL: "https://marioplan-5fe88.firebaseio.com",
    projectId: "marioplan-5fe88",
    storageBucket: "marioplan-5fe88.appspot.com",
    messagingSenderId: "969553039501",
    appId: "1:969553039501:web:f644f35c0fd255eab2d2c4"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({});

export default firebaseConfig;