// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_local_apiKey,
  authDomain: import.meta.env.VITE_local_authDomain,
  projectId: import.meta.env.VITE_local_projectId,
  storageBucket: import.meta.env.VITE_local_storageBucket,
  messagingSenderId: import.meta.env.VITE_local_messagingSenderId,
  appId: import.meta.env.VITE_local_appId
};

// const firebaseConfig = {
//   apiKey: "AIzaSyCBU_IYhq_8CL4ZRyQnRjnsFSI2y5koi2Q",
//   authDomain: "phero-assigment-10-foodpanda.firebaseapp.com",
//   projectId: "phero-assigment-10-foodpanda",
//   storageBucket: "phero-assigment-10-foodpanda.appspot.com",
//   messagingSenderId: "1093149444921",
//   appId: "1:1093149444921:web:3e22612e285daafb5ef6e8"
// };


// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;