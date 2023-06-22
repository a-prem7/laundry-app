// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCoMg7djtjXfWs1R3qC8acl6BvKjgiSVog",
  authDomain: "laundry-app-d89b4.firebaseapp.com",
  projectId: "laundry-app-d89b4",
  storageBucket: "laundry-app-d89b4.appspot.com",
  messagingSenderId: "219999788541",
  appId: "1:219999788541:web:865e4be4ef00843d1f4d94",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore();

export { auth, db };
