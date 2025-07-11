// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBIzv6ZyWN2rnKHwvMwAnvflUeHmDXR74U",
  authDomain: "foodvilla-d03a6.firebaseapp.com",
  projectId: "foodvilla-d03a6",
  storageBucket: "foodvilla-d03a6.firebasestorage.app",
  messagingSenderId: "668274341143",
  appId: "1:668274341143:web:e7b678435c34a01169f352",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);
export default app;
