import { isEmail } from 'validator';

import Contact from './contact';
import { setContactInfo } from '../../helpers/setContactInfo';

export const getUserId = (req, res) => {
    const { name } = req.params;
    Contact.findOne({ name })
        .then(id => {
            return res.status(200).json(id);
        })
        .catch(err => {
            res.status(500).json({ message: 'Could not find contact' });
        });
};

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

export const deleteContact = (req, res) => {
    const { id } = req.params;

    Contact.remove(id)
        .then(() => res.status(200).json({ success: true, message: 'You have been removed from list.' }))
        .catch(err => res.status(422).json({ success: false, message: 'Could not delete.', err }));
};

export const updateEmail = (req, res) => {
    const { id } = req.params;
    const { email, name } = req.body;

    Contact.update({ id }, { email, name })
        .then(user => {
            res.status(200).json({ success: true, message: 'Succesfully updated contact information.', user });
        })
        .catch(err => res.status(422).json({ success: false, message: 'Error occurred with update.', err }));
};

export const getContacts = (req, res) => {
    Contact.find({}, (err, users) => {
        if (err) {
            return res.status(500).json({
                message: 'Internal Server Error'
            });
        }
        res.status(200).json(users);
    });
};
