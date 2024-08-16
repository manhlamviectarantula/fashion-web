const mongoose = require('mongoose')

const categorySchema = mongoose.Schema({
    title: {
        type: String,
        required: [true, 'title is required']
    },
    name: {
        type: String,
        required: [true, 'name is required'],
        unique: true
    },
    thumbnail: {
        type: String,
        required: [true, 'thumbnail is required'],
    },
    createdBy: {
        type: String,
        required: [true, 'createdBy is required'],
    },
    updatedBy: {
        type: String,
        required: false
    }
}, { timestamps: true })

module.exports = mongoose.model('category', categorySchema)