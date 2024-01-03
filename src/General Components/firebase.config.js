// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCdujq3EuQUYcouIqbj4G3q2uJRmemcEA8",
  authDomain: "phone-house-4f865.firebaseapp.com",
  projectId: "phone-house-4f865",
  storageBucket: "phone-house-4f865.appspot.com",
  messagingSenderId: "421622547923",
  appId: "1:421622547923:web:c2945bb9025c985e251b26"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)

export default auth;