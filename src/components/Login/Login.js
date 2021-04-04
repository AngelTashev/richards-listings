import { useState } from 'react';

import firebase from '../../utils/firebase';

function Login() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [errors, setErrors] = useState({ username: '', password: '' });

    

    return (
        <main className="login-main">
            <h1>Login</h1>
            <section className="login-form-container">
                <form className="login-form" action="">

                    <label class="login-label" for="username-input">Username</label>
                    <input required placeholder="Username" type="email" name="username-input" id="username-input" className="login-text-input" />

                    <label class="login-label" for="password-input">Password</label>
                    <input required placeholder="Password" type="password" name="password-input" id="password-input" className="login-text-input" />

                    <button type="submit" className="login-button" id="login-button">Log in!</button>

                </form>
            </section>
        </main>
    );
}

export default Login;