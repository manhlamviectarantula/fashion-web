const OrderService = require('../services/order.service')

class orderController {
    
    createOrder = async (req, res) => {
        const orderData = req.body
        try {
            const orderCreate = await OrderService.createOrder(orderData)
            res.send(orderCreate)
        } catch (error) {
            return res.status(400).json({ error: error.message })
        }
    }
}

module.exports = new orderController()