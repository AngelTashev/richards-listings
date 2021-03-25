function AnonymousLanding() {
    return (
        <main>
            <article className="main-welcome-img-wrapper">
                <img className="main-welcome-img" src="https://thumbs.dreamstime.com/b/happy-people-shaking-hands-city-street-business-partnership-gesture-cooperation-concept-98639208.jpg" alt="" />
            </article>
            <section className="main-welcome-container">
                <article className="welcome-title-container">
                    <h1 className="welcome-title">Welcome to Richard's Listings</h1>
                    <p className="welcome-subtitle">The best online listings store</p>
                </article>
                <article className="log-ops-article">
                    <p>Start by</p>
                    <button className="log-ops-btn"><a href="">Sign Up</a></button>
                    <p>or</p>
                    <button className="log-ops-btn"><a href="">Login</a></button>
                </article>
            </section>
        </main>
    );
}

export default AnonymousLanding;