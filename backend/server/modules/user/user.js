import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const ObjectId = mongoose.Schema.ObjectId;

const UserSchema = new mongoose.Schema({
  username: {type: String, unique: true, required: true, trim: true, index: true},
  password: {type: String, required: true, trim: true},
  email: {type: String, unique: true},
  name: {type: String}
});

const User = module.exports = mongoose.model('User', UserSchema);

module.exports.createUser = (newUser, callback) => {
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
            newUser.password = hash;
            newUser.save(callback);
        });
    });
};

module.exports.getUserByUsername = (username, callback) => {
   let query = {username: username};
   User.findOne(query, callback);
};

module.exports.getUserbyId = (id, callback) => {
   User.findById(id, callback);
};

module.exports.comparePassword = (candidatePassword, hash, callback) => {
  bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
     if(err) throw err;
     callback(null, isMatch);
  });
};