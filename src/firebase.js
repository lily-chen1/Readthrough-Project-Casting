import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAhZunTEpuLdYrRdVXfLM_xSpFaeN7HZ2E",
  authDomain: "readthrough-network.firebaseapp.com",
  databaseURL: "https://readthrough-network-default-rtdb.firebaseio.com",
  projectId: "readthrough-network",
  storageBucket: "readthrough-network.appspot.com",
  messagingSenderId: "91949141674",
  appId: "1:91949141674:web:c0b1d58b23260eaa634ad3",
};
const app = initializeApp(firebaseConfig);

export { app };
