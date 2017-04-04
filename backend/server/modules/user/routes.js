import path from 'path';
import express from 'express';
import passport from 'passport';
import LocalStrategy from 'passport-local';
import { isEmail } from 'validator';
import User from './user';

const ROUTER = express.Router();

//middleware that is specific to this router
const timeLog = ROUTER.use((req, res, next) => {
  console.log('Time: ', Date.now());
  next();
});

ROUTER.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/index.html'));
});

ROUTER.get('/', ensureAuthenticated, (req, res) => {
   res.redirect('/');
});

function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect(401, '/');
}

ROUTER.post('/register', (req, res) => {
  console.log(req.body);
  const { email, username, password } = req.body;

  //validation
  if (email.length === 0) { return res.status(400).json({ error: 'Email is required' }); }  
  else if (!isEmail(email)) { return res.status(400).json({ message: 'Email is not valid.' }); }
  else if (username.length === 0) { return res.status(400).json({ error: 'Username is required' }); }
  else if (password.length === 0) { return res.status(400).json({ error: 'A password is required' }); }

  User.findOne({ email })
    .then(auth => {
      if (auth) { return res.status(422).json({ success: false, error: 'Email already in use.' }); }
    });
    const newUser = new User({
      email,
      password, 
      username 
    });

    newUser.save()
      .then(user => {
        return res.status(201).json({
          message: 'Registration Successful',
          user
        });
      })
      .catch(err => {
        let error;
        if (err.code === 11000) {
          error = 'Duplicate email, please provide another one.';
        }
        return res.status(422).json({ success: false, message: error || err });
      });
  }
);

const localLogin = new LocalStrategy((email, password, done) => {
    User.findOne({ email })
      .then(user => {
        if (!user) { return done(null, false, { error: 'Login unsuccessful. Please try again!' }); }
        User.comparePassword(password, (err, isMatch) => {
          if (err) {
            return done(err);
          }
          else if (!isMatch) {
            return done(null, false, { error: 'Password did not match. Please try again!' });
          }
          return done(null, user);
        });
      })
      .catch(err => done(err));
});

passport.use(localLogin);

ROUTER.post('/login', passport.authenticate('local', { session: false }, (req, res, next) => {
  const user = req.body.email;
  res.send({ success: true, user });
  return next();
}));

ROUTER.post('/getUserId', (req, res) => {
    User.getUserByUsername(req.body.username, (err, user) => {
        if (err) {
            console.log(err);
        }
        else {
            res.json(user);
        }
    });
});

ROUTER.get('/logout', (req, res) => {
   req.logout();
   req.flash('sucess_msg', 'You are logged out');
   res.redirect('/');
});

ROUTER.use('*', (req, res) => {
    res.status(404).json({
        message: 'Not Found'
    });
});

export default ROUTER;
