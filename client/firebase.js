// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.FIREBASE_API_KEY,
  authDomain: "mern-estate-app-kanth.firebaseapp.com",
  projectId: "mern-estate-app-kanth",
  storageBucket: "mern-estate-app-kanth.appspot.com",
  messagingSenderId: "331899090524",
  appId: "1:331899090524:web:3aafe3a43ecb8ba54d1899",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
