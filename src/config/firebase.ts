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
   authDomain: import.meta.env.VITE_FIREBASE_AUTHO_DOMAIN,
   projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
   storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
   messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGE_SENDER_ID,
   appId: import.meta.env.VITE_FIREBASE_APP_ID
}

// Initialize Firebase
const app: FirebaseApp = initializeApp(firebaseConfig);

const firebaseApp = getApp();

export const auth: Auth = getAuth(app);

export const db = getFirestore(app);

export const storage = getStorage(firebaseApp, import.meta.env.VITE_FIREBASE_STORAGE);

export default app;