// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAMKI-7_EL2cnPIunV2AuUfKxHZbsjMqJE",
    authDomain: "news-portal-905f2.firebaseapp.com",
    projectId: "news-portal-905f2",
    storageBucket: "news-portal-905f2.appspot.com",
    messagingSenderId: "1053771245006",
    appId: "1:1053771245006:web:38e8cc474899e048abb79f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;