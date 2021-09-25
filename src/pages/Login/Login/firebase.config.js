// import firebase from "firebase/app";
// import "firebase/auth";

// const firebaseConfig = {
//   apiKey: "AIzaSyAkK2Me-2WGgv7sPLJecJ0M0hXWDEve8nI",
//   authDomain: "salehub-cd744.firebaseapp.com",
//   projectId: "salehub-cd744",
//   storageBucket: "salehub-cd744.appspot.com",
//   messagingSenderId: "630055475440",
//   appId: "1:630055475440:web:c990fd661022187cf10a35"
// };
// export default firebaseConfig;
import firebase from "firebase/app";
 

const firebaseapp = firebase.initializeApp({
  apiKey: "AIzaSyAkK2Me-2WGgv7sPLJecJ0M0hXWDEve8nI",
    authDomain: "salehub-cd744.firebaseapp.com",
    projectId: "salehub-cd744",
    storageBucket: "salehub-cd744.appspot.com",
    messagingSenderId: "630055475440",
    appId: "1:630055475440:web:c990fd661022187cf10a35"
});
export default firebaseapp;