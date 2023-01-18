// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDCn0ZVdkSSAvS5PC3Z5s7CrWKyXrca2gc",
  authDomain: "olxc-795b0.firebaseapp.com",
  projectId: "olxc-795b0",
  storageBucket: "olxc-795b0.appspot.com",
  messagingSenderId: "953901698851",
  appId: "1:953901698851:web:5fd840f667f50983150696",
  measurementId: "G-PG5NDRBEYY"
};

// Initialize Firebase
export const firebase= initializeApp(firebaseConfig);
export const auth = getAuth(firebase);
