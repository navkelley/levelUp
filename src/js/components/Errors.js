import React from 'react';

const ErrorMessage = ({ message }) => {
    return (
        <span className="form-error">{message}</span>
    );
};

export default ErrorMessage;
