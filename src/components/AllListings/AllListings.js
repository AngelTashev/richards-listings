import style from './AllListings.module.css';

import { useEffect, useState } from 'react';
import * as listingService from '../../services/listingService';

import Listing from './Listing';

const AllListings = ({
    match
}) => {

    let [listings, setListings] = useState([{}]);
    console.log(match.params.category); // TODO add show by category

    useEffect(() => {
        listingService.getAll()
            .then(res => setListings([res]))
            .catch(alert) //TODO Handle error
        console.log(listings);
    }, []);

    return (<main className={style.allListingsMain}>
    <article className={style.allListingsTitleContainer}>
        <h1 className={style.allListingsTitle}>All Listings</h1>
    </article>
    <section className={style.allListingsSection}>

        {Object.keys(listings[0])
            .map(x => <Listing 
                        key={x}
                        id={x}
                        title={listings[0][x].title} 
                        imageUrl={ listings[0][x].imageUrl == '' ? 'https://www.allianceplast.com/wp-content/uploads/2017/11/no-image.png' : listings[0][x].imageUrl}
                    />)}

        <Listing title="BMW 330d turbo" imageUrl="https://www.turbodynamics.co.uk/shop/images/MDX537.png"/>

        <Listing title="Samsung Galaxy Fold" imageUrl="https://connectedremag.com/wp-content/uploads/2020/02/flip-phone-connected-real-estate.png"/>

        <Listing title="Very Good Vape" imageUrl="https://www.avera.org/app/files/public/hand-holding-vape-smoke-in-background.jpg"/>
        
        <Listing title="Samsung Galaxy Fold 2" imageUrl="https://connectedremag.com/wp-content/uploads/2020/02/flip-phone-connected-real-estate.png"/>

        <Listing title="Also Bad Vape" imageUrl="https://www.avera.org/app/files/public/hand-holding-vape-smoke-in-background.jpg"/>

        <Listing title="1.9 TDI turbo" imageUrl="https://www.turbodynamics.co.uk/shop/images/MDX537.png"/>

    </section>
</main>);
}

export default AllListings;