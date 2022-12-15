// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getDatabase} from 'firebase/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDV68R4z_HLUXV2fuUhZ4PYJipa1LeYTVA",
  authDomain: "projeto-formulario-e3978.firebaseapp.com",
  projectId: "projeto-formulario-e3978",
  storageBucket: "projeto-formulario-e3978.appspot.com",
  messagingSenderId: "823046993538",
  appId: "1:823046993538:web:8c3a1425a169ad321aa69b",
  databaseURL : 'https://projeto-formulario-e3978-default-rtdb.firebaseio.com/'
};

// Initialize Firebase
initializeApp(firebaseConfig);
const database = getDatabase ()

export {database}