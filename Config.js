
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBNxQo9lu7l_whe4h-PcbezO4Zt4pLxWdU",
  authDomain: "cheftap-riya.firebaseapp.com",
  projectId: "cheftap-riya",
  storageBucket: "cheftap-riya.appspot.com",
  messagingSenderId: "1084760530727",
  appId: "1:1084760530727:web:9d370ec0b73ecb29291302",
  measurementId: "${config.measurementId}"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);