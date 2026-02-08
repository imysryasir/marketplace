// Firebase SDKs
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { 
  getAuth, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

import { 
  getFirestore,
  collection,
  addDoc,
  getDocs,
  query,
  where,
  orderBy,
  onSnapshot,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// 🔐 YOUR CONFIG
const firebaseConfig = {
  apiKey: "AIzaSyAuijyOJ4ehJzEgMqu7ovEXGL5rxE62w-k",
  authDomain: "marketplace-cbfca.firebaseapp.com",
  projectId: "marketplace-cbfca",
  storageBucket: "marketplace-cbfca.firebasestorage.app",
  messagingSenderId: "684367762955",
  appId: "1:684367762955:web:4105024f880914c726990e"
};

// Init
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

// Helpers
export {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  collection,
  addDoc,
  getDocs,
  query,
  where,
  orderBy,
  onSnapshot,
  serverTimestamp
};
