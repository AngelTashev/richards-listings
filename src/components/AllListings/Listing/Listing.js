import style from './Listing.module.css';

import { Link } from 'react-router-dom';

const Listing = ({id, title, imageUrl}) => {

    const listingUrl = '/listings/' + id;

    return (
        <section className={style.listing}>
            <article className={style.listingImageContainer}>
                <img className={style.listingImage} src={imageUrl} alt=""/>
            </article>
            <article className={style.listingInfo}>
                <h1 className={style.listingTitle}>{title}</h1>
                <button className={style.listingMore}><Link to={listingUrl}>See More</Link></button>
            </article>
        </section>
    );
}

export default Listing;