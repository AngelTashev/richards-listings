import { useState, useEffect, useContext } from 'react';
import { Redirect, useHistory } from 'react-router-dom';

import * as listingService from '../../services/listingService';

import AuthContext from '../AuthContext';

const DeleteListing = ({ match }) => {

    const { user } = useContext(AuthContext);
    const history = useHistory();
    const [listing, setListing] = useState({userId: '', title: 'Loading...'});

    useEffect(() => {
        listingService.getOne(match.params.id)
            .then(setListing)
            .catch(console.log); // TODO
    });

    const onNoButtonClickHandler = () => {
        history.push(`/user/${user.uid}/listings`);
    }

    const onYesButtonClickHandler = () => {
        listingService.deleteListing(match.params.id)
            .then(history.push(`/user/${user.uid}/listings`))
            .catch(console.log) //TODO
    }

    if (!user) return <Redirect to="/" />

    return (
        <main className="delete-listing-main">
            <article className="delete-picture-container">
                <img className="delete-picture" src="https://lh3.googleusercontent.com/proxy/EENcMVZhyq6u3FR7B-mAanqUPwP-6JTSHwRWETAPrYuW5xRWsuIJpeFcI294Ql2JlOIz4gPSjAsXj4Zzlcy8z5nBGdbdqMnznIgORBd7COzWspvEhE11Vd9nRZIeGX5W8dT93g" alt="delete picture" />
            </article>
            <section className="delete-info-container">
                <h3>{listing.title}</h3>
                <h1>Are you sure you want to delete this listing?</h1>
                <div>
                    <button onClick={onYesButtonClickHandler} className="delete-button delete-yes">Yes</button>
                    <button onClick={onNoButtonClickHandler} className="delete-button delete-no">No</button>
                </div>
            </section>
        </main>
    );
}

export default DeleteListing;