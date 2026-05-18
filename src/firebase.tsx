import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB7YrESWKM4dQNsh-zkTMQtzz-CuexH9uA",
  authDomain: "nwitter-reloaded-76143.firebaseapp.com",
  projectId: "nwitter-reloaded-76143",
  storageBucket: "nwitter-reloaded-76143.firebasestorage.app",
  messagingSenderId: "756106525371",
  appId: "1:756106525371:web:afa6d7b2bcf0904fd8c79e",
  measurementId: "G-TNMHZIHJB3",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);