import passport from 'passport';
import LocalStrategy from 'passport-local';
import { User } from '../modules';

const localOptions = { usernameField: 'email' };

const localLogin = new LocalStrategy(localOptions, (email, password, done) => {
    User.findOne({ email })
      .then(user => {
        if (!user) { return done(null, false, { error: 'Login unsuccessful. Please try again!' }); }
        user.comparePassword(password, (err, isMatch) => {
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
