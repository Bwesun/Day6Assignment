// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAiuyAACq1HBsQUt-jNCoL4qRJmpo2jfro",
  authDomain: "mobile-dev-app-15817.firebaseapp.com",
  projectId: "mobile-dev-app-15817",
  storageBucket: "mobile-dev-app-15817.firebasestorage.app",
  messagingSenderId: "363042411306",
  appId: "1:363042411306:web:9a115fedcd0b9ee31c4453",
  measurementId: "G-SD3QWPFRG5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {auth, signInWithEmailAndPassword, createUserWithEmailAndPassword}