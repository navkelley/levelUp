import express from 'express';
import dbconfig from './config/db';
import middlewaresConfig from './config/middlewares';
import { UserRoutes } from './modules';

const APP = express();

//database
dbconfig();

//middleware
middlewaresConfig(APP);

APP.use('/api', [UserRoutes]);
APP.use(express.static('public'));

const PORT = process.env.PORT || 8080;

APP.listen(PORT, err => {
	if (err) {
		console.error(err);
	} else {
		console.log(`App listening to port: ${PORT}`);
	}
});
