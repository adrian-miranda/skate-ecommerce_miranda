import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBYuZqSQN8DN0xzxZJSC6QAfodH6v_EdEQ",
    authDomain: "skatestorecommerce.firebaseapp.com",
    projectId: "skatestorecommerce",
    storageBucket: "skatestorecommerce.appspot.com",
    messagingSenderId: "154315513036",
    appId: "1:154315513036:web:27d975076e80d40b5cb669"
  };
const app = initializeApp(firebaseConfig);

export const getFirebase = () => app;

export { getFirestore };
