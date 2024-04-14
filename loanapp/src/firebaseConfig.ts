// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";=
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD48fakZA-SZI5Y4g8yvkmFi_lrSbwtMUU",
  authDomain: "paygeonv.firebaseapp.com",
  databaseURL: "https://paygeonv-default-rtdb.firebaseio.com",
  projectId: "paygeonv",
  storageBucket: "paygeonv.appspot.com",
  messagingSenderId: "292818915205",
  appId: "1:292818915205:web:d3c6f5cea8dbfcf17abeec",
  measurementId: "G-ZY9RF1EEXF"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app)
export const storage = getStorage(app)
// export const storage = getStorage()