// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC6OGfUoMeAVC_2yDSuozK4Tq5soWMrZI0",
  authDomain: "rubishop.firebaseapp.com",
  projectId: "rubishop",
  storageBucket: "rubishop.appspot.com",
  messagingSenderId: "1091899171751",
  appId: "1:1091899171751:web:c052b495d06f3300fe0c82",
  measurementId: "G-G7PEBWLSJR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Base de datos:
export const database = getFirestore(app)