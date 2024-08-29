const UserService = require('../services/user.service')

class userController {
    createUser = async (req, res) => {
        const userData = req.body
        try {
            const userCreate = await UserService.createUser(userData)
            res.send(userCreate)
        } catch (error) {
            return res.status(400).json({ error: error.message })
        }
    }

    getAllUser = async (req, res) => {
        try {
            const getAllUser = await UserService.getAllUser()
            res.send(getAllUser)
        } catch (error) {
            return res.status(400).json({ error: error.message })
        }
    }

    updateUser = async (req, res) => {
        const userID = req.params.id
        const updateData = req.body
        try {
            const updatedUser = await UserService.updateUser(userID, updateData)
            res.send(updatedUser)
        } catch (error) {
            return res.status(400).json({ error: error.message })
        }
    }

    updatePass = async (req, res) => {
        const userID = req.params.id
        const oldPass = req.body.oldPass
        const newPass = req.body.newPass
        const cNewPass = req.body.cNewPass
        try {
            const updatedPass = await UserService.updatePass(userID, oldPass, newPass, cNewPass)
            res.send(updatedPass)
        } catch (error) {
            return res.status(400).json({ error: error.message })
        }

    }

    deleteUser = async (req, res) => {
        const userID = req.params.id
        try {
            const userDelete = await UserService.deleteUser(userID)
            res.send(userDelete)
        } catch (error) {
            return res.status(400).json({ error: error.message })
        }
    }

    getOneUser = async (req, res) => {
        const userID = req.params.id
        try {
            const detailUser = await UserService.getOneUser(userID)
            res.send(detailUser)
        } catch (error) {
            return res.status(400).json({ error: error.message })
        }
    }

}
module.exports = new userController()