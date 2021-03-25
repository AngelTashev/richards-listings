function Header(props) {
    return (
        <header className="sticky">

        <section className="header-items-wrapper">
            <article className="header-logo-container">
                <div className="header-logo-wrapper">
                    <img src={props.logo} alt=""/>
                </div>
            </article>

            <section className="header-navs-container">
                <article className="header-nav-container">
                    <nav className="header-nav">
                        <ul>
                            <li className="header-nav-item">
                                <a href="">Home</a>
                            </li>
                            <li className="header-nav-item">
                                <a href="">About us</a>
                            </li>
                        </ul>
                    </nav>
                </article>

                <article className="header-log-ops-container">
                    <nav className="header-nav">
                        <ul>
                            <li className="header-nav-item">
                                <a href="">Login</a>
                            </li>
                            <li className="header-nav-item">
                                <a href="">Sign up</a>
                            </li>
                        </ul>
                    </nav>
                </article>
            </section>
        </section>


    </header>
    );
}

export default Header;