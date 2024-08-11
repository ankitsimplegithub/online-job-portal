// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";




const firebaseConfig = {
  apiKey: "AIzaSyALJey7K9O6EHl2n3qPtMM7v3jfcLaUYnk",
  authDomain: "online-job-portal-36c80.firebaseapp.com",
  projectId: "online-job-portal-36c80",
  storageBucket: "online-job-portal-36c80.appspot.com",
  messagingSenderId: "265224806739",
  appId: "1:265224806739:web:a3225a220ed60ea779c1a6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db};