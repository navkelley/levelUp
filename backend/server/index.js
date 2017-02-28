import express from 'express';
import dbconfig from './config/db';
import middlewaresConfig from './config/middlewares';
import { UserRoutes } from './modules';

const app = express();

//database
dbconfig();

//middleware
middlewaresConfig(app);

app.use('/api', [UserRoutes]);
app.use(express.static('public'));

const PORT = process.env.PORT || 8080;

app.listen(PORT, err => {
	if (err) {
		console.error(err);
	} else {
		console.log(`App listening to port: ${PORT}`);
	}
});
