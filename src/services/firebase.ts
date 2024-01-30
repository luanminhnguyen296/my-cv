// Import the functions you need from the SDKs you need
import { FirebaseApp, FirebaseOptions, initializeApp, getApp } from "firebase/app";
import { Auth, getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig: FirebaseOptions = {
   apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
   authDomain: "my-cv-88e60.firebaseapp.com",
   projectId: "my-cv-88e60",
   storageBucket: "my-cv-88e60.appspot.com",
   messagingSenderId: "241343407391",
   appId: "1:241343407391:web:4e83a7110b25c712127c2a"
};

// Initialize Firebase
const app: FirebaseApp = initializeApp(firebaseConfig);

export const auth: Auth = getAuth(app);

export const db = getFirestore(app);

const firebaseApp = getApp();

export const storage = getStorage(firebaseApp, import.meta.env.VITE_FIREBASE_STORAGE);

export default app;