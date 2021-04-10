import { useEffect, useState, useContext } from 'react';
import { Redirect } from 'react-router-dom';

import * as listingService from '../../services/listingService';
import * as userService from '../../services/userService';

import AuthContext from '../AuthContext';

import UserListing from './UserListing';

const UserAllListings = ({ match }) => {

    const { user } = useContext(AuthContext);
    const userId = match.params.userId;

    const [userInfo, setUserInfo] = useState({});
    const [userListings, setUserListings] = useState({});
    const [title, setTitle] = useState('Loading...');


    useEffect(() => {
        userService.getUserDetailsById(userId)
            .then(setUserInfo)
            .catch(console.log); // TODO
        listingService.getAllByUserId(userId)
            .then(res => {
                if(Object.keys(res).length === 0)
                    setTitle('no');
                else
                    setTitle('yes');
                setUserListings(res);
            })
            .catch(console.log); // TODO
            // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (!user) return <Redirect to="/" />

    const canModify = user.uid === userId;

    return (

        <main className="user-listings-main">

            <article className="user-listings-title-container">
                {title === 'no' ?
                    <h1>No listings to show! :)</h1>
                    :
                    <h1>{title !== 'yes' && title}</h1>
                }
                {title === 'yes' &&
                    <h1>{userInfo.username}'s listings</h1>
                }
            </article>

            <section className="user-listings-container">
                {Object.keys(userListings).map(x =>
                    <UserListing key={x} userListing={{...userListings[x], id: x}} canModify={canModify} />
                )}
            </section>
        </main>
    );
}

export default UserAllListings;