import style from './Listing.module.css';

const Listing = ({title, imageUrl}) => {

    console.log(title);
    return (
        <section className={style.listing}>
            <article className={style.listingImageContainer}>
                <img className={style.listingImage} src={imageUrl} alt=""/>
            </article>
            <article className={style.listingInfo}>
                <h1 className={style.listingTitle}>{title}</h1>
                <button className={style.listingMore}><a href="">See More</a></button>
            </article>
        </section>
    );
}

export default Listing;