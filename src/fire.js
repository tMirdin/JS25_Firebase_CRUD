import firebase from "firebase/compat/app";
import "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCpwVl8y3owc2jD5N2K-ki2pWVXlxCETas",
  authDomain: "js25-crud-mmmm.firebaseapp.com",
  projectId: "js25-crud-mmmm",
  storageBucket: "js25-crud-mmmm.appspot.com",
  messagingSenderId: "270681882385",
  appId: "1:270681882385:web:702c11fb9dec22871e96b0",
};

// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);
export default fire;
