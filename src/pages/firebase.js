// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBqQdK5XJ1L_APvIM8IbHhucafjBX3TLPU",
  authDomain: "navigo-6ef6c.firebaseapp.com",
  projectId: "navigo-6ef6c",
  storageBucket: "navigo-6ef6c.firebasestorage.app",
  messagingSenderId: "58284097478",
  appId: "1:58284097478:web:5ef3fa6708ca2e95f9bcc7",
  measurementId: "G-TE0B9J1Y2G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);    
export default app;