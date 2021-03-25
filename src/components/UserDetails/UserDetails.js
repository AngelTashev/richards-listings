function UserDetails() {
    return (
        <main className="user-details-main">
        <section className="user-picture-name-section">
            <article className="user-details-picture-container">
                <img className="user-details-picture" src="https://genslerzudansdentistry.com/wp-content/uploads/2015/11/anonymous-user.png" alt=""/>
            </article>
            <article className="user-name-container">
                <h1 className="user-name-fullname">Angel Tashev</h1>
                <p className="user-name-username">angel.tashev</p>
            </article>
        </section>
        <section className="user-details-section">
            <article className="user-details">
                <article className="user-details-listings-container">
                    <h1>Current Listings: 9</h1>
                    <button><a href="">See All</a></button>
                </article>
                <h1>Likes: 109</h1>
            </article>
        </section>
    </main>
    )
}

export default UserDetails;