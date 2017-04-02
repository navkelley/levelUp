import React from 'react';

const UsernameError = () => {
    return (
        <span className="form-error">Username is too short</span>
    );
};

const PasswordError = () => {
    return (
        <span className="form-error">Passwords do not match</span>
    );
};

const TryAgain = () => {
    return (
        <span className="form-error">Sorry, we could not create your account. Please try again!</span>
    );
};

module.exports = {
    UsernameError,
    PasswordError,
    TryAgain
};
