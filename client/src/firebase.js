// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-fc876.firebaseapp.com",
  projectId: "mern-auth-fc876",
  storageBucket: "mern-auth-fc876.appspot.com",
  messagingSenderId: "1031547533922",
  appId: "1:1031547533922:web:648d6f8be3f7c890996f3b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);