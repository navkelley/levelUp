import passport from 'passport';
import '../config/passportConfig';

export const requireLogin = passport.authenticate('local', { session: false });
