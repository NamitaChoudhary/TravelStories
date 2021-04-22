import firebase from 'firebase/app';
import "firebase/database";
import "firebase/storage";





var firebaseConfig = {
    apiKey: "AIzaSyC_8ja-NlCS6rza3-XP8MvsBWoGIZuLVsY",
    authDomain: "travelstories-bba90.firebaseapp.com",
    projectId: "travelstories-bba90",
    storageBucket: "travelstories-bba90.appspot.com",
    messagingSenderId: "954082482172",
    appId: "1:954082482172:web:a68000e0b644c105470479",
    measurementId: "G-8ZGCKY5LKX"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
   export default firebase;