import { useState, useEffect, useContext } from 'react';
import { Redirect, useHistory } from 'react-router-dom';

import * as listingService from '../../services/listingService';

import AuthContext from '../AuthContext';
import ErrorMessage from '../Shared/ErrorMessage';

const EditListing = ({ match }) => {

    const { user } = useContext(AuthContext);

    const history = useHistory();

    const [errors, setErrors] = useState({
        title: '',
        description: '',
        price: '',
    });

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [selectedFile, setSelectedFile] = useState(null);

    useEffect(() => {
        listingService.getOne(match.params.id)
            .then(res => {
                setTitle(res.title);
                setDescription(res.description);
                setPrice(res.price);
                return res;
            });
    }, [match.params.id]);

    const onFormSubmit = (e) => {
        e.preventDefault();

        if (!errors.title &&
            !errors.description &&
            !errors.price) {

            listingService.updateListing({
                id: match.params.id,
                title,
                description,
                price,
                image: selectedFile
            })
            .then(history.push(`/user/${user.uid}/listings`));
        }
    }

    const onFileChangeHandler = (e) => {
        setSelectedFile(e.target.files[0]);
    }

    const onTitleChangeHandler = (e) => {

        const formTitle = e.target.value;

        if (formTitle.length < 5)
            setErrors({ ...errors, title: 'Title should be 5 characters min' });
        else if (formTitle.length >= 5 && formTitle.length <= 40)
            setErrors({ ...errors, title: '' });
        else if (formTitle.length > 40)
            setErrors({ ...errors, title: 'Title should be 40 characters max' });

        setTitle(formTitle);
    }

    const onDescriptionChangeHandler = (e) => {

        const formDesc = e.target.value;

        if (formDesc.length < 20)
            setErrors({ ...errors, description: 'Description should be 5 characters min' });
        else if (formDesc.length >= 20 && formDesc.length <= 400)
            setErrors({ ...errors, description: '' });
        else if (formDesc.length > 400)
            setErrors({ ...errors, description: 'Description should be 40 characters max' });

        setDescription(formDesc);
    }

    const onPriceChangeHandler = (e) => {

        const formPrice = Number(e.target.value);

        if (formPrice.length < 0)
            setErrors({ ...errors, price: 'Price should be 0 min' });
        else if (formPrice.length >= 0 && formPrice.length <= 99999)
            setErrors({ ...errors, price: '' });
        else if (formPrice.length > 99999)
            setErrors({ ...errors, price: 'Price should be 99999 max' });

        setPrice(formPrice);
    }

    return user ? (
        <main className="listing-form-main">
            <h1>Edit Listing</h1>
            <section className="listing-form-container">
                <form className="listing-form" onSubmit={onFormSubmit}>

                    <label className="listing-form-label" htmlFor="title">Title</label>
                    <input onChange={onTitleChangeHandler} required placeholder="Title of your listing" type="text" name="title" id="title" className="listing-form-text-input" value={title} />
                    <ErrorMessage>{errors.title}</ErrorMessage>

                    <label className="listing-form-label" htmlFor="description">Description</label>
                    <textarea onChange={onDescriptionChangeHandler} required placeholder="Give your listing a good description!" type="textarea" name="description" id="description" className="listing-form-textarea" value={description}></textarea>
                    <ErrorMessage>{errors.description}</ErrorMessage>

                    <label className="listing-form-label" htmlFor="price">Price</label>
                    <input onChange={onPriceChangeHandler} required type="number" name="price" id="price" className="listing-form-text-input" value={price} />
                    <ErrorMessage>{errors.price}</ErrorMessage>

                    <label className="listing-form-label" htmlFor="image">Choose an image...</label>
                    <input onChange={onFileChangeHandler} type="file" name="image" id="image" className="listing-form-file"></input>

                    <button type="submit" className="listing-form-button" id="add-listing-button">Publish!</button>

                </form>
            </section>
        </main>
    )
    :
    <Redirect to="/"/>

}

export default EditListing;