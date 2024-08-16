const orderModel = require('../models/order.model')

class OrderService {
    
    static async createOrder(orderData) {
        try {
            const order = new orderModel(orderData)
            return await order.save()
        } catch (error) {
            throw error;
        }
    }
}

module.exports = OrderService