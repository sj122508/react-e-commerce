import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyDqO3ycMtWAMnP3w0rKTmkZfdHG16x9Cxs",
    authDomain: "e-commerce-reactjs-22935.firebaseapp.com",
    projectId: "e-commerce-reactjs-22935",
    storageBucket: "e-commerce-reactjs-22935.appspot.com",
    messagingSenderId: "878656012033",
    appId: "1:878656012033:web:4ce7fc5e9e38d37b8b2500",
    measurementId: "G-Y6Y67PY278"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;