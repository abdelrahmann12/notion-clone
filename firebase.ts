// Import the functions you need from the SDKs you need
import { getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD4y3PI4Oc_YxLNw8_dYnLjIgu5o0Vlsb8",
  authDomain: "notion-clone-8bfb3.firebaseapp.com",
  projectId: "notion-clone-8bfb3",
  storageBucket: "notion-clone-8bfb3.firebasestorage.app",
  messagingSenderId: "321641808778",
  appId: "1:321641808778:web:fb08093aed33a224603e73"
};

// Initialize Firebase
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps();
const db = getFirestore(app);
export { db };