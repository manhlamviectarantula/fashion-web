const CategoryService = require('../services/category.service')

class categoryController {

    getAllCategory = async (req, res) => {
        try {
            const allCategory = await CategoryService.getAllCategory()
            res.send(allCategory)
        } catch (error) {
            return res.status(400).json({ error: error.message })
        }
    }
    
    createCategory = async (req, res) => {
        const categoryData = req.body
        try {
            const categoryCreate = await CategoryService.createCategory(categoryData)
            res.send(categoryCreate)
        } catch (error) {
            return res.status(400).json({ error: error.message })
        }
    }
}

module.exports = new categoryController()