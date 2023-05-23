import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBcOuoP6ROSL6g9ERDQe-zqS1nONXB8x_w",
  authDomain: "netflix-clone-final-45c1d.firebaseapp.com",
  projectId: "netflix-clone-final-45c1d",
  storageBucket: "netflix-clone-final-45c1d.appspot.com",
  messagingSenderId: "1013836598078",
  appId: "1:1013836598078:web:3d1f47173e7c0220803a6f",
  measurementId: "G-7GSMZG5NZQ",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { auth };
export default db;
