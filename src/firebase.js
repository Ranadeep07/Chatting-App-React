import firebase from 'firebase';

const fireBaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBardfFcBPsxFDoH8FVaDboAPoIIDeyr5g",
    authDomain: "messenger-chat-app-ff24b.firebaseapp.com",
    projectId: "messenger-chat-app-ff24b",
    storageBucket: "messenger-chat-app-ff24b.appspot.com",
    messagingSenderId: "227912400224",
    appId: "1:227912400224:web:4456a429a70fcecce47205",
    measurementId: "G-PR9MH44V02"
});

const db = fireBaseApp.firestore();

export default db;