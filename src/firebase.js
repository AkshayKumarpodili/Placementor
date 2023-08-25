// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getFirestore } from 'firebase/firestore'; 

const firebaseConfig = {
  
  apiKey: "AIzaSyDTVLpaMvsHpmPq06ct0NV5AemQ0O7O1HE",
  authDomain: "summerproject-97bb4.firebaseapp.com",
  projectId: "summerproject-97bb4",
  storageBucket: "summerproject-97bb4.appspot.com",
  messagingSenderId: "18205850802",
  appId: "1:18205850802:web:876c6b443f2dda0656ddab"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;