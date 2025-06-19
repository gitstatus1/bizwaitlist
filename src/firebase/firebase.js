// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCv5c5iez93l3d9o5lhB44R2s95zp1pmvY",
  authDomain: "merbauwaitlist.firebaseapp.com",
  projectId: "merbauwaitlist",
  storageBucket: "merbauwaitlist.firebasestorage.app",
  messagingSenderId: "1032096323257",
  appId: "1:1032096323257:web:6d0e6ba2eb10c048486d68",
  measurementId: "G-8R1LBCKR3G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };