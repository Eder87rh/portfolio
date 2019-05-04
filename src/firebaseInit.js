import firebase from "firebase/app";
//import config from "@/firebaseConfig";
import "firebase/firestore";

firebase.initializeApp({
  apiKey: process.env.VUE_APP_apiKey,
  authDomain: process.env.VUE_APP_authDomain,
  databaseURL: process.env.VUE_APP_databaseURL,
  projectId: process.env.VUE_APP_projectId,
  storageBucket: process.env.VUE_APP_storageBucket,
  messagingSenderId: process.env.VUE_APP_messagingSenderId
});

// Initialize Cloud Firestore through Firebase
let db = firebase.firestore();

export default {
  db
};
