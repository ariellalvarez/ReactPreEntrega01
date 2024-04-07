
import { initializeApp } from "firebase/app";

import{getFirestore} from 'firebase/firestore'



const firebaseConfig = {
  apiKey: "AIzaSyBRA3jEdXaMIRIU5-9bYSnfWWjjhRp8_RM",
  authDomain: "backend54045-d16c7.firebaseapp.com",
  projectId: "backend54045-d16c7",
  storageBucket: "backend54045-d16c7.appspot.com",
  messagingSenderId: "102901947557",
  appId: "1:102901947557:web:99787751bd0286f257014c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)