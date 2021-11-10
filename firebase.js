// Import the functions you need from the SDKs you need
import firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCinRti3gV6qqmxAg8Nbukt1mutrzuhdMQ",

  authDomain: "integradora-iii.firebaseapp.com",

  projectId: "integradora-iii",

  storageBucket: "integradora-iii.appspot.com",

  messagingSenderId: "341238291792",

  appId: "1:341238291792:web:e318da1bd2ab663bf6a055",

  measurementId: "G-4E5WVTJCKJ"

};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}

const auth = firebase.auth();
const db = firebase.firestore();

export { auth, db };