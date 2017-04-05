import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import passport from 'passport';
import dbconfig from './config/db';
import { userRoutes } from './modules';

const app = express();

//database
dbconfig();

//middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(passport.initialize());

app.use('/api', [userRoutes]);
app.use(express.static('public'));

const PORT = process.env.PORT || 8080;

app.listen(PORT, err => {
	if (err) {
		console.error(err);
	} else {
		console.log(`App listening to port: ${PORT}`);
	}
});
