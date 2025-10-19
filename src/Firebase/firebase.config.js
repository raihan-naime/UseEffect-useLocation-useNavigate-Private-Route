// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC4-MR3cyubXlyMINtkG1oTKdQFUQi_lxE",
  authDomain: "react-firebase-auth-prac-7fbc9.firebaseapp.com",
  projectId: "react-firebase-auth-prac-7fbc9",
  storageBucket: "react-firebase-auth-prac-7fbc9.firebasestorage.app",
  messagingSenderId: "383864496565",
  appId: "1:383864496565:web:2313e54a380174064fb9fc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);