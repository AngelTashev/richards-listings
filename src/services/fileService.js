const cloudinaryURL = 'https://api.Cloudinary.com/v1_1/dthoksfe5/image/upload';
const apiKey = '644331637917722';

export const uploadFile = (file) => {

    if (!file) 
        return Promise.resolve('');

    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'vphbkqai');
    formData.append('api_key', apiKey);
    const options = {
        method: 'POST',
        body: formData,
    };

    return fetch(cloudinaryURL, options)
        .then(res => res.json())
        .then(res => res.secure_url)
}