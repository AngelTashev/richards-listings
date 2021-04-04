import { useState, useEffect } from 'react';

import * as listingService from '../../services/listingService';

import ErrorMessage from '../Shared/ErrorMessage';

const EditListing = ({ props, match }) => {

    const [errors, setErrors] = useState({
        title: '',
        description: '',
        price: '',
    });

    const [listing, setListing] = useState({
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
    }, [listing]);

    const validate = (title, description, price) => {

        let errors = { title: '', description: '', price: '' }



        if (description.length < 20)
            errors.description = 'Description should be 20 characters min';
        else if (description.length > 400)
            errors.description = 'Description should be 400 characters max';

        if (price < 0)
            errors.price = 'Price should be 0 min';
        else if (price > 99999)
            errors.price = 'Price should be 99999 max';

        return errors;
    }

    const onFormSubmit = (e) => {
        e.preventDefault();

        const { title, description, price, category } = e.target;
        const errors = validate(title.value, description.value, price.value);
        setErrors(errors);

        if (!errors.title &&
            !errors.description &&
            !errors.price) {

            // listingService.uploadListing({
            //     title: title.value,
            //     description: description.value,
            //     price: price.value,
            //     category: category.value,
            //     image: this.state.selectedFile
            // })
            // .then(res => this.props.history.push('/'));
        }
    }

    const onFileChangeHandler = (e) => {
        setSelectedFile(e.target.files[0]);
        console.log(e.target.files);
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

    return (
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
                    <input required type="number" name="price" id="price" className="listing-form-text-input" value={price} />
                    <ErrorMessage>{errors.price}</ErrorMessage>

                    <label className="listing-form-label" htmlFor="image">Choose an image...</label>
                    <input onChange={onFileChangeHandler} type="file" name="image" id="image" className="listing-form-file"></input>

                    <button type="submit" className="listing-form-button" id="add-listing-button">Add!</button>

                </form>
            </section>
        </main>
    );

}

export default EditListing;