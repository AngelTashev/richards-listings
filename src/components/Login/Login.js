import { useState } from 'react';
import { useHistory } from 'react-router-dom';

import * as authService from '../../services/authService';

import ErrorMessage from '../Shared/ErrorMessage';

function Login() {

    const history = useHistory();

    const [errors, setErrors] = useState
        ({  username: '', 
            password: '', 
            auth: ''
        });

    const onFormSubmit = (e) => {

        e.preventDefault();
        setErrors({...errors, auth: ''});

        const email = e.target.email.value;
        const password = e.target.password.value;

        authService.signInUser({email, password})
            .then(res => {
                // setUser(res.user);
                history.push('/');
            })
            .catch(err => setErrors({...errors, auth: err.message}));
    }

    

    return (
        <main className="login-main">
            <h1>Login</h1>
            <ErrorMessage>{errors.auth}</ErrorMessage>
            <section className="login-form-container">
                <form className="login-form" onSubmit={onFormSubmit}>

                    <label className="login-label" htmlFor="email">Email</label>
                    <input required placeholder="Email" type="email" name="email" id="email" className="login-text-input" />

                    <label className="login-label" htmlFor="password">Password</label>
                    <input required placeholder="Password" type="password" name="password" id="password" className="login-text-input" />

                    <button type="submit" className="login-button" id="login-button">Log in!</button>

                </form>
            </section>
        </main>
    );
}

export default Login;