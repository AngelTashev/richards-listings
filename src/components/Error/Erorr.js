import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div id="notfound">
            <div className="notfound">
                <div className="notfound-404">
                    <h1>Oops!</h1>
                    <h2>Oh no! Something really bad happened! ;(</h2>
                </div>
                <Link to="/">Go home!</Link>
            </div>
        </div>
    );
}

export default Error;