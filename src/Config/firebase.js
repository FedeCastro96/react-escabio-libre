// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAGQ4v6QfflxJZSd4OHSHZntkATPMDV0oI",
  authDomain: "escabio-libre.firebaseapp.com",
  projectId: "escabio-libre",
  storageBucket: "escabio-libre.firebasestorage.app",
  messagingSenderId: "967422014257",
  appId: "1:967422014257:web:5c074decce0fef2fb87610",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default { db };
