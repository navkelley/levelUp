import mongoose from 'mongoose';
import serverConfig from './serverConfig';

export default () => {
  mongoose.Promise = global.Promise;
  mongoose.connect(serverConfig.DATABASE_URL);
  mongoose.connection
    .once('open', () => console.log('Mongodb running'))
    .on('error', err => console.error(err));
};
