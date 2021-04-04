export const fullName = (fullName) => {
    if (fullName.length < 5)
        return 'Full name should be 5 characters min';
    else if (fullName.length >= 5 && fullName.length <= 20)
        return '';
    else if (fullName.length > 20)
        return 'Full name should be 20 characters max';
}

export const username = (username) => {
    const regex = /^[a-zA-Z0-9._]+$/;

    if (username.length < 5)
        return 'Username should be 5 characters min';
    else if (username.length >= 5 && username.length <= 15) {
        if (username.match(regex))
            return '';
        else
            return 'Username should contain . and _ only';
    }
    else if (username.length > 15)
        return 'Username should be 15 characters max';
}

export const email = (email) => {
    const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (email.match(regex))
        return '';
    else
        return 'Email is not valid';
}

export const password = (password) => {
    if (password.length < 5)
        return 'Password should be 5 characters min';
    else if (password.length >= 5 && password.length <= 20)
        return '';
    else if (password.length > 20)
        return 'Password should be 20 characters max';
}

export const repeatPassword = (password, repeatPassword) => {
    if(password !== repeatPassword) 
        return 'Passwords do not match';
    else 
        return '';
}