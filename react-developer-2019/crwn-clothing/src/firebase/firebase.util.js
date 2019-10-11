import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCW1SQL0OIfK3qoVJu7u8aWNVFNr4a7tfA",
  authDomain: "crwn-db-a5e25.firebaseapp.com",
  databaseURL: "https://crwn-db-a5e25.firebaseio.com",
  projectId: "crwn-db-a5e25",
  storageBucket: "crwn-db-a5e25.appspot.com",
  messagingSenderId: "1094821093600",
  appId: "1:1094821093600:web:e9916023ad3ae968fcf085",
  measurementId: "G-S4PY4TYFJ0"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

