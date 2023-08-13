
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from 'https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCjTFj7cE0l-CFMsnxvl5RM2bcvnKAHyL4",
    authDomain: "blog-demo-75249.firebaseapp.com",
    projectId: "blog-demo-75249",
    storageBucket: "blog-demo-75249.appspot.com",
    messagingSenderId: "496457057942",
    appId: "1:496457057942:web:228e4eda3afb4ae44c64b7"
};

const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

const auth = getAuth(app);


// function to login to firebase
export function signInFirebase() {
    // Initialize Firebase

    signInWithPopup(auth, provider);
    
};



