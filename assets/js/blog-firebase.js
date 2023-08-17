
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from 'https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js';
import { getFirestore, collection, addDoc, doc, deleteDoc, updateDoc } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";
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

function isSignedIn() {
    const whitelist_user = "wyOmQq1XLXZyyJfnZJZ7FCzKBJU2";
    if (localStorage.getItem('uid') === null || localStorage.getItem('uid') === undefined)
        return false;
    return localStorage.getItem('uid') === whitelist_user;
}

// function to add posts from firebase
export async function addPost(data) {
    let message = 'You are not authorised to create/update/delete posts';
    if (!isSignedIn()) {
        return message;
    }
    await addDoc(collection(db, "Posts"), data).then(function (docRef) {
        message = 'document created ';
    });
    return message;
}

export async function deletePost(deletePostId) {
    console.log(deletePostId);
    // hard code the response that it will always be the last 
    const idToDelete= deletePostId.split('/')[6];
    alert(idToDelete);
    let message = 'You are not authorised to create/update/delete posts';
    if (!isSignedIn()) {
        return message;
    }
    await deleteDoc(doc(db, "Posts", idToDelete)).then(function (docRef) {
        message = 'document deleted ';
    });
    return message;

}



