// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC-qPeO40bMn0DjrA4VD9hReKGIgqb7plI",
  authDomain: "instagram-1e2cb.firebaseapp.com",
  projectId: "instagram-1e2cb",
  storageBucket: "instagram-1e2cb.firebasestorage.app",
  messagingSenderId: "296297065947",
  appId: "1:296297065947:web:c142ff8f24cc59c5e6cbfe",
  measurementId: "G-H3RVXE5KVG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);6
export const db = getFirestore(app);