import { isEmail } from 'validator';

import Contact from './contact';
import { setContactInfo } from '../../helpers/setContactInfo';

export const signup = (req, res) => {
    const { name, email } = req.body;

    if (email.length === 0) { return res.status(400).json({ error: 'Email is required' }); }
    else if (!isEmail(email)) { return res.status(400).json({ message: 'Email is not valid.' }); }

    Contact.findOne({ email })
        .then(exists => {
            if (exists) { return res.status(422).json({ success: false, error: 'Email already in use.' }); }

            const newContact = new Contact({ email, name });

            newContact.save()
                .then(user => {
                    return res.status(201).json({
                        success: true, 
                        message: 'You are added to the list!',
                        user: setContactInfo(user)
                    });
                })
                .catch(err => { 
                    res.status(422).json({ success: false, message: err }); 
                });
        });
};
