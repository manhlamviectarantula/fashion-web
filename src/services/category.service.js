const categoryModel = require('../models/category.model')

class CategoryService {
    static async getAllCategory() {
        try {
            const allCategory = await categoryModel.find()
            return allCategory
        } catch (error) {
            throw error
        }
    }
    
    static async createCategory(categoryData) {
        try {
            const category = new categoryModel(categoryData)
            return await category.save()
        } catch (error) {
            throw error;
        }
    }
}

module.exports = CategoryService