// src/firebase/firebase.jsx
//Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

//Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCvyWjXtxXYYsUDq0W12kxKCC1eGGVQDMU",
  authDomain: "silmiafin1.firebaseapp.com",
  projectId: "silmiafin1",
  storageBucket: "silmiafin1.appspot.com",
  messagingSenderId: "343144574718",
  appId: "1:343144574718:web:80cf2d2526bce5625b7faf",
  measurementId: "G-EBXJBV9F5Q",
};

//Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const db = getFirestore(app);
export { db };