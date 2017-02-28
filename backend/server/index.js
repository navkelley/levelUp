import express from 'express';
import dbconfig from './config/db';
import middlewaresConfig from './config/middlewares';

const app = express();

//database
dbconfig();

//middleware
middlewaresConfig(app);

const PORT = process.env.PORT || 8080;

app.listen(PORT, err => {
  if(err) {
    console.error(err);
  } {
    console.log(`App listening to port: ${PORT}`);
  }
});