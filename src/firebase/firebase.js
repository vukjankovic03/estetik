import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAi1AcUQw_q_USXPEaN-vl19YK3Rjw7tho",
  authDomain: "estetik-a7b38.firebaseapp.com",
  projectId: "estetik-a7b38",
  storageBucket: "estetik-a7b38.firebasestorage.app",
  messagingSenderId: "181074798234",
  appId: "1:181074798234:web:2834f62d87ab75f5efe123",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);