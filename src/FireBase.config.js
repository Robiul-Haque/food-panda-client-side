// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.local_apiKey,
  authDomain: import.meta.env.local_authDomain,
  projectId: import.meta.env.local_projectId,
  storageBucket: import.meta.env.local_storageBucket,
  messagingSenderId: import.meta.env.local_messagingSenderId,
  appId: import.meta.env.local_appId
};


// Initialize Firebase
export const app = initializeApp(firebaseConfig);