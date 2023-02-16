// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getStorage} from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAyOHHXnJzXHnhLDNOvPGil8eO0gTMTJ1w",
  authDomain: "pro-chat-software-engjr.firebaseapp.com",
  projectId: "pro-chat-software-engjr",
  storageBucket: "pro-chat-software-engjr.appspot.com",
  messagingSenderId: "1074437578282",
  appId: "1:1074437578282:web:32b6679c23265f77daad53",
  measurementId: "G-3MLDMYVBE4"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);


// const analytics = getAnalytics(app);
