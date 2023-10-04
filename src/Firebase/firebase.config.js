// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyDBxbfnXQbXvNv0c99qy3VvWuXWIIgLz5o",
  authDomain: "travel-guru-11c67.firebaseapp.com",
  projectId: "travel-guru-11c67",
  storageBucket: "travel-guru-11c67.appspot.com",
  messagingSenderId: "714351346626",
  appId: "1:714351346626:web:faca0afcd293288894cc5b"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);