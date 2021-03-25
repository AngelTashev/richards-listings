function Footer() {
    return (
        <footer>
            <section className="footer-container">
                <section className="footer-infos-container">
                    <h1>Contacts</h1>
                    <article className="footer-info">
                        <i className="fas fa-phone-alt"></i>
                        <p>+359 87 834 9271</p>
                    </article>
                    <article className="footer-info">
                        <i className="fas fa-envelope"></i>
                        <p>support@richardslistings.io</p>
                    </article>
                </section>
                <section className="footer-copytight-container">
                    <p>Richard's Listings &copy; 2021</p>
                    <p>Bulgaria boulevard 81A, Sofia, Bulgaria</p>
                    <article className="footer-share-container">
                        <ul className="footer-share-menu">
                            <li className="share-menu-item">
                                <a href="">
                                    <i className="fab fa-facebook-square"></i>
                                </a>
                            </li>
                            <li className="share-menu-item">
                                <a href="">
                                    <i className="fab fa-twitter"></i>
                                </a>
                            </li>
                            <li className="share-menu-item">
                                <a href="">
                                    <i className="fab fa-google-plus"></i>
                                </a>
                            </li>
                            <li className="share-menu-item">
                                <a href="">
                                    <i className="fab fa-linkedin"></i>
                                </a>
                            </li>
                            <li className="share-menu-item">
                                <a href="">
                                    <i className="fab fa-instagram"></i>
                                </a>
                            </li>
                        </ul>
                    </article>
                </section>
            </section>
        </footer>
    );
}

export default Footer;

