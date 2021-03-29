import { Component } from 'react';

class AddListing extends Component {

    // TODO remove value and add onchange
    render() {
        return (
            <main className="listing-form-main">
                <h1>Add Listing</h1>
                <section className="listing-form-container">
                    <form className="listing-form" action="">

                        <label className="listing-form-label" for="title-input">Title</label>
                        <input required placeholder="Title of your listing" type="text" name="title-input" id="title-input" className="listing-form-text-input" />

                        <label className="listing-form-label" for="description-input">Description</label>
                        <textarea required placeholder="Give your listing a good description!" type="textarea" name="description-input" id="description-input" className="listing-form-textarea" min-length="20" max-length="400" required></textarea>

                        <label className="listing-form-label" for="price-input">Price</label>
                        <input required value="100" type="number" min="0" max="99999" name="price-input" id="price-input" className="listing-form-text-input" />

                        <label className="listing-form-label" for="image-input">Choose an image...</label>
                        <input required type="file" name="image-input" id="image-input" className="listing-form-file"></input>


                        <button type="submit" className="listing-form-button" id="add-listing-button">Add!</button>

                    </form>
                </section>
            </main>
        );
    }
}

export default AddListing;