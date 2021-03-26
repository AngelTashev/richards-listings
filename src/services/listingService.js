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