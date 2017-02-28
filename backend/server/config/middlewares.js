import bodyParser from 'body-parser';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import flash from 'connect-flash';
import session from 'express-session';
import passport from 'passport';
import LocalStrategy, { Strategy } from 'passport-local';
import expressValidator from 'express-validator';

export default app => {
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({ extended: false }));
	app.use(morgan('dev'));
	app.use(cookieParser());
	app.use(flash());

	//Creating express session
	app.use(session({
		secret: 'secret',
		saveUninitialized: true,
		resave: true
	}));

	app.use(passport.initialize());
	app.use(passport.session());

	// Express Validator
	app.use(expressValidator({
		errorFormatter: function(param, msg, value) {
				let namespace = param.split('.'),
				root = namespace.shift(),
				formParam = root;

			while(namespace.length) {
				formParam += '[' + namespace.shift() + ']';
			}

			return {
				param : formParam,
				msg   : msg,
				value : value
			};
		}
	}));
}