// Import the functions you need from the SDKs you need
import  {initializeApp}  from "firebase/app";
//import 'firebase/compat/storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC-yCkaFvGjwlhpcCC-b1UEQLCbk9mWbZE",
  authDomain: "quality-menswear.firebaseapp.com",
  projectId: "quality-menswear",
  storageBucket: "quality-menswear.appspot.com",
  messagingSenderId: "569606697426",
  appId: "1:569606697426:web:23dc04741a01d85be3580b",
  storageBucket : 'gs://quality-menswear.appspot.com'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

