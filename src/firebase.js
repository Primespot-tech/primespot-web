// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseApp = firebase.initializeApp( {
    apiKey: "AIzaSyDnw_B_6zx7NODwFYN_7MMVqy7m_LzbGXM",
    authDomain: "primespot-72d6b.firebaseapp.com",
    projectId: "primespot-72d6b",
    storageBucket: "primespot-72d6b.appspot.com",
    messagingSenderId: "471506417425",
    appId: "1:471506417425:web:fb72da0ec46f8f8bad7eb0",
    measurementId: "G-5HL9DXRGNM"


  });
 
const db = firebaseApp.firestore();
const auth = firebase.auth();


export  {db,auth }; 