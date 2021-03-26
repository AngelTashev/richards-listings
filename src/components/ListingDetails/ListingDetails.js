import { Component } from 'react';

class ListingDetails extends Component {

    render() {
        return (
            <main className="listing-details-main">
                <section className="listing-details-container">
                    <section className="listing-details-image-title-container">
                        <article className="listing-details-image-wrapper">
                            <img src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MWP22?wid=2000&hei=2000&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1591634795000"
                                alt="" />
                        </article>
                        <article className="listing-details-title-container">
                            <h1 className="listing-details-title">Apple Airpods Pro</h1>
                            <h3>Likes: 3</h3>
                        </article>
                    </section>
                    <section className="listing-details-info-container">
                        <article className="listing-details-description-container">
                            <p>
                                Incredibly light noise-cancelling headphones, AirPods Pro block out your environment so you can
                                focus on what you’re listening to. AirPods Pro use two microphones, an outward-facing microphone
                                and an inward-facing microphone, to create superior noise cancellation. By continuously adapting
                                to the geometry of your ear and the fit of the ear tips, Active Noise Cancellation silences the
                                world to keep you fully tuned in to your music, podcasts, and calls.
                    </p>
                        </article>
                        <article className="listing-details-price-container">
                            <h3>Price: <span>$100</span></h3>
                            <button className="listing-details-button"><a href="">
                                <i className="fas fa-heart"></i>
                        Like
                    </a></button>
                        </article>
                        <article className="listing-details-user-container">
                            <div>
                                <p>Listing by: </p>
                                <h3 className="listing-details-username">Vancho</h3>
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