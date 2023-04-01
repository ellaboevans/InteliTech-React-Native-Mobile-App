// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB1vo9eLxvNtwEjrYFj70AQc1W8J0LA-GQ",
  authDomain: "fir-auth-a48d5.firebaseapp.com",
  projectId: "fir-auth-a48d5",
  storageBucket: "fir-auth-a48d5.appspot.com",
  messagingSenderId: "101622503873",
  appId: "1:101622503873:web:2f5561a5b8df09b739b740",
};

// Initialize Firebase
let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const auth = firebase.auth();

export { auth };
