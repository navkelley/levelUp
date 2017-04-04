import mongoose, { Schema } from 'mongoose';
import { hash, compare } from 'bcryptjs';

const UserSchema = new Schema({
    username: { 
        type: String, 
        unique: true, 
        required: true, 
        trim: true 
    },
    password: { 
        type: String, 
        required: true, 
        trim: true 
    },
    email: { 
        type: String, 
        unique: true,
        required: true
    }
});

UserSchema.pre('save', function(next) {
    const SaltRounds = 10;
    hash(this.password, SaltRounds, (err, hashPassword) => {
        if (err) { return console.error(err); }
        this.password = hashPassword;
        next();
    });
});

UserSchema.methods.comparePassword = (candidatePassword, callback) => {
  compare(candidatePassword, this.password, (err, isMatch) => {
     if (err) { return callback(err); }
     callback(null, isMatch);
  });
};

export default mongoose.model('User', UserSchema);
