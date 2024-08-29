const express = require('express')
const router = express.Router()
const userController = require('../../controllers/user.controller')
const middleware = require('../../middleware/middleware')

// router.get('/get-all-user', middleware.verifyAdmin, userController.getAllUser)

// deploy test
router.get('/get-all-user', userController.getAllUser)

// router.get('/get-all-user', userController.getAllUser)

router.post('/create-user', middleware.verifyAdmin, userController.createUser)
router.put('/update-user/:id', middleware.verifyTokenAndAdmin, userController.updateUser)
router.put('/update-pw/:id', middleware.verifyTokenAndAdmin, userController.updatePass)
router.delete('/delete-user/:id', middleware.verifyAdmin, userController.deleteUser)
router.get('/get-one-user/:id', middleware.verifyTokenAndAdmin, userController.getOneUser)

module.exports = router