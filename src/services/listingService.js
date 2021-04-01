import * as fileService from './fileService';

const baseUrl = 'https://richards-listings-default-rtdb.firebaseio.com/listings/'

export const getAll = (category = '') => {
    // TODO implement category filtering
    return fetch(baseUrl + '.json')
        .then(res => res.json())
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

            console.log("res" +     res);
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
                    userId: 'todo'
                })
            })
                .catch(err => console.log(err)); // TODO
        })

}