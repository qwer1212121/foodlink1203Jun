import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

// Firebase 설정
const firebaseConfig = {
    apiKey: "AIzaSyDAe4Vp0vpG0j6qWKqfhBLKe_X7tLfScjM",
    authDomain: "foodlink-2b531.firebaseapp.com",
    databaseURL: "https://foodlink-2b531-default-rtdb.firebaseio.com",
    projectId: "foodlink-2b531",
    storageBucket: "foodlink-2b531.firebasestorage.app",
    messagingSenderId: "247328439601",
    appId: "1:247328439601:web:855b1ac29ec44e105b8410",
    measurementId: "G-89B7DRZXEC"
};

// Firebase 초기화
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// Firestore 및 FieldValue 내보내기
const firestore = firebase.firestore();
const FieldValue = firebase.firestore.FieldValue;

export { firebase, firestore, FieldValue };
