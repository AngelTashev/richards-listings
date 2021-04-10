import { useState, useEffect, useContext } from 'react';
import { Link, Redirect, useHistory } from 'react-router-dom';

import * as userService from '../../services/userService';
import * as listingService from '../../services/listingService';

import ErrorMessage from '../Shared/ErrorMessage';
import AuthContext from '../AuthContext';

function UserDetails() {

    const { user } = useContext(AuthContext);

    const history = useHistory();

    const [userDetails, setUserDetails] = useState({ fullName: '', username: '', profilePicUrl: ''})
    const [userListings, setUserListings] = useState({});
    const [selectedFile, setSelectedFile] = useState(null);
    const [error, setError] = useState('');

    useEffect(() => {
        if (user) {
            userService.getUserDetailsById(user.uid)
                .then(setUserDetails)
                .catch(console.log) // TODO
            listingService.getAllByUserId(user.uid)
                .then(setUserListings)
                .catch(console.log) // TODO
            setError('');
        }
    }, [user]);

    if (!user) return <Redirect to="/" />

    const onFileChangeHandler = (e) => {
        setSelectedFile(e.target.files[0]);
    }

    const onFormSubmit = (e) => {
        e.preventDefault();

        userService.uploadProfilePicture(user.uid, selectedFile)
            .then(history.push('/'))
            .catch(err => setError(err.message));
    }

    return (
        <main className="user-details-main">
            <section className="user-picture-name-section">
                <article className="user-details-picture-container">
                    <img className="user-details-picture" src={userDetails.profilePicUrl ? userDetails.profilePicUrl : "https://genslerzudansdentistry.com/wp-content/uploads/2015/11/anonymous-user.png"} alt="" />
                </article>
                <form className="listing-form" onSubmit={onFormSubmit}>

                    <ErrorMessage>{error}</ErrorMessage>
                    <label className="listing-form-label" htmlFor="image">Choose an image...</label>
                    <input onChange={onFileChangeHandler} type="file" name="image" id="image" className="listing-form-file"></input>
                    <button type="submit" className="photo-form-button" id="add-listing-button">Change Photo</button>

                </form>
                <article className="user-name-container">
                    <h1 className="user-name-fullname">{userDetails.fullName}</h1>
                    <p className="user-name-username">{userDetails.username}</p>
                </article>
            </section>
            <section className="user-details-section">
                <article className="user-details">
                    <article className="user-details-listings-container">
                        <h1>Current Listings: {Object.keys(userListings).length}</h1>
                        <button><Link to={`/user/${user.uid}/listings`}>See All</Link></button>
                    </article>
                    <h1>Likes: {Object.keys(userListings)
                                    .reduce((acc, key) => acc + userListings[key].likes, 0)}
                    </h1>
                </article>
            </section>
        </main>
    );
}

export default UserDetails;