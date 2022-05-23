import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBAFd7RSU5toicDF8yeZD9NrsaohbXmGOM",
  authDomain: "manufacture-website-a7760.firebaseapp.com",
  projectId: "manufacture-website-a7760",
  storageBucket: "manufacture-website-a7760.appspot.com",
  messagingSenderId: "748763746208",
  appId: "1:748763746208:web:c74d120b197c14095a5ec5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;

