import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCh68LTPp6Ck40Kdtlt5EOgpgmX4I1FW24",
    authDomain: "richards-listings.firebaseapp.com",
    databaseURL: "https://richards-listings-default-rtdb.firebaseio.com",
    projectId: "richards-listings",
    storageBucket: "richards-listings.appspot.com",
    messagingSenderId: "322805675490",
    appId: "1:322805675490:web:5f41987cd06bf9fe61f5bb"
  };

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export default firebase;

export const auth = firebase.auth();
