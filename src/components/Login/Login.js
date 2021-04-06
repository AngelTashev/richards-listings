import { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';

import * as authService from '../../services/authService';

import firebase from '../../utils/firebase';

import ErrorMessage from '../Shared/ErrorMessage';

import AuthContext from '../AuthContext';

function Login() {

    const { user } = useContext(AuthContext);

    const history = useHistory();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [errors, setErrors] = useState({ username: '', password: '', auth: '' });

    const onFormSubmit = (e) => {

        e.preventDefault();
        setErrors({...errors, auth: ''});

        const email = e.target.email.value;
        const password = e.target.password.value;

        authService.signInUser({email, password})
            .then(res => {
                AuthContext.Provider.value = res;
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