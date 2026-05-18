import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB7YrESWKM4dQNsh-zkTMQtzx-CuexH9uA",
  authDomain: "nwitter-reloaded-76143.firebaseapp.com",
  projectId: "nwitter-reloaded-76143",
  storageBucket: "nwitter-reloaded-76143.firebasestorage.app",
  messagingSenderId: "756106525371",
  appId: "1:756106525371:web:afa6d7b2bcf0904fd8c79e",
  measurementId: "G-TNMHZ1HJB3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);