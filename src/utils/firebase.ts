// src/utils/firebase.ts
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCU1OJiEHiQIgc5_bORgjT0ALBAjSFgOrs",
    authDomain: "vue-firebase-cc21d.firebaseapp.com",
    projectId: "vue-firebase-cc21d",
    storageBucket: "vue-firebase-cc21d.firebasestorage.app",
    messagingSenderId: "1060404597128",
    appId: "1:1060404597128:web:4aa264e1be86dee402ea3d"
  };

const firebase = initializeApp(firebaseConfig);
const auth = getAuth(firebase);
const googleProvider = new GoogleAuthProvider();
const app = initializeApp(firebaseConfig);

export { auth, googleProvider };