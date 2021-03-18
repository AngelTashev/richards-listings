function Register() {
    return (
        <main className="login-main">
            <h1>Register</h1>
            <section className="login-form-container">
                <form className="login-form" action="">

                    <label className="login-label" for="first-name-input">First Name</label>
                    <input required placeholder="First Name" type="text" name="first-name-input" id="first-name-input" className="login-text-input" />

                    <label class="login-label" for="last-name-input">Last Name</label>
                    <input required placeholder="Last Name" type="text" name="last-name-input" id="last-name-input" className="login-text-input" />

                    <label class="login-label" for="username-input">Username</label>
                    <input required placeholder="Username" type="text" name="username-input" id="username-input" className="login-text-input" />

                    <label class="login-label" for="email-input">Password</label>
                    <input required placeholder="user@example.com" type="email" name="email-input" id="email-input" className="login-text-input" />

                    <label class="login-label" for="password-input">Password</label>
                    <input required placeholder="Password" type="password" name="password-input" id="password-input" className="login-text-input" />

                    <label class="login-label" for="repeat-password-input">Repeat Password</label>
                    <input required placeholder="Repeat Password" type="password" name="repeat-password-input" id="repeat-password-input" className="login-text-input" />

                    <button type="submit" className="login-button" id="login-button">Let's go!</button>

                </form>
            </section>
        </main>
    );
}

export default Register;