// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBYgazt2HZVbLCyg9geqBnqZnVYAbQRkE0",
  authDomain: "menus0.firebaseapp.com",
  projectId: "menus0",
  storageBucket: "menus0.appspot.com",
  messagingSenderId: "608306035912",
  appId: "1:608306035912:web:6c0f3b8fbbe9837cc5f9fd",
  measurementId: "G-DV8W521JB1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
