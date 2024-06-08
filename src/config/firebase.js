import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAMfut-4-lFhQhSThB_1noOGM4Oe1KXSLg",
  authDomain: "baby-shop-4b0c3.firebaseapp.com",
  projectId: "baby-shop-4b0c3",
  storageBucket: "baby-shop-4b0c3.appspot.com",
  messagingSenderId: "112397309205",
  appId: "1:112397309205:web:296eb9b00b42952808851c",
  measurementId: "G-6SHKRW9QYG",
};

const app = initializeApp(firebaseConfig);
const googleProvider = new GoogleAuthProvider();
const auth = getAuth();
export { googleProvider, auth };
