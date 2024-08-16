const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'name is required']
    },
    email: {
        type: String,
        required: [true, 'email is required'],
        unique: [true, 'email existed'],
        index: true,
        trim: true,
        match: [/.+@.+\..+/, 'please enter a valid email address'],
        minlength: [2, 'email must be at least 2 characters long'],
        maxlength: [50, 'email must be at most 50 characters long']
    },
    password: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: [true, 'phone number is required'],
        unique: [true, 'phone number existed'],
    },
    address: {
        type: String,
        required: [true, 'address is required']
    },
    status: {
        type: Number,
        required: false,
        default: 1
    },
    isAdmin: {
        type: Boolean,
        default: false
    }
}, {timestamps: true})

module.exports = mongoose.model('user', userSchema)