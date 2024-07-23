// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBwWJSS6sW9Piud-E7ADKUvmT_pWnI-zEs",
  authDomain: "e-commerce-sweet-shop.firebaseapp.com",
  projectId: "e-commerce-sweet-shop",
  storageBucket: "e-commerce-sweet-shop.appspot.com",
  messagingSenderId: "239473780827",
  appId: "1:239473780827:web:fb5f689984451c91a8377e",
  measurementId: "G-WEJW3E5WT6"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export { fireDB, auth }
