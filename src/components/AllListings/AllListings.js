import style from './AllListings.module.css'

import Listing from './Listing';

const AllListings = () => {
    return (<main className={style.allListingsMain}>
    <article className={style.allListingsTitleContainer}>
        <h1 className={style.allListingsTitle}>All Listings</h1>
    </article>
    <section className={style.allListingsSection}>

        <Listing title="BMW 330d turbo" imgUrl="https://www.turbodynamics.co.uk/shop/images/MDX537.png"/>

        <Listing title="Samsung Galaxy Fold" imgUrl="https://connectedremag.com/wp-content/uploads/2020/02/flip-phone-connected-real-estate.png"/>

        <Listing title="Very Good Vape" imgUrl="https://www.avera.org/app/files/public/hand-holding-vape-smoke-in-background.jpg"/>
        
        <Listing title="Samsung Galaxy Fold 2" imgUrl="https://connectedremag.com/wp-content/uploads/2020/02/flip-phone-connected-real-estate.png"/>

        <Listing title="Also Bad Vape" imgUrl="https://www.avera.org/app/files/public/hand-holding-vape-smoke-in-background.jpg"/>

        <Listing title="1.9 TDI turbo" imgUrl="https://www.turbodynamics.co.uk/shop/images/MDX537.png"/>

    </section>
</main>);
}

export default AllListings;