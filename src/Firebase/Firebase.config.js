import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAeHlzu45cSvXYlxnWmFdr9EQPDL97bIjU",
  authDomain: "carepoint-camps.firebaseapp.com",
  projectId: "carepoint-camps",
  storageBucket: "carepoint-camps.appspot.com",
  messagingSenderId: "749039357243",
  appId: "1:749039357243:web:449591b4adc6dfd10abb1e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
