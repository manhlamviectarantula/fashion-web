const userModel = require('../models/user.model')

class UserService {
    static async createUser(userdata) {
        try {
            const user = new userModel(userdata)
            return await user.save()
        } catch (error) {
            throw error;
        }
    }

    static async getAllUser() {
        try {
            return await userModel.find()
        } catch (error) {
            throw error;
        }
    }

    static async updateUser(userID, updateData) {
        try {
            const user = await userModel.findByIdAndUpdate(userID, updateData, { new: true })
            if (!user) {
                throw new Error('Người dùng không tồn tại')
            }
            return user
        } catch (error) {
            throw error //dùng throw để hiển thị lỗi nếu có sự cố xảy ra trong quá trình thực thi hàm
        }
    }

    static async deleteUser(userID) {
        try{
            const userDeleted = await userModel.findByIdAndDelete(userID)
            if (!userDeleted) {
                throw new Error('Người dùng không tồn tại')
            }
            return userDeleted
        }catch(error){
            throw error
        }
    }

    static async getOneUser(userID) {
        try{
            const user = await userModel.findById(userID)
            if (!user) {
                throw new Error('Người dùng không tồn tại')
            }
            return user
        }catch(error){
            throw error
        }
    }
}

module.exports = UserService