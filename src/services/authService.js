import firebase from '../utils/firebase';

export const registerUserAndGetEmail = (credentials) => {
    return firebase.auth()
            .createUserWithEmailAndPassword
            (credentials.email, credentials.password);
}