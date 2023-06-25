// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCc_zoYJ_eBIt9HgiWqHuphwrNavMk8Dfo",
  authDomain: "instagram-clone-ccd2d.firebaseapp.com",
  projectId: "instagram-clone-ccd2d",
  storageBucket: "instagram-clone-ccd2d.appspot.com",
  messagingSenderId: "341522457015",
  appId: "1:341522457015:web:2842419c5c24be2e2a4832",
  measurementId: "G-V6EXMFB3HN"
};

// Initialize Firebase
const App = initializeApp(firebaseConfig, {
  experimentalForceLongPolling: true, // this line
  useFetchStreams: false, // and this line
})

const db = getFirestore();

const auth = getAuth();

export { auth };

export default db;
