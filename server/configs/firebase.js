// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDfuYFm6FE5vgW4xxMe0XzWHTrUzStVq3o",
  authDomain: "finaly-project-649cd.firebaseapp.com",
  projectId: "finaly-project-649cd",
  storageBucket: "finaly-project-649cd.appspot.com",
  messagingSenderId: "102548259223",
  appId: "1:102548259223:web:37b242a007a8416e35c4d2",
  measurementId: "G-C27SM5EQFE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const fileStorage = getStorage(app);
