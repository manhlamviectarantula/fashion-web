const mongoose = require('mongoose')

const orderSchema = mongoose.Schema({
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
        required: [true, 'Customer is required']
    },
    items: [{
        productID: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'products',
            required: [true, 'productID is required']
        },
        quantity: {
            type: Number,
            required: [true, 'Quantity is required']
        },
        price: {
            type: Number,
            required: [true, 'Price is required']
        }
    }],
    shippingAddress: {
        type: String,
        required: [true, 'Shipping address is required']
    },
    totalAmount: {
        type: Number,
        required: [true, 'Total amount is required']
    },
    status: {
        type: Number,
        default: 1
    },
}, { timestamps: true })

module.exports = mongoose.model('order', orderSchema)