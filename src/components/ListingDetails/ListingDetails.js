import { Component } from 'react';

import * as listingService from '../../services/listingService';

class ListingDetails extends Component {

    constructor(match) {
        super(match);

        this.state = { match: match.match, listing: {} };
    }

    componentDidMount() {
        listingService.getOne(this.state.match.params.id)
            .then(res => this.setState({listing: res}))

    }

    render() {
        const listing = this.state.listing;
        return (
            <main className="listing-details-main">
                <section className="listing-details-container">
                    <section className="listing-details-image-title-container">
                        <article className="listing-details-image-wrapper">
                            <img src={listing.imageUrl}
                                alt="" />
                        </article>
                        <article className="listing-details-title-container">
                            <h1 className="listing-details-title">Apple Airpods Pro</h1>
                            <h3>Likes: {listing.likes}</h3>
                        </article>
                    </section>
                    <section className="listing-details-info-container">
                        <article className="listing-details-description-container">
                            <p>
                                {listing.description}
                            </p>
                        </article>
                        <article className="listing-details-price-container">
                            <h3>Price: <span>${listing.price}</span></h3>
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
                                <h3 className="listing-details-username">{listing.userId}</h3> {/* TODO view username by userId */}
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