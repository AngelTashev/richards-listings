import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCWMxIbL6Bv9mSKJiqvGga9O8qLARH89jo",
    authDomain: "react-my-pets-c7449.firebaseapp.com",
    projectId: "react-my-pets-c7449",
    storageBucket: "react-my-pets-c7449.appspot.com",
    messagingSenderId: "344492305255",
    appId: "1:344492305255:web:343886a70481d3e0efddc2"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
