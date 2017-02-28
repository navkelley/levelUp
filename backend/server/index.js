import express from 'express';


const app = express();

const PORT = process.env.PORT || 8080;

app.listen(PORT, err => {
  if(err) {
    console.error(err);
  } {
    console.log(`App listening to port: ${PORT}`);
  }
});