import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.CHAT_APP_API_KEY,
  authDomain: process.env.CHAT_APP_AUTH_DOMAIN,
  databaseURL: process.env.CHAT_DATABASE_URL,
  projectId:process.env.CHAT_APP_PROJECT_ID,
  storageBucket:process.env.CHAT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.CHAT_APP_MESSAGING_SENDER_ID,
  appId:process.env.CHAT_APP_APP_ID
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };
