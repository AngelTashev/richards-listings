import * as fileService from './fileService';
 
const baseUrl = 'https://richards-listings-default-rtdb.firebaseio.com/listings/';

export const getAll = (category = '') => {

    return fetch(baseUrl + '.json')
        .then(res => res.json())
        .then(res => category === '' ? res : filterListings(res, 'category', category))
        .then(res => sortListings(res));
}

export const getAllByUserId = (uid) => {
    return getAll('')
        .then(res => filterListings(res, 'userId', uid));
}

export const getOne = (id) => {
    return fetch(baseUrl + id + '.json')
        .then(res => res.json());
}

export const uploadListing = (userId, listingInfo) => {

    const { title, description, price, category, image } = listingInfo;

    return fileService.uploadFile(image)
        .then(res => {

            return fetch(baseUrl + '.json', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    title,
                    description,
                    price,
                    category,
                    imageUrl: res,
                    createdOn: new Date(),
                    likes: 0,
                    userId,
                })
            });
        });

}

export const updateListing = (listingInfo) => {
    const { id, title, description, price, image } = listingInfo;

    return fileService.uploadFile(image)
        .then(res => {


            const data = {
                title, description, price
            }
            if (res) data.imageUrl = res;

            return fetch(baseUrl + `${id}.json`, {

                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });
        });
}

export const updateListingLikes = (id, likes) => {

    return fetch(baseUrl + `${id}.json`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json' 
        },
        body: JSON.stringify({likes}),
    });
}

export const deleteListing = (id) => {
    
    return fetch(baseUrl + `${id}.json`, {
        method: 'DELETE',
    });
}

const filterListings = (listings, filterBy, filter) =>  {
    const asArray = Object.entries(listings);
    const filtered = asArray.filter(([key, value]) => value[filterBy] === filter);
    return Object.fromEntries(filtered);
}

const sortListings = (listings) => {
    const asArray = Object.entries(listings);
    const filtered = asArray.sort(([key, value], [key1, value1]) => new Date(value1.createdOn) - new Date(value.createdOn));
    return Object.fromEntries(filtered);
}