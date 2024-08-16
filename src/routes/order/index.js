const express = require('express')
const router = express.Router()
const orderController = require('../../controllers/order.controller')

// router.get('/get-all-category', categoryController.getAllCategory)
router.post('/create-order', orderController.createOrder)

module.exports = router