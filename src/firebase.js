// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDxc99qrqwKFAcVQlPtDGdC48diFZudW3M",
  authDomain: "authreact-e1b8c.firebaseapp.com",
  projectId: "authreact-e1b8c",
  storageBucket: "authreact-e1b8c.appspot.com",
  messagingSenderId: "525182993662",
  appId: "1:525182993662:web:416da1c31647d48a0311af",
  measurementId: "G-8W4KMMWDRJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);    