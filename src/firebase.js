import firebase from "firebase/compat/app";
import "firebase/compat/auth"; //for authentication
import "firebase/compat/storage"; //for storage
import "firebase/compat/database"; //for realtime database
import "firebase/compat/firestore"; //for cloud firestore

const firebaseConfig = {
  apiKey: "AIzaSyB-N9duDfdAa5qJYhPLU2a9YrSQ5Mtu6_w",
  authDomain: "popular-social-mern-a9128.firebaseapp.com",
  projectId: "popular-social-mern-a9128",
  storageBucket: "popular-social-mern-a9128.appspot.com",
  messagingSenderId: "850289496408",
  appId: "1:850289496408:web:4629affb3000e04711952d",
  measurementId: "G-V6F1GK0WWG",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
