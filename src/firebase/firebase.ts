// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAboiU2tZ-cAxFmyEoNfXslRCov24lGqRc',
  authDomain: 'openart-signin.firebaseapp.com',
  databaseURL: 'https://openart-signin-default-rtdb.firebaseio.com',
  projectId: 'openart-signin',
  storageBucket: 'openart-signin.appspot.com',
  messagingSenderId: '14813577460',
  appId: '1:14813577460:web:5490f47856c96188105ea1',
  measurementId: 'G-VDDQV6JWDE',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const authentication = getAuth(app);
