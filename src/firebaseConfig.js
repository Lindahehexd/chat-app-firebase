import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBaLiC99o6g7Tof6ABj7qRxGE6bY16sCkE",
  authDomain: "chat-app-b82b4.firebaseapp.com",
  projectId: "chat-app-b82b4",
  storageBucket: "chat-app-b82b4.appspot.com",
  messagingSenderId: "308528732710",
  appId: "1:308528732710:web:b22068fdc3b721d63b24e7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);
export { auth, provider, db };
