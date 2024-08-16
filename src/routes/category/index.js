const express = require('express')
const router = express.Router()
const categoryController = require('../../controllers/category.controller')

router.get('/get-all-category', categoryController.getAllCategory)
router.post('/create-category', categoryController.createCategory)


module.exports = router