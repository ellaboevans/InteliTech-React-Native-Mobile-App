// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import {
  FIREBASE_AUTH_API_KEY,
  FIREBASE_AUTH_DOMAIN,
  FIREBASE_AUTH_PROJECT_ID,
  FIREBASE_AUTH_STORAGE_BUCKET,
  FIREBASE_AUTH_MESSAGING_SENDER_ID,
  FIREBASE_AUTH_APP_ID,
} from "@env";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: FIREBASE_AUTH_API_KEY,
  authDomain: FIREBASE_AUTH_DOMAIN,
  projectId: FIREBASE_AUTH_PROJECT_ID,
  storageBucket: FIREBASE_AUTH_STORAGE_BUCKET,
  messagingSenderId: FIREBASE_AUTH_MESSAGING_SENDER_ID,
  appId: FIREBASE_AUTH_APP_ID,
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
