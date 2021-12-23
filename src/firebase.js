import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDq0PfGr3KGKsKV7A3kNmh4QWGQ1fr3-nU",
  authDomain: "netflix-clone-6bc9e.firebaseapp.com",
  projectId: "netflix-clone-6bc9e",
  storageBucket: "netflix-clone-6bc9e.appspot.com",
  messagingSenderId: "932908798309",
  appId: "1:932908798309:web:3b5694615d41c2a41d918c",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
