// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB6r2CGx4WzA-_05yZkqQvechXVXwZYJGY",
  authDomain: "otp-verification-1676d.firebaseapp.com",
  projectId: "otp-verification-1676d",
  storageBucket: "otp-verification-1676d.appspot.com",
  messagingSenderId: "369803855831",
  appId: "1:369803855831:web:75e6837cc54bd360c26d92"
};

// Initialize Firebase
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;