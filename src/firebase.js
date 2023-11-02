// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCbRpCP8qYyZt9l_A_bgRqylKi2jdKiXwc",
  authDomain: "practice-blog-96d04.firebaseapp.com",
  projectId: "practice-blog-96d04",
  storageBucket: "practice-blog-96d04.appspot.com",
  messagingSenderId: "160269616213",
  appId: "1:160269616213:web:31f81f0a0dfb436e3a00dc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider()
const db = getFirestore(app)

export { auth , provider , db }