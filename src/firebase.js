// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBvnFsaOr9mjrkreEB3YLD4OkM9417rQBE",
  authDomain: "react-insta-clone-96119.firebaseapp.com",
  projectId: "react-insta-clone-96119",
  storageBucket: "react-insta-clone-96119.appspot.com",
  messagingSenderId: "575930337748",
  appId: "1:575930337748:web:e13e38627d3b5ad2102e41",
  measurementId: "G-7Z0PQY1PBJ",
};

// Initialize Firebase
const App = initializeApp(firebaseConfig);

const db = getFirestore();

const auth = getAuth();

export { auth };

export default db;
