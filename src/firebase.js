import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";


const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyD5QtNcgxEW5hDbTNl0S98bxiTWH7SyOi4",
  authDomain: "line-clone-33cec.firebaseapp.com",
  projectId: "line-clone-33cec",
  storageBucket: "line-clone-33cec.appspot.com",
  messagingSenderId: "1079486458040",
  appId: "1:1079486458040:web:219709efa555e5344fac4d",
});

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };
