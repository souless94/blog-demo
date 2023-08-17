
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from 'https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js';
import { getFirestore, collection, addDoc, getDocs, query, where, orderBy, limit, onSnapshot, doc, deleteDoc, updateDoc } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";
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

const auth = getAuth(app);
const db = getFirestore(app);

// function to login to firebase
export function signInFirebase() {
    // Initialize Firebase

    signInWithPopup(auth, provider).then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const whitelist_user = "wyOmQq1XLXZyyJfnZJZ7FCzKBJU2";
        // The signed-in user info.
        const uid = result.user.uid;
        if (uid != null && uid === whitelist_user) {
            localStorage.setItem('uid', uid);
            console.log('signed in');
            location.reload();
        } else {
            signOutFirebase();
        }
    });
};
// function to logout from firebase
export function signOutFirebase() {
    // Initialize Firebase
    signOut(auth).then(
        () => {
            localStorage.removeItem('uid');
            location.reload();
            console.log('signed out');

        }
    );
}
// function to add posts from firebas
export async function addPost() {
    console.log('adding document');
    await addDoc(collection(db, "Posts"), {
        post_head_image_url: "test",
        post_heading: "CA",
        post_content: "USA"
    }).then(function (docRef) {
        console.log("Document written with ID: ", docRef.id);
    });
}

export function deletePost() {
    console.log('delete Post');
   
}

export function updatePost() {
    console.log('update Post');
   
}

