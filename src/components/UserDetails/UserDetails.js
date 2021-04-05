import { useState, useEffect } from 'react';

import * as userService from '../../services/userService';
import * as listingService from '../../services/listingService';

import { auth } from '../../utils/firebase';

function UserDetails() {

    const [userInfo, setUserInfo] = useState({});
    const [userListings, setUserListings] = useState({});

    useEffect(() => {
        userService.getUserDetailsById(auth.currentUser.uid)
            .then(setUserInfo)
            .catch(console.log); // TODO
        listingService.getAllByUserId(auth.currentUser.uid)
            .then(setUserListings)
            .catch(console.log) // TODO
    }, []);

    return (
        <main className="user-details-main">
        <section className="user-picture-name-section">
            <article className="user-details-picture-container">
                <img className="user-details-picture" src="https://genslerzudansdentistry.com/wp-content/uploads/2015/11/anonymous-user.png" alt=""/>
            </article>
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