// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAhZunTEpuLdYrRdVXfLM_xSpFaeN7HZ2E",
  authDomain: "readthrough-network.firebaseapp.com",
  databaseURL: "https://readthrough-network-default-rtdb.firebaseio.com",
  projectId: "readthrough-network",
  storageBucket: "readthrough-network.appspot.com",
  messagingSenderId: "91949141674",
  appId: "1:91949141674:web:269a81b2a8ca6189634ad3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Realtime Database and get a reference to the service
const db = getDatabase(app);