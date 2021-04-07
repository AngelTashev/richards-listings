import { Component } from 'react';

import * as listingService from '../../services/listingService';
import * as userService from '../../services/userService';
import * as dateFormatter from '../../utils/dateFormatter';

class ListingDetails extends Component {

    constructor(match) {
        super(match);

        this.state = { match: match.match, listing: {}, username: '' };
    }

    componentDidMount() {
        listingService.getOne(this.state.match.params.id)
            .then(listingRes => {

                userService.getUserDetailsById(listingRes.userId)
                    .then(userRes => this.setState({ listing: listingRes, username: userRes.username }))
                    .catch(console.log); //TODO
            })
            .catch(console.log); //TODO
    }

    render() {
        const listing = this.state.listing;
        const username = this.state.username;
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
                            <h3>Likes: {listing.likes}</h3>
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
                            <h3>Price: <span>${listing.price == 0 ? 'Free' : listing.price}</span></h3>
                            <button className="listing-details-button">
                                <a href="">
                                    <i className="fas fa-heart details-like-heart"></i>
                                    Like
                                </a>
                            </button>
                        </article>
                        <article className="listing-details-user-container">
                            <div>
                                <p>Listing by: </p>
                                <h3 className="listing-details-username">{username}</h3> {/* TODO view username by userId */}
                            </div>
                            <button className="listing-details-button"><a href="">View User Listings</a></button>
                        </article>
                    </section>
                </section>
            </main>
        );
    }
}

export default ListingDetails;