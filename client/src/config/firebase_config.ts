// cấu hình firebase
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey:'AIzaSyAsBNRauVSiqbb53Sxy3ksDEw3VPFPzXX8',
  authDomain: "projectm24-fd34e.firebaseapp.com",
  projectId: "projectm24-fd34e",
  storageBucket: "projectm24-fd34e.appspot.com",
  messagingSenderId: "257404855150",
  appId: "1:257404855150:web:f18dc0027b2d552fb4977f",
  measurementId: "G-ZRS7PB7S85"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const storage=getStorage(app);