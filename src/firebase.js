import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBblLEcKGOHcoYG-BBdjScjAAtnluEdxk0",
  authDomain: "line-app-22213.firebaseapp.com",
  projectId: "line-app-22213",
  storageBucket: "line-app-22213.appspot.com",
  messagingSenderId: "639374758037",
  appId: "1:639374758037:web:e95a34a504bd1fcd0bcb9c"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};