import { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';

import * as listingService from '../../services/listingService';
import * as userService from '../../services/userService';

import AuthContext from '../AuthContext';

import UserListing from './UserListing';
import DeleteUserListing from './DeleteUserListing';

const UserAllListings = ({ match }) => {

    const { user } = useContext(AuthContext);
    const userId = match.params.userId;
    const canModify = user.uid === userId;

    const [userInfo, setUserInfo] = useState({});
    const [userListings, setUserListings] = useState({});


    useEffect(() => {
        userService.getUserDetailsById(userId)
            .then(setUserInfo)
            .catch(console.log);
        listingService.getAllByUserId(userId)
            .then(setUserListings)
            .catch(console.log); // TODO
    }, []);

    return (
        <main className="user-listings-main">

            <article className="user-listings-title-container">
                {Object.keys(userListings).length === 0 ?
                    <h1>Loading...</h1>
                    :
                    <h1>{userInfo.username}'s listings</h1>
                }
            </article>

            <section className="user-listings-container">
                <article className="user-listing">
                    <div className="user-listing-info">
                        <h3>BMW 330xd</h3>
                        <p>5000$</p>
                    </div>
                    <div className="user-listing-info">
                        <button className="user-listing-button"><a href="#">View</a></button>
                        <button className="user-listing-button"><a href="#">Edit</a></button>
                        <button className="user-listing-button"><a href="#">Delete</a></button>
                    </div>
                </article>

                <article className="user-listing">
                    <div className="user-listing-info">
                        <h3>BMW 330xd</h3>
                        <p>5000$</p>
                    </div>
                    <div className="user-listing-info">
                        <button className="user-listing-button"><a href="#">View</a></button>
                        <button className="user-listing-button"><a href="#">Edit</a></button>
                        <button className="user-listing-button"><a href="#">Delete</a></button>
                    </div>
                </article>

                <article className="user-listing">
                    <div className="user-listing-info">
                        <h3>BMW 330xd</h3>
                        <p>5000$</p>
                    </div>
                    <div className="user-listing-info">
                        <button className="user-listing-button"><a href="#">View</a></button>
                        <button className="user-listing-button"><a href="#">Edit</a></button>
                        <button className="user-listing-button"><a href="#">Delete</a></button>
                    </div>
                </article>

                <article className="user-listing">
                    <div className="user-listing-info">
                        <h3>BMW 330xd</h3>
                        <p>5000$</p>
                    </div>
                    <div className="user-listing-info">
                        <button className="user-listing-button"><a href="#">View</a></button>
                        <button className="user-listing-button"><a href="#">Edit</a></button>
                        <button className="user-listing-button"><a href="#">Delete</a></button>
                    </div>
                </article>

                <article className="user-listing">
                    <div className="user-listing-info">
                        <h3>BMW 330xd</h3>
                        <p>5000$</p>
                    </div>
                    <div className="user-listing-info">
                        <button className="user-listing-button"><a href="#">View</a></button>
                        <button className="user-listing-button"><a href="#">Edit</a></button>
                        <button className="user-listing-button"><a href="#">Delete</a></button>
                    </div>
                </article>

                <article className="user-listing">
                    <div className="user-listing-info">
                        <h3>BMW 330xd</h3>
                        <p>5000$</p>
                    </div>
                    <div className="user-listing-info">
                        <button className="user-listing-button"><a href="#">View</a></button>
                        <button className="user-listing-button"><a href="#">Edit</a></button>
                        <button className="user-listing-button"><a href="#">Delete</a></button>
                    </div>
                </article>
            </section>
        </main>
    );
}

export default UserAllListings;