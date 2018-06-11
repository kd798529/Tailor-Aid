const mongoose = require('mongoose');

const { Schema } = mongoose;

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true
    },
    firstName: String,
    lastName: String,
    email: {
        type: String,
        unique: true
    },
    passwordHash: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('User', UserSchema);