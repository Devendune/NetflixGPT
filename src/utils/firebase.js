// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCYb_-8Y2aGaqjkUvs-uE1O0HahmWGzEzo",
  authDomain: "netflixgpt-75ea7.firebaseapp.com",
  projectId: "netflixgpt-75ea7",
  storageBucket: "netflixgpt-75ea7.firebasestorage.app",
  messagingSenderId: "1077176186884",
  appId: "1:1077176186884:web:fc4c179bbe8ebbd91fdd51",
  measurementId: "G-VTPVDC7DTT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);