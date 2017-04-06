import mongoose, { Schema } from 'mongoose';

const StreamSchema = new Schema({
    name: {
        type: String, 
        trim: true,
        required: true
    },
    logo: {
        type: String
    },
    //user who request to follow streamer
    follow: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
});

export default mongoose.model('Streamer', StreamSchema);
