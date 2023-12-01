// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBTcMr0NcBTxO1PPY-JJ5b1lpo9XjJS3_Y",
  authDomain: "gn-energy.firebaseapp.com",
  projectId: "gn-energy",
  storageBucket: "gn-energy.appspot.com",
  messagingSenderId: "1032164426830",
  appId: "1:1032164426830:web:f90eed4474d758652a6f1f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
const provider=new GoogleAuthProvider()
export {auth,provider}