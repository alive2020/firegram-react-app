import * as firebase from 'firebase/app'
import 'firebase/storage';
import 'firebase/firestore';


// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyC-P82qtOiXe8_poL-iFXBuixPhgzVbzsw",
    authDomain: "ice-firegram.firebaseapp.com",
    projectId: "ice-firegram",
    storageBucket: "ice-firegram.appspot.com",
    messagingSenderId: "178077772760",
    appId: "1:178077772760:web:85886ddb647bd5c7f2e0ad"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export  { projectStorage, projectFirestore, timestamp };