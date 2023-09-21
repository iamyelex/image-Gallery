import { initializeApp } from "firebase/app";
import {
  //   createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { email, password } from "../utils/constant";

const firebaseConfig = {
  apiKey: "AIzaSyCWE-8Avb-uLMJCbYN-IvzWBKfSvx7qqJw",
  authDomain: "image-gallery-e92ef.firebaseapp.com",
  projectId: "image-gallery-e92ef",
  storageBucket: "image-gallery-e92ef.appspot.com",
  messagingSenderId: "679322922295",
  appId: "1:679322922295:web:2a06016daa97286809feb2",
};

export const initFirebase = initializeApp(firebaseConfig);

const auth = getAuth();

// createUserWithEmailAndPassword(auth, email, password)
//   .then((cred) => {
//     console.log(cred.user);
//   })
//   .catch((error) => {
//     console.log(error.message);
//   });

// LOG OUT USER
export const logOut = function () {
  signOut(auth)
    .then(console.log("user logged out"))
    .catch((error) => console.log(error.message));
};

// LOG IN USER
export const login = function () {
  signInWithEmailAndPassword(auth, email, password)
    .then((cred) => console.log("user logged in:", cred.user))
    .catch((err) => console.log(err.message));
};
