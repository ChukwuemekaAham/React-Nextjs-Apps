import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBhOhf6tOBghUYy8P1Rg00FkuxGMaRXg_E",
  authDomain: "project-react-5acf3.firebaseapp.com",
  projectId: "project-react-5acf3",
  storageBucket: "project-react-5acf3.appspot.com",
  messagingSenderId: "249454804059",
  appId: "1:249454804059:web:818fadddcac11e3f2b137e",
  measurementId: "G-MPFVJFYSS3",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
