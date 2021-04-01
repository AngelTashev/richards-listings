import style from './AllListings.module.css';

import { useEffect, useState } from 'react';
import * as listingService from '../../services/listingService';

import Listing from './Listing';

const AllListings = ({
    match
}) => {

    let [listings, setListings] = useState([{}]);
    let [title, setTitle] = useState('Loading...');
    console.log(match.params.category); // TODO add show by category

    useEffect(() => {
        listingService.getAll()
            .then(res => {
                setListings([res]);
                setTitle('All Listings');
            })
            .catch(alert) //TODO Handle error
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (<main className={style.allListingsMain}>
        <article className={style.allListingsTitleContainer}>
            <h1 className={style.allListingsTitle}>{title}</h1>
        </article>
        <section className={style.allListingsSection}>

            {Object.keys(listings[0])
                .map(x => <Listing
                    key={x}
                    id={x}
                    title={listings[0][x].title}
                    imageUrl={listings[0][x].imageUrl === '' ? 'https://www.allianceplast.com/wp-content/uploads/2017/11/no-image.png' : listings[0][x].imageUrl}
                />)}

        </section>
    </main>);
}

export default AllListings;