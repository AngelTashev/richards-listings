const cloudinaryURL = 'https://api.Cloudinary.com/v1_1/dthoksfe5/image/upload'

export const uploadFile = (file) => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'vphbkqai');
    const options = {
        method: 'POST',
        body: formData,
    };

    return fetch(cloudinaryURL, options)
        .then(res => res.json())
        .then(res => res.secure_url)
        .catch(err => console.log(err)); //TODO
}


