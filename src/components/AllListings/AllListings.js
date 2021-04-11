import style from './AllListings.module.css';

import { useEffect, useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';

import * as listingService from '../../services/listingService';

import Listing from './Listing';

const AllListings = ({
    match
}) => {

    const history = useHistory();

    let [listings, setListings] = useState({});
    let [title, setTitle] = useState('Loading...');
    
    const updateListings = () => {
        listingService.getAll(match.params.category)
        .then(res => {
            setListings(res);
            setTitle('All Listings');
        })
        .catch(err => history.push('/error'));
    }

    useEffect(() => {
        updateListings();
        setTimeout(updateListings, 2000);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [match.params.category]);


    return (<main className={style.allListingsMain}>
        <article className={style.allListingsTitleContainer}>
            <h1 className={style.allListingsTitle}>{title}</h1>
        </article>
        <article>
            <button className={style.categoryButton}><NavLink activeClassName={style.activeLink} to="/">All</NavLink></button>
            <button className={style.categoryButton}><NavLink activeClassName={style.activeLink} to="/category/house">House</NavLink></button>
            <button className={style.categoryButton}><NavLink activeClassName={style.activeLink} to="/category/cars">Cars</NavLink></button>
            <button className={style.categoryButton}><NavLink activeClassName={style.activeLink} to="/category/tech">Tech</NavLink></button>
            <button className={style.categoryButton}><NavLink activeClassName={style.activeLink} to="/category/Other">Other</NavLink></button>
        </article>
        <section className={style.allListingsSection}>

            {Object.keys(listings)
                .map(x => <Listing
                    key={x}
                    id={x}
                    title={listings[x].title}
                    imageUrl={listings[x].imageUrl === '' ? 'https://www.allianceplast.com/wp-content/uploads/2017/11/no-image.png' : listings[x].imageUrl}
                />)}

        </section>
    </main>);
}

export default AllListings;