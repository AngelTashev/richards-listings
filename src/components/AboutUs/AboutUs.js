const AboutUs = () => {
    return (
        <main className="about-main">
            <article className="about-title-container">
                <h1 className="about-title">About us</h1>
            </article>
            <section className="about-section">
                <section className="about-map-section">
                    <h1>Bulgaria boulevard 81A, Sofia, Bulgaria</h1>
                    <article className="about-contact-article">
                        <i className="fas fa-phone-alt"></i>
                        <h1>+359 87 834 9271</h1>
                    </article>
                    <article className="about-contact-article">
                        <i className="fas fa-envelope"></i>
                        <h1>support@richardslistings.io</h1>
                    </article>
                    <div className="mapouter">
                        <div className="gmap_canvas">
                            <iframe width="450" height="350" id="gmap_canvas"
                                src="https://maps.google.com/maps?q=Sofia,%20Bulgaria%20boulevard%2081A&t=&z=13&ie=UTF8&iwloc=&output=embed"
                                frameborder="0" scrolling="no" marginheight="0" marginwidth="0">
                            </iframe>
                        </div>
                    </div>
                </section>
                <section className="about-calendar-section">
                    <h1>Our Events</h1>
                    <div data-tockify-component="mini" data-tockify-calendar="angel.tashev"></div>
                </section>
            </section>
        </main>
    );
}

export default AboutUs;