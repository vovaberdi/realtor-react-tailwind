// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyANMWpROlTfWNBI0wpybtxtbCUK21RFyH8",
  authDomain: "realtor-clone-react-8610a.firebaseapp.com",
  projectId: "realtor-clone-react-8610a",
  storageBucket: "realtor-clone-react-8610a.appspot.com",
  messagingSenderId: "1081202402707",
  appId: "1:1081202402707:web:7e6c62a32116bffab9f466"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();