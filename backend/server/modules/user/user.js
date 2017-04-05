import mongoose, { Schema } from 'mongoose';
import { hash, compare } from 'bcrypt';
import { isEmail } from 'validator';

const UserSchema = new Schema({
    username: { 
        type: String, 
        unique: true,  
        trim: true,
        validate: [isEmail, 'You must provide a valid email address.']
    },
    password: { 
        type: String,  
        trim: true 
    },
    email: { 
        type: String, 
        unique: true
    }
});

UserSchema.pre('save', function (next) {
    const SaltRounds = 10;
    hash(this.password, SaltRounds, (err, hashPassword) => {
        if (err) { return console.error(err); }
        this.password = hashPassword;
        next();
    });
});

UserSchema.methods.comparePassword = function (candidatePassword, callback) {
  compare(candidatePassword, this.password, (err, isMatch) => {
     if (err) { return callback(err); }
     callback(null, isMatch);
  });
};

export default mongoose.model('User', UserSchema);
