// firebase.js
import { initializeApp } from '@firebase/app';
import { getAuth } from '@firebase/auth';
import { getStorage } from '@firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyDDBOtEq3CCxZkFmY6PGkTN7sCKnxJkgDo",
    authDomain: "online-supermarket-4b802.firebaseapp.com",
    projectId: "online-supermarket-4b802",
    storageBucket: "online-supermarket-4b802.appspot.com",
    messagingSenderId: "959105238549",
    appId: "1:959105238549:web:e9a56a3d3a98ad2a15301c",
    measurementId: "G-T345ZE6B2X"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const storage = getStorage(app);  // Initialize Firebase Storage

export { auth, storage };
