import mongoose, { Schema } from 'mongoose';

const ContactSchema = new Schema({
    name: {
        type: String,
        trim: true
    },
    email: {
        type: String,
        unique: true
    }
});

export default mongoose.model('Contact', ContactSchema);
