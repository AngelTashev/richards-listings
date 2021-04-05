import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import * as userService from '../../services/userService';
import * as listingService from '../../services/listingService';

import { auth } from '../../utils/firebase';

import ErrorMessage from '../Shared/ErrorMessage';

function UserDetails() {

    const history = useHistory();

    const [userInfo, setUserInfo] = useState({});
    const [userListings, setUserListings] = useState({});
    const [selectedFile, setSelectedFile] = useState(null);
    const [error, setError] = useState('');

    useEffect(() => {
        userService.getUserDetailsById(auth.currentUser.uid)
            .then(setUserInfo)
            .catch(console.log); // TODO
        listingService.getAllByUserId(auth.currentUser.uid)
            .then(setUserListings)
            .catch(console.log) // TODO
        setError('');
    }, []);

    const onFileChangeHandler = (e) => {
        setSelectedFile(e.target.files[0]);
    }

    const onFormSubmit = (e) => {
        e.preventDefault();

        userService.uploadProfilePicture(auth.currentUser.uid, selectedFile)
            .then(history.push('/'))
            .catch(err => setError(err.message));
    }

    return (
        <main className="user-details-main">
            <section className="user-picture-name-section">
                <article className="user-details-picture-container">
                    <img className="user-details-picture" src={userInfo.profilePicUrl ? userInfo.profilePicUrl : "https://genslerzudansdentistry.com/wp-content/uploads/2015/11/anonymous-user.png"} alt="" />
                </article>
                <form className="listing-form" onSubmit={onFormSubmit}>

                    <ErrorMessage>{error}</ErrorMessage>
                    <label className="listing-form-label" htmlFor="image">Choose an image...</label>
                    <input onChange={onFileChangeHandler} type="file" name="image" id="image" className="listing-form-file"></input>
                    <button type="submit" className="photo-form-button" id="add-listing-button">Change Photo</button>

                </form>
                <article className="user-name-container">
                    <h1 className="user-name-fullname">{userInfo.fullName}</h1>
                    <p className="user-name-username">{userInfo.username}</p>
                </article>
            </section>
            <section className="user-details-section">
                <article className="user-details">
                    <article className="user-details-listings-container">
                        <h1>Current Listings: {Object.keys(userListings).length}</h1>
                        <button><a href="">See All</a></button>
                    </article>
                    <h1>Likes: 109</h1>
                </article>
            </section>
        </main>
    )
}

export default UserDetails;