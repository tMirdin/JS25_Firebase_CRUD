import firebase from "firebase/compat/app";
import "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC3TXXp9AHmZbuKw3YVTUMXx6mulahBoJg",
  authDomain: "trouble-makers.firebaseapp.com",
  projectId: "trouble-makers",
  storageBucket: "trouble-makers.appspot.com",
  messagingSenderId: "546691408006",
  appId: "1:546691408006:web:6a9667e2e3105c9ea27107",
};

// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);
export default fire;
