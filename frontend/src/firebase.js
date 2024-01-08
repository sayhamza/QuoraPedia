// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAMJHWptR6BqBEU-LwlNBVEbee8_m4Swt8",
  authDomain: "socialfirebase-873a3.firebaseapp.com",
  projectId: "socialfirebase-873a3",
  storageBucket: "socialfirebase-873a3.appspot.com",
  messagingSenderId: "226021396076",
  appId: "1:226021396076:web:048224860277c114959249",
  measurementId: "G-N5GQ8KC4GY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth()
const provider = new GoogleAuthProvider()

export{auth,provider}