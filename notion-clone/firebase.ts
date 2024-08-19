import { initializeApp, getApps, getApp } from "firebase/app"
import {getFirestore} from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBUWHstIuXvX3ajme1U4BpEPFnHDhNbLn8",
    authDomain: "notion-clone-598ce.firebaseapp.com",
    projectId: "notion-clone-598ce",
    storageBucket: "notion-clone-598ce.appspot.com",
    messagingSenderId: "494244331283",
    appId: "1:494244331283:web:d70ff6bb6ab0668ed2a4e6"
  };
  
  // Initialize Firebase
  const app = getApps().length === 0 ? initializeApp(firebaseConfig): getApp()
  const db = getFirestore(app)

  export { db }