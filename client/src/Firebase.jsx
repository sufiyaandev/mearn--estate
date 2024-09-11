import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "buy-estate-7d8k.onrender.com",
  projectId: "mern-estate-e1b7c",
  storageBucket: "mern-estate-e1b7c.appspot.com",
  messagingSenderId: "313647167035",
  appId: "1:313647167035:web:f8b7c8b0ffea0be252ce1e",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
