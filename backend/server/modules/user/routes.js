import path from 'path';
import express from 'express';
import passport from 'passport';
import LocalStrategy, { Strategy } from 'passport-local';
import session from 'express-session';
import flash from 'connect-flash';
import expressValidator from 'express-validator';

import User from './user';

const ROUTER = express.Router();

//middleware that is specific to this router
const timeLog = ROUTER.use((req, res, next) => {
  console.log('Time: ', Date.now());
  next();
});

ROUTER.get('/', (req,res) => {
    res.sendFile(path.join(__dirname + '/public/index.html'));
});

ROUTER.get('/', ensureAuthenticated, (req, res) => {
   res.redirect('/');
});

function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  } else {
    res.redirect(401, '/');
  }
}

ROUTER.post('/register', (req, res) => {
  let name = req.body.name;
  let email = req.body.email;
  let username = req.body.username;
  let password = req.body.password;
  let verifypassword = req.body.verifypassword;

  //validation
  req.checkBody('name', 'Name is required').notEmpty();
  req.checkBody('email', 'Email is required').notEmpty();
  req.checkBody('email', 'Email is not valid').isEmail();
  req.checkBody('username', 'Username is required').notEmpty();
  req.checkBody('password', 'Password is required').notEmpty();

  let errors = req.validationErrors();

  if (errors) {
    res.json(errors);
  } else {
    let newUser = new User({
      name: name,
      email: email,
      username: username,
      password: password
    });
    User.createUser(newUser, (err, user) => {
      if(err) throw err;
        res.json(user);
    });
  }
});

passport.use(new LocalStrategy(
  function(username, password, done) {
    User.getUserByUsername(username, (err, user) => {
      if(err) throw err;
      if(!user){
        return done(null, false, {message: 'Unknown User'});
      }
      User.comparePassword(password, user.password, (err, isMatch) => {
        if(err) throw err;
        if(isMatch) {
          return done(null, user);
        } else {
          return done( null, false, {message: 'Invalid password'});
        }
      });
    });
  }));

  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser((id, done) => {
    User.getUserbyId(id, (err, user) => {
      done(err, user);
    });
  });

ROUTER.post('/login',
  passport.authenticate('local', {successRedirect:'/', failureRedirect:'/', failureFlash: true}),
  function(req, res) {
});

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
