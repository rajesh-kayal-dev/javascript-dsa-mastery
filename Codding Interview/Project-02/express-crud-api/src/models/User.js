import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
    },
    age: {
        type: Number,
        required: true,
        min: 18,
    },

}, {
    timeseries: true,
});

const User = mongoose.model("User", UserSchema);

export default User;