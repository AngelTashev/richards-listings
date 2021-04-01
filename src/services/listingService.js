import * as fileService from './fileService';

const baseUrl = 'https://richards-listings-default-rtdb.firebaseio.com/listings/'

export const getAll = (category = '') => {
    return fetch(baseUrl + '.json')
        .then(res => res.json())
        .then(res => category === '' ? res : filterListings(res, category))
        .then(res => sortListings(res))
        .catch(err => alert(err)); // TODO - error hadling
}

export const getOne = (id) => {
    return fetch(baseUrl + id + '.json')
        .then(res => res.json())
        .catch(alert); // TODO - error hadling
}

export const uploadListing = (listingInfo) => {
    const { title, description, price, category, image } = listingInfo;

    return fileService.uploadFile(image)
        .then(res => {

            return fetch(baseUrl + '.json?orderBy="category"&startAt="tech"', {
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
                    userId: 'todo'
                })
            })
                .catch(err => console.log(err)); // TODO
        })

}

const filterListings = (listings, category) =>  {
    const asArray = Object.entries(listings);
    const filtered = asArray.filter(([key, value]) => value.category === category);
    return Object.fromEntries(filtered);
}

const sortListings = (listings) => {
    const asArray = Object.entries(listings);
    const filtered = asArray.sort(([key, value], [key1, value1]) => new Date(value1.createdOn) - new Date(value.createdOn));
    return Object.fromEntries(filtered);
}