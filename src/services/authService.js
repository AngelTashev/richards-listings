import firebase from '../utils/firebase';

export const registerUserAndGetEmail = (credentials) => {
    return firebase.auth()
            .createUserWithEmailAndPassword
            (credentials.email, credentials.password);
}

export const signInUser = (credentials) => {
    return firebase.auth()
            .signInWithEmailAndPassword
            (credentials.email, credentials.password);
}