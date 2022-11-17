// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDQbRidr6Ux8b7DhJhtV22dETCdWAye694",
  authDomain: "tic-project-e7a12.firebaseapp.com",
  projectId: "tic-project-e7a12",
  storageBucket: "tic-project-e7a12.appspot.com",
  messagingSenderId: "466731744971",
  appId: "1:466731744971:web:7638dac7d0124dc8cf654e",
  measurementId: "G-6KK03RVKX8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = firebaseApp.firestore();
const usersCollection = db.collection("users");