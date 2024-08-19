import { initializeApp, getApps, getApp } from "firebase/app"
import {getFirestore} from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
  };
  
  // Initialize Firebase
  const app = getApps().length === 0 ? initializeApp(firebaseConfig): getApp()
  const db = getFirestore(app)

  export { db }