import { Component } from 'react';

import ErrorMessage from '../Shared/ErrorMessage';


class AddListing extends Component {

    constructor() {
        super();

        this.state = {
            errors: {
                title: '',
                description: '',
                price: 0,
                image: {},
            },
        };

        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    validateTitle(title) {
        console.log(title);
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

    onFormSubmit(e) {
        e.preventDefault();

        const { title, description, price } = e.target;

        this.setState({
            errors: {
                title: this.validateTitle(title.value),
                description: this.validateDescription(description.value),
                price: this.validatePrice(Number(price.value)),
                image: {},
            },
        });

        console.log(this.state.errors);

        
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

                        <label className="listing-form-label" htmlFor="image-input">Choose an image...</label>
                        <input type="file" name="image-input" id="image-input" className="listing-form-file"></input>

                        <button type="submit" className="listing-form-button" id="add-listing-button">Add!</button>

                    </form>
                </section>
            </main>
        );
    }
}

export default AddListing;