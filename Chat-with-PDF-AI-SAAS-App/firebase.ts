import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBUWHstIuXvX3ajme1U4BpEPFnHDhNbLn8",
  authDomain: "notion-clone-598ce.firebaseapp.com",
  projectId: "notion-clone-598ce",
  storageBucket: "notion-clone-598ce.appspot.com",
  messagingSenderId: "494244331283",
  appId: "1:494244331283:web:847215a0cc359dbbd2a4e6"
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };
