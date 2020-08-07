import firebase from "firebase";
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCSR28K3mndHZP3TOhdni1waJgGVAs9yNM",
  authDomain: "facebook-messenger-clone-a7b0f.firebaseapp.com",
  databaseURL: "https://facebook-messenger-clone-a7b0f.firebaseio.com",
  projectId: "facebook-messenger-clone-a7b0f",
  storageBucket: "facebook-messenger-clone-a7b0f.appspot.com",
  messagingSenderId: "733569380707",
  appId: "1:733569380707:web:cb402d0a1757bc0e06e356",
  measurementId: "G-B149C6F0EP",
});

const db = firebaseApp.firestore();
export default db;
