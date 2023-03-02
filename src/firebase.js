
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyC-2VY9ZsIsUggdHB0myajGvD66xhYTJbk",
    authDomain: "linkedin-clone-61e73.firebaseapp.com",
    projectId: "linkedin-clone-61e73",
    storageBucket: "linkedin-clone-61e73.appspot.com",
    messagingSenderId: "44129249794",
    appId: "1:44129249794:web:92a48fc843159b2d55551b"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };
