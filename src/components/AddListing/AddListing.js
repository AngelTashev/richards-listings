import { Component } from 'react';

import * as listingService from '../../services/listingService';

import ErrorMessage from '../Shared/ErrorMessage';


class AddListing extends Component {

    constructor() {
        super();

        this.state = {
            errors: {
                title: '',
                description: '',
                price: '',
            },
            selectedFile: null,
        };

        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.onFileChangeHandler = this.onFileChangeHandler.bind(this);
    }

    validateTitle(title) {
        if (title.length < 5)
            return 'Title should be 5 characters min';

        if (title.length > 20)
            return 'Title should be 20 characters max';

        return '';
    }

    validateDescription(description) {
        if (description.length < 20)
            return 'Description should be 20 characters min';

        if (description.length > 400)
            return 'Description should be 400 characters max';

        return '';
    }

    validatePrice(price) {
        if (price < 0)
            return 'Price should be 0 min';

        if (price > 99999)
            return 'Price should be 99999 max';

        return '';
    }

    onFileChangeHandler(event) {
        this.setState({selectedFile: event.target.files[0]});
        console.log(event.target.files);
    }

    onFormSubmit(e) {
        e.preventDefault();

        const { title, description, price } = e.target;

        this.setState({
            errors: {
                title: this.validateTitle(title.value),
                description: this.validateDescription(description.value),
                price: this.validatePrice(Number(price.value)),
            },
        });

        if (!this.state.errors.title && 
            !this.state.errors.description && 
            !this.state.errors.price) {

                listingService.uploadListing({
                    title: title.value,
                    description: description.value,
                    price: price.value,
                    category: 'other',
                    image: this.state.selectedFile});
        }


        
    }

    // TODO remove value and add onchange
    render() {
        return (
            <main className="listing-form-main">
                <h1>Add Listing</h1>
                <section className="listing-form-container">
                    <form className="listing-form" onSubmit={this.onFormSubmit}>

                        <label className="listing-form-label" htmlFor="title">Title</label>
                        <input required placeholder="Title of your listing" type="text" name="title" id="title" className="listing-form-text-input" />
                        <ErrorMessage>{this.state.errors.title}</ErrorMessage>

                        <label className="listing-form-label" htmlFor="description">Description</label>
                        <textarea required placeholder="Give your listing a good description!" type="textarea" name="description" id="description" className="listing-form-textarea" min-length="20" max-length="400" required></textarea>
                        <ErrorMessage>{this.state.errors.description}</ErrorMessage>

                        <label className="listing-form-label" htmlFor="price">Price</label>
                        <input required type="number" min="0" max="99999" name="price" id="price" className="listing-form-text-input" />
                        <ErrorMessage>{this.state.errors.price}</ErrorMessage>

                        <label className="listing-form-label" htmlFor="image">Choose an image...</label>
                        <input  onChange={this.onFileChangeHandler} type="file" name="image" id="image" className="listing-form-file"></input>

                        <button type="submit" className="listing-form-button" id="add-listing-button">Add!</button>

                    </form>
                </section>
            </main>
        );
    }
}

export default AddListing;