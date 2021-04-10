import { Link } from 'react-router-dom';

const UserListing = ({ userListing, canModify }) => {

    return (
        <article className="user-listing">
            <div className="user-listing-info">
                <h3>{userListing.title}</h3>
                <p>{userListing.price}$</p>
            </div>
            <div className="user-listing-info">
                <button className="user-listing-button"><Link to={`/listings/${userListing.id}`}>View</Link></button>
                {canModify &&
                    <button className="user-listing-button"><Link to={`/listings/${userListing.id}/edit`}>Edit</Link></button>
                }
                {canModify &&
                    <button className="user-listing-button"><Link to={`/listings/${userListing.id}/delete`}>Delete</Link></button>
                }
            </div>
        </article>
    );
}

export default UserListing;