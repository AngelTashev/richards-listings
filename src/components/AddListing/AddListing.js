import { Component } from 'react';

import * as listingService from '../../services/listingService';

import ErrorMessage from '../Shared/ErrorMessage';


class AddListing extends Component {

    constructor(props) {
        super(props);

        console.log(props);

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

    validate(title, description, price) {

        let errors = { title: '', description: '', price: '' }

        if (title.length < 5)
            errors.title = 'Title should be 5 characters min';
        else if (title.length > 40)
            errors.title = 'Title should be 40 characters max';

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

    onFileChangeHandler(event) {
        this.setState({ selectedFile: event.target.files[0] });
        console.log(event.target.files);
    }

    onFormSubmit(e) {
        e.preventDefault();

        const { title, description, price, category } = e.target;
        const errors = this.validate(title.value, description.value, price.value);
        this.setState({errors});

        if (!errors.title &&
            !errors.description &&
            !errors.price) {

            listingService.uploadListing({
                title: title.value,
                description: description.value,
                price: price.value,
                category: category.value,
                image: this.state.selectedFile,
            })
            .then(res => this.props.history.push('/'));
        }
    }

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
                        <textarea required placeholder="Give your listing a good description!" type="textarea" name="description" id="description" className="listing-form-textarea"></textarea>
                        <ErrorMessage>{this.state.errors.description}</ErrorMessage>

                        <label className="listing-form-label" htmlFor="price">Price</label>
                        <input required type="number" name="price" id="price" className="listing-form-text-input" />
                        <ErrorMessage>{this.state.errors.price}</ErrorMessage>

                        <label className="listing-form-label" htmlFor="category">Category</label>
                        <select required name="category" id="category" className="listing-form-text-input">
                            <option defaultValue="other">Other</option>
                            <option value="tech">Tech</option>
                            <option value="house">House</option>
                            <option value="cars">Cars</option>
                        </select>

                        <label className="listing-form-label" htmlFor="image">Choose an image...</label>
                        <input onChange={this.onFileChangeHandler} type="file" name="image" id="image" className="listing-form-file"></input>

                        <button type="submit" className="listing-form-button" id="add-listing-button">Add!</button>

                    </form>
                </section>
            </main>
        );
    }
}

export default AddListing;