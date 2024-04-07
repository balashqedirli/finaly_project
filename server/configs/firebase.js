// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA2OdSTm9e6cVWdnt6606Zk6jU79rSexPs",
  authDomain: "foody-project-9c91c.firebaseapp.com",
  databaseURL: "https://foody-project-9c91c-default-rtdb.firebaseio.com",
  projectId: "foody-project-9c91c",
  storageBucket: "foody-project-9c91c.appspot.com",
  messagingSenderId: "512506666803",
  appId: "1:512506666803:web:ab9b9740490b1b0fd1e846"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const fileStorage = getStorage(app);
