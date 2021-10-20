import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDVVUUk03oVhS2w-Z-pHIMEDl2xgXJgR6k",
  authDomain: "hello-al-bab.firebaseapp.com",
  projectId: "hello-al-bab",
  storageBucket: "hello-al-bab.appspot.com",
  messagingSenderId: "347417592146",
  appId: "1:347417592146:web:84dccedc6f36e657ad3a8b",
  measurementId: "G-HLPKTFZLX4",
};

// if (!firebase.getApps.length) {
firebase.initializeApp(firebaseConfig);
// }
// console.log(fetchSignInMethodsForEmail);

const fire = firebase;
const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

export default { auth, db, storage, fire };

export const logoutAll = () => {
  auth.signOut();
};
