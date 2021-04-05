import { useState } from 'react';
import { useHistory } from 'react-router-dom';

import * as validator from '../../utils/validator';

import * as userService from '../../services/userService';

import ErrorMessage from '../Shared/ErrorMessage';

function Register() {

    const history = useHistory();

    const [fullName, setFullName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');

    const [errors, setErrors] = useState({
        fullName: '', email: '',
        username: '', password: '',
        repeatPassword: '', auth: ''
    });

    const onNameChangeHandler = (e) => {
        const formName = e.target.value;
        setErrors({ ...errors, fullName: validator.fullName(formName) });
        setFullName(formName);
    }

    const onUsernameChangeHandler = (e) => {
        const formUsername = e.target.value;
        setErrors({ ...errors, username: validator.username(formUsername) });
        setUsername(formUsername);
    }

    const onEmailChangeHandler = (e) => {
        const formEmail = e.target.value;
        setErrors({ ...errors, email: validator.email(formEmail) });
        setEmail(formEmail);
    }

    const onPasswordChangeHandler = (e) => {
        const formPassword = e.target.value;
        setErrors({ ...errors, password: validator.password(formPassword),
                                repeatPassword: validator.repeatPassword(formPassword, repeatPassword)});
        setPassword(formPassword);
    }

    const onPasswordRepeatChangeHandler = (e) => {
        const formRepeatPassword = e.target.value;
        setErrors({ ...errors, repeatPassword: validator.repeatPassword(password, formRepeatPassword) });
        setRepeatPassword(formRepeatPassword);
    }

    const onFormSubmit = (e) => {
        e.preventDefault();

        if (!errors.fullName && !errors.username &&
            !errors.email && !errors.password &&
            !errors.repeatPassword) {

            userService.registerUserAndSaveData({
                fullName, username,
                email, password
            })
            .then(res => history.push('/'))
            .catch(err => setErrors({...errors, auth: err}));
        }
    }

    return (
        <main className="login-main">
            <h1>Register</h1>
            <ErrorMessage>{errors.auth}</ErrorMessage>
            <section className="login-form-container">
                <form className="login-form" onSubmit={onFormSubmit}>

                    <label class="login-label" for="fullName">Full Name</label>
                    <input onChange={onNameChangeHandler} required placeholder="Last Name" type="text" name="fullName" id="fullName" className="login-text-input" />
                    <ErrorMessage>{errors.fullName}</ErrorMessage>

                    <label class="login-label" for="username">Username</label>
                    <input onChange={onUsernameChangeHandler} required placeholder="Username" type="text" name="username" id="username" className="login-text-input" />
                    <ErrorMessage>{errors.username}</ErrorMessage>

                    <label class="login-label" for="email">Email</label>
                    <input onChange={onEmailChangeHandler} required placeholder="user@example.com" type="email" name="email" id="email" className="login-text-input" />
                    <ErrorMessage>{errors.email}</ErrorMessage>

                    <label class="login-label" for="password">Password</label>
                    <input onChange={onPasswordChangeHandler} required placeholder="Password" type="password" name="password" id="password" className="login-text-input" />
                    <ErrorMessage>{errors.password}</ErrorMessage>

                    <label class="login-label" for="repeat-password">Repeat Password</label>
                    <input onChange={onPasswordRepeatChangeHandler} required placeholder="Repeat Password" type="password" name="repeat-password" id="repeat-password" className="login-text-input" />
                    <ErrorMessage>{errors.repeatPassword}</ErrorMessage>

                    <button type="submit" className="login-button" id="login-button">Let's go!</button>

                </form>
            </section>
        </main>
    );
}

export default Register;