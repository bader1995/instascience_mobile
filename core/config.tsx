import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAufj6HMyEjJfh2q2xvUSXI06fiW-90pkg",
  authDomain: "testproject-4cc24.firebaseapp.com",
  projectId: "testproject-4cc24",
  storageBucket: "testproject-4cc24.appspot.com",
  messagingSenderId: "659970630151",
  appId: "1:659970630151:web:6f3b46069710784a5b00a2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)