//set user info to send to front-end protecting privacy for passwords

export const setUserInfo = user => {
    return {
        email: user.email,
        id: user._id,
        username: user.username
    };
};