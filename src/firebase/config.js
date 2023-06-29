
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCkoUZh4wG8wEhZ-ZFNbakDlwKkAzglxU4",
  authDomain: "miniblog-29942.firebaseapp.com",
  projectId: "miniblog-29942",
  storageBucket: "miniblog-29942.appspot.com",
  messagingSenderId: "222380800879",
  appId: "1:222380800879:web:adff92c79cd3dec85f869a"
};


const app = initializeApp(firebaseConfig);

const db = getFirestore();

export { db }