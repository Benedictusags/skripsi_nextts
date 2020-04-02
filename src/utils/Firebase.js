import firebase from 'firebase/app';
import 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';
import 'firebase/functions';

// Config
const config = {
    apiKey: "AIzaSyBMK4gSFvz3-yLXZ2aQW6xKpZdiq6NaGqQ",
    authDomain: "sisforma-dd047.firebaseapp.com",
    databaseURL: "https://sisforma-dd047.firebaseio.com",
    projectId: "sisforma-dd047",
    storageBucket: "sisforma-dd047.appspot.com",
    messagingSenderId: "14065969425",
    appId: "1:14065969425:web:826a0c621d4af9e5c244b0",
    measurementId: "G-2GGJ5YL8G3"
};

let firebaseApp = !firebase.apps.length ? firebase.initializeApp(config) : firebase.app();
let secondaryApp = firebase.apps.length < 2 ?firebase.initializeApp(config, "Secondary") : firebase.app("Secondary");

export { firebaseApp, secondaryApp };