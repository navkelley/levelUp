import { isEmail } from 'validator';
import User from './user';
import { setUserInfo } from '../../helpers/setUserInfo';
import '../../config/passportConfig';

export const login = (req, res, next) => {
    const user = setUserInfo(req.user);
    res.send({ success: true, user });
    return next();
};

export const signup = (req, res) => {
    console.log(req.body);
    const { email, password, verifyPassword, username } = req.body;

    //validation
    if (email.length === 0) { return res.status(400).json({ error: 'Email is required' }); }  
    else if (!isEmail(email)) { return res.status(400).json({ message: 'Email is not valid.' }); }
    else if (username.length === 0) { return res.status(400).json({ error: 'Username is required' }); }
    else if (password.length === 0) { return res.status(400).json({ error: 'A password is required' }); }
    else if (password !== verifyPassword) { return res.status(400).json({ message: 'Passwords do not match!' }); }

    User.findOne({ email })
        .then(auth => {
        if (auth) { return res.status(422).json({ success: false, error: 'Email already in use.' }); }

        const newUser = new User({ email, password, username });

        newUser.save()
            .then(user => {
                return res.status(201).json({
                    success: true,
                    message: 'Registration Successful!',
                    user: setUserInfo(user)
                });
            })
            .catch(err => {
                let error;
                if (err.code === 11000) {
                    error = 'Duplicate email, please provide another one.';
                }
                res.status(422).json({
                    success: false,
                    message: error || err
                });
            });
        });
};