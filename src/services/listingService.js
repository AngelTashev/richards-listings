const baseUrl = 'https://richards-listings-default-rtdb.firebaseio.com/.json'

export const getAll = (category = '') => {
    // TODO implement category filtering
    return fetch(baseUrl)
        .then(res => res.json())
        .catch(err => alert(err)); // TODO - error hadling
}

export const getOne = (id) => {
    alert('Implement getOne!'); // TODO
}