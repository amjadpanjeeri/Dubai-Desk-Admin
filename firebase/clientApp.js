// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";
// // import {  } from "firebase/firestore";

// import "firebase/auth";
// import "firebase/firestore";
// import "firebase/storage";

// const firebaseConfig = {
//   apiKey: "AIzaSyDVVUUk03oVhS2w-Z-pHIMEDl2xgXJgR6k",
//   authDomain: "hello-al-bab.firebaseapp.com",
//   projectId: "hello-al-bab",
//   storageBucket: "hello-al-bab.appspot.com",
//   messagingSenderId: "347417592146",
//   appId: "1:347417592146:web:84dccedc6f36e657ad3a8b",
//   measurementId: "G-HLPKTFZLX4",
// };

// // function initFirebase() {
// // if (!firebase.apps.length) {
// const app = initializeApp(firebaseConfig);

// console.log("Firebase init");
// // }
// // }
// // const firestore = firebase.firestore();

// // const app = initializeApp(firebaseConfig);
// const db = getFirestore();

// export default { app, db };

// // console.log(db.type);
// // }
// // (async () => {
// //   try {
// //     // CollectionReference users = await
// //     const querySnapshot = await getDocs(collection(db, "workspace"));
// //     // console.log(querySnapshot.docs.length);
// //     querySnapshot.forEach((doc) => {
// //       console.log(`${doc.id} => ${doc.data()['name']}`);
// //     });

// //   } catch (e) {
// //     // Deal with the fact the chain failed
// //     console.log(e);
// //   }
// // })();

// // querySnapshot.forEach((doc) => {
// //   console.log(`${doc.id} => ${doc.data()}`);
// // });

// // console.log(querySnapshot);

// // const fire = firebase;
// // console.log(fire.FirebaseError);
// // const auth = firebase.auth();
// // const db = firebase.firestore();
// // const storage = firebase.storage();

// // export const logoutAll = () => {
// //   auth.signOut();
// // };

import { initializeApp } from "firebase/app";
import "firebase/firestore";
import "firebase/database";
import "firebase/auth";
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

const app = initializeApp(firebaseConfig);
// firebase.firestore();

export default app;
