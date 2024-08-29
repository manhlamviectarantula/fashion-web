const userModel = require('../models/user.model')
const bcrypt = require('bcrypt')

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
            const { email, phone } = updateData;
            const existingUser = await userModel.findOne({
                $or: [
                    { email: email },
                    { phone: phone }
                ],
                _id: { $ne: userID } // Exclude the current user from the search
            });
            if (existingUser) {
                throw new Error('Email hoặc số điện thoại đã tồn tại');
            }

            const user = await userModel.findByIdAndUpdate(userID, updateData, { new: true })

            if (!user) {
                throw new Error('Người dùng không tồn tại')
            }
            return user
        } catch (error) {
            throw error //dùng throw để hiển thị lỗi nếu có sự cố xảy ra trong quá trình thực thi hàm
        }
    }

    static async updatePass(userID, oldPass, newPass, cNewPass) {
        try {
            if (!oldPass || !newPass || !cNewPass) {
                throw new Error("Nhập thiếu thông tin")
            }

            if (newPass != cNewPass) {
                throw new Error("Nhập lại mật khẩu mới chưa đúng")
            }

            const user = await userModel.findById(userID);

            const isMatch = await bcrypt.compare(oldPass, user.password);
            if (!isMatch) {
                throw new Error("Sai mật khẩu cũ");
            }

            const salt = await bcrypt.genSalt(10)
            const hashedPassword = await bcrypt.hash(newPass, salt);

            user.password = hashedPassword;

            return await user.save();
        } catch (error) {
            throw error
        }
    }

    static async deleteUser(userID) {
        try {
            const userDeleted = await userModel.findByIdAndDelete(userID)
            if (!userDeleted) {
                throw new Error('Người dùng không tồn tại')
            }
            return userDeleted
        } catch (error) {
            throw error
        }
    }

    static async getOneUser(userID) {
        try {
            const user = await userModel.findById(userID)
            if (!user) {
                throw new Error('Người dùng không tồn tại')
            }
            return user
        } catch (error) {
            throw error
        }
    }
}

module.exports = UserService