const express = require('express')
const router = express.Router()

router.use('/api/v0/auth', require('./auth/index'))
router.use('/api/v1/user', require('./user/index'))
router.use('/api/v2/product', require('./product/index'))
router.use('/api/v3/category', require('./category/index'))
router.use('/api/v4/order', require('./order/index'))

module.exports = router