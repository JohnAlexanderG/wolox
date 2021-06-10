export const logIn = async (email: String, password: String, toggleCheckBox: boolean) => {
    let message;
    await fetch('/sign_in', {
        method: 'POST',
        body: JSON.stringify({ email, password, toggleCheckBox })
    })
    .then((data) => data)
    .catch((err) => {
        message = `/sign_in ${err.message}, will log in as guest`;
    });

    return { access: true, message };
}

export const signUp = async (firstName: String, lastName: String, email: String, password: String, toggleCheckBox: boolean) => {
    return false;
}