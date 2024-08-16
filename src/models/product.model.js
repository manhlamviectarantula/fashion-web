const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'name is required']
    },
    categories: {
        type: [String],
        required: [true, 'category is required']
    },
    sku: {
        type: String,
        required: [true, 'sku is required'],
        unique: true
    },
    price: {
        type: Number,
        required: [true, 'price is required'],
    },
    thumbnail: {
        type: String,
        required: [true, 'thumbnail is required'],
    },
    images: {
        type: [String],
        required: false,
        default: []
    },
    brand: {
        type: String,
        required: [true, 'brand is required']
    },
    country: {
        type: String,
        required: [true, 'country is required']
    },
    sex: {
        type: String,
        required: [true, 'sex is required']
    },
    color: {
        type: [String],
        required: [true, 'color is required']
    },
    size: {
        type: [String],
        required: false,
        default: []
    },
    description: {
        type: String,
        required: [true, 'description is required']
    },
    status: {
        type: Number,
        required: false,
        default: 1
    },
    feedback: {
        type: String,
        required: false
    },
    rating: {
        type: Number,
        required: false,
        default: 0
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

module.exports = mongoose.model('product', productSchema)