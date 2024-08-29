const productModel = require('../models/product.model')

class ProductService {
    static async createProduct(productData) {
        try {
            const product = new productModel(productData)
            return await product.save()
        } catch (error) {
            throw error;
        }
    }

    static async createProducts(productsData) {
        try {
            const createdProducts = await Promise.all(productsData.map(async (productData) => {
                const product = new productModel(productData);
                return await product.save();
            }));
            return createdProducts;
        } catch (error) {
            throw error;
        }
    }  

    static async getAllProduct() {
        try {
            const allProduct = await productModel.find()
            return allProduct
        } catch (error) {
            throw error
        }
    }

    static async getProduct(page, limit, qCategory, search, sex, brand, country, sortField, priceFrom, priceTo) {
        try {
            sex = sex ? [sex.toLowerCase()] : ["nam", "nữ", "unisex"];
            // brand = brand ? [brand.toLowerCase()] : ["uniqlo", "versace", "jeansx", "shirttt", "dry-ex"];
            brand = brand ? brand : ["Uniqlo", "Versace", "Jeansx", "ShirtTT", "DRY-EX"]
            country = country ? [country.toLowerCase()] : ["trung quốc", "mỹ", "úc"];

            const sort = sortField.split(",")
            let sortBy = {}
            if (sort[1]) {
                sortBy[sort[0]] = sort[1]
            } else {
                sortBy[sort[0]] = "asc"
            }

            const query = {
                $or: [
                    { name: { $regex: search, $options: "i" } },
                    { sku: { $regex: search, $options: "i" } }
                ],
                categories: {
                    $in: [qCategory],
                },
                sex:
                    { $in: sex },
                brand:
                    { $in: brand },
                country:
                    { $in: country }
            };

            if (priceFrom) {
                query.price = { ...query.price, $gte: priceFrom };
            }
            if (priceTo) {
                query.price = { ...query.price, $lte: priceTo };
            }

            const allProduct = await productModel.find(query)
                .skip(page * limit)
                .limit(limit)
                .sort(sortBy)

            const total = await productModel.countDocuments(query);
            const totalPages = Math.ceil(total / limit);

            const response = {
                total,
                totalPages,
                allProduct
            }

            return response
        } catch (error) {
            throw error
        }
    }

    static async updateProduct(productID, updateData) {
        try {
            const updatedBy = updateData.updatedBy
            if (!updatedBy) {
                throw new Error('Thiếu thông tin người sửa');
            }
            const product = await productModel.findByIdAndUpdate(
                productID,
                { ...updateData, updatedBy: updatedBy, updatedAt: Date.now() },
                { new: true }
            );
            if (!product) {
                throw new Error('Sản phẩm không tồn tại');
            }
            return product;
        } catch (error) {
            throw error;
        }
    }    

    static async deleteProduct(productID) {
        try {
            const product = await productModel.findByIdAndDelete(productID)
            if (!product) {
                throw new Error('Sản phẩm không tồn tại')
            }
            return product
        } catch (error) {
            throw error
        }
    }

    static async getOneProduct(productID) {
        try {
            const product = await productModel.findById(productID)
            if (!product) {
                throw new Error('Sản phẩm không tồn tại')
            }
            return product
        } catch (error) {
            throw error
        }
    }
}

module.exports = ProductService