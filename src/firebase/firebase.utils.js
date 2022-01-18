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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
// const userRef = firestore.doc('users/123534657547');
// LESSON 104 and 105
const userRef = firestore.doc(`users/${userAuth.uid}`);
const collectionRef = firestore.collection('users');

const snapShot = await userRef.get();
const collectionSnapshot = await collectionRef.get();
console.log(snapShot.data(), 'snapShot')
console.log(collectionSnapshot, 'collectionSnapshot')
console.log({collection: collectionSnapshot.docs.map(doc => doc.data())}, 'collectionSnapshotData')

if (!snapShot.exists){
    const { displayName, email} = userAuth;
    const createdAt = new Date();

    try {
        await userRef.set({
            displayName,
            email,
            createdAt,
            ...additionalData
        })
    } catch (error) {
        console.log('error creating user', error.message);
    }
}
// console.log(userAuth, 'userAuth')
// console.log(snapShot, 'snapShot')
return userRef;
// console.log(firestore.doc('users/123534657547'))
}

export const addCollectionAndDocuments = (collectionKey, objectsToAdd) => {
    const collectionRef = firestore.collection(collectionKey);
    console.log(collectionRef, 'collectionRef')

    const batch = firestore.batch();

    objectsToAdd.forEach(obj => {
        const newDocRef = collectionRef.doc();
        console.log(newDocRef, 'newDocRefnewDocRefnewDocRefnewDocRefnewDocRefnewDocRefnewDocRef')
    });
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;