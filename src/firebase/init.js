import { initializeApp } from "firebase"
import {  getFirestore } from

const firebaseConfig = {
    apiKey: "AIzaSyDE7jLXMAc_o4FH9WoWNq8fGz5DxvcnHfs",
    authDomain: "burger-queen-44a59.firebaseapp.com",
    projectId: "burger-queen-44a59",
    storageBucket: "burger-queen-44a59.appspot.com",
    messagingSenderId: "308395620944",
    appId: "1:308395620944:web:36ae5519f34708ab562f55",
    measurementId: "G-FC1SJ1KS75"
  };

  // Initialize Firebase
export const app = initializeApp(firebaseConfig);
//inicializamos firestore
export const db = getFirestore(app);
  // iniciamos data base