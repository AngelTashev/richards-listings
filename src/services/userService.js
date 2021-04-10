import * as authService from './authService';
import * as fileService from './fileService';

const baseUrl = 'https://richards-listings-default-rtdb.firebaseio.com/users/'

export const getUserDetailsById = (id) => {

    return fetch(baseUrl + `${id}.json`)
        .then(res => res.json());
}

export const registerUserAndSaveData = (userData) => {

    const {fullName, username, email, password} = userData;

    return authService.registerUserAndGetEmail({email, password})
        .then(userInfo => {

            return fetch(baseUrl + '.json', {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify( {[userInfo.user.uid]: {
                    fullName,
                    username,
                    email,
                    profilePicUrl: ''
                }})
            })
        })
}

export const uploadProfilePicture = (uid, picture) => {
    return fileService.uploadFile(picture)
        .then(res => {
            const data = res ? { profilePicUrl: res} : null;

            if (data) {
                return fetch(baseUrl + `${uid}.json`, {

                    method: 'PATCH',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)
                });
            }
            return new Error('Image not uploaded');
        });
}