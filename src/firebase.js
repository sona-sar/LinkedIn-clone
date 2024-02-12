// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDuvNm1OkhkpiAO3dagT4dezvbBY2fpQGg",
    authDomain: "linkedin-clone-yt-b31f9.firebaseapp.com",
    projectId: "linkedin-clone-yt-b31f9",
    storageBucket: "linkedin-clone-yt-b31f9.appspot.com",
    messagingSenderId: "208173686798",
    appId: "1:208173686798:web:8ef2489fda993e7b889c5f",
    measurementId: "G-QM6WCNTYPS" 
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig); //connect to firebase
  const db = firebaseApp.firestore(); 
  const auth = firebase.auth();
  
  export { db, auth };