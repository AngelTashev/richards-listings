import { Link } from 'react-router-dom';
import { useContext } from 'react';

import AuthContext from '../AuthContext';

function Header(props) {

    const { user } = useContext(AuthContext);

    let userSection = user ?
        (<ul>
            <li className="header-nav-item">
                <Link to="/add-listing">Add Listing</Link>
            </li>
            <li className="header-nav-item">
                <Link to="/user">{user.email}</Link>
            </li>
        </ul>)
        :
        (<ul>
            <li className="header-nav-item">
                <Link to="/login">Login</Link>
            </li>
            <li className="header-nav-item">
                <Link to="/register">Sign up</Link>
            </li>
        </ul>)

    return (
        <header className="sticky">

            <section className="header-items-wrapper">
                <article className="header-logo-container">
                    <div className="header-logo-wrapper">
                        <img src={props.logo} alt="" />
                    </div>
                </article>

                <section className="header-navs-container">
                    <article className="header-nav-container">
                        <nav className="header-nav">
                            <ul>
                                <li className="header-nav-item">
                                    <Link to="/">Home</Link>
                                </li>
                                <li className="header-nav-item">
                                    <Link to="/about-us">About us</Link>
                                </li>
                            </ul>
                        </nav>
                    </article>

                    <article className="header-log-ops-container">
                        <nav className="header-nav">
                            {userSection}
                        </nav>
                    </article>
                </section>
            </section>


        </header>
    );
}

export default Header;