import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyCtb-G0M7bALKP964uqslkZTFjKgaIbM_c",
    authDomain: "react-login-ad30b.firebaseapp.com",
    projectId: "react-login-ad30b",
    storageBucket: "react-login-ad30b.appspot.com",
    messagingSenderId: "677490341061",
    appId: "1:677490341061:web:14d5ad735c48e6c4c76cac"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp)
export const auth= getAuth(firebaseApp)

export{db,firebaseApp};