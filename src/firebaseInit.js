import firebase from "firebase/app";
import config from "@/firebaseConfig";
import "firebase/firestore";

firebase.initializeApp(config);

// Initialize Cloud Firestore through Firebase
let db = firebase.firestore();

export default {
  db
};
