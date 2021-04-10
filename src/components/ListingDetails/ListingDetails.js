import { Component } from 'react';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';

import * as listingService from '../../services/listingService';
import * as userService from '../../services/userService';
import * as dateFormatter from '../../utils/dateFormatter';

import AuthContext from '../AuthContext';

class ListingDetails extends Component {

    constructor(props) {
        super(props);

        this.state = { match: props.match, listing: {}, username: '', profilePicUrl: '', userId: '', likes: 0 };
        this.likeListing = this.likeListing.bind(this);
    }

    componentDidMount() {
        listingService.getOne(this.state.match.params.id)
            .then(listingRes => {

                userService.getUserDetailsById(listingRes.userId)
                    .then(userRes => this.setState({ listing: listingRes, username: userRes.username, profilePicUrl: userRes.profilePicUrl, userId: listingRes.userId, likes: listingRes.likes }))
                    .catch(err => this.props.history.push('/error'));
            })
            .catch(err => this.props.history.push('/error' + err));
    }

    likeListing() {
        listingService.updateListingLikes(this.state.match.params.id, this.state.likes + 1)
            .then(this.setState({ likes: this.state.likes + 1 }))
            .catch(err => this.props.history.push('/error'));
    }

    render() {
        if (!this.context.user) return <Redirect to="/" />;

        const listing = this.state.listing;
        const username = this.state.username;
        const userId = this.state.userId;
        const profilePicUrl = this.state.profilePicUrl;
        return (
            <main className="listing-details-main">
                <section className="listing-details-container">
                    <section className="listing-details-image-title-container">
                        <article className="listing-details-image-wrapper">
                            <img src={listing.imageUrl === '' ? 'https://www.allianceplast.com/wp-content/uploads/2017/11/no-image.png' : listing.imageUrl}
                                alt="" />
                        </article>
                        <article className="listing-details-title-container">
                            <h1 className="listing-details-title">{listing.title}</h1>
                            <h3>Likes: {this.state.likes}</h3>
                        </article>
                        <article className="listing-details-date-container">
                            <p>
                                Published on: {dateFormatter.formatDate(new Date(listing.createdOn))}
                            </p>
                        </article>
                        <article className="listing-details-category-container">
                            <p>
                                Category: {listing.category}
                            </p>
                        </article>
                    </section>
                    <section className="listing-details-info-container">
                        <article className="listing-details-description-container">
                            <p>
                                {listing.description}
                            </p>
                        </article>
                        <article className="listing-details-price-container">
                            <h3>Price: <span>{Number(listing.price) === 0 ? 'Free' : `$${listing.price}`}</span></h3>
                            <button onClick={this.likeListing} className="listing-details-button">
                                <i className="fas fa-heart details-like-heart"></i>
                                    Like
                            </button>
                        </article>
                        <article className="listing-details-user-container">
                            <div>
                                <p>Listing by: </p>
                                <h3 className="listing-details-username">{username}</h3>
                            </div>
                            <article className="user-details-picture-container listing-profile-picture-container">
                                <img className="user-details-picture" src={profilePicUrl ? profilePicUrl : "https://genslerzudansdentistry.com/wp-content/uploads/2015/11/anonymous-user.png"} alt="" />
                            </article>
                            <button className="listing-details-button"><Link to={`/user/${userId}/listings`}>View User Listings</Link></button>
                        </article>
                    </section>
                </section>
            </main>
        );
    }
}

ListingDetails.contextType = AuthContext;

export default ListingDetails;