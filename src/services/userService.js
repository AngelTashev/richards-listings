import * as authService from './authService';

const baseUrl = 'https://richards-listings-default-rtdb.firebaseio.com/users/'

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