// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyBOEoYSMaUimp0T9MktHTXLDOYK5CLMeHs",
  authDomain: "test-web-page-c4508.firebaseapp.com",
  projectId: "test-web-page-c4508",
  storageBucket: "test-web-page-c4508.appspot.com",
  messagingSenderId: "178350378549",
  appId: "1:178350378549:web:55939c800cac3dfe7fab7c",
  measurementId: "G-RMEVP021H4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
