// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAjHcMQyxNSVzC6dmv83FwC07UusVfkrCY",
  authDomain: "netflixgpt-884f2.firebaseapp.com",
  projectId: "netflixgpt-884f2",
  storageBucket: "netflixgpt-884f2.firebasestorage.app",
  messagingSenderId: "778708956377",
  appId: "1:778708956377:web:a3ed9b773fafb52d34fac8",
  measurementId: "G-M1VBHDJ9YH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
