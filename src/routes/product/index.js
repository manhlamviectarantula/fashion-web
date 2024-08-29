const express = require('express')
const router = express.Router()
const productController = require('../../controllers/product.controller')
const middleware = require('../../middleware/middleware')

const multer = require('multer');
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'src/uploads')
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname)
    }
})
const upload = multer({ storage: storage })

router.get('/get-all-product', productController.getAllProduct)
router.post('/create-products', productController.createProducts)

/**
 * @swagger
 * tags:
 *   - name: DANH SÁCH SẢN PHẨM
 *   - name: CHI TIẾT SẢN PHẨM
 *   - name: THÊM, SỬA, XÓA SẢN PHẨM
 */

/**
 * @swagger
 * /api/v2/product/get-product:
 *   get:
 *     tags:
 *       - DANH SÁCH SẢN PHẨM
 *     summary: Get list of products
 *     description: Retrieve a list of products based on various filters and sorting options.
 *     parameters:
 *       - in: query
 *         name: category
 *         schema:
 *           type: string
 *         description: The category of the products to retrieve.
 *         example: shirts
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           format: int32
 *         description: The page number for pagination.
 *         example: 1
 *       - in: query
 *         name: search
 *         schema:
 *           type: string
 *         description: The search term to filter products by name or description.
 *         example: Áo Polo
 *       - in: query
 *         name: sex
 *         schema:
 *           type: string
 *         description: Filter products based on the intended gender.
 *         example: nam
 *       - in: query
 *         name: brand
 *         schema:
 *           type: string
 *         description: The brand of the products to retrieve.
 *         example: uniqlo
 *       - in: query
 *         name: country
 *         schema:
 *           type: string
 *         description: The country of origin for the products.
 *         example: trung quốc
 *       - in: query
 *         name: sortField
 *         schema:
 *           type: string
 *         description: Field to sort by and the order (e.g., 'createdAt,desc').
 *         example: createdAt,desc
 *       - in: query
 *         name: priceFrom
 *         schema:
 *           type: string
 *         description: Minimum price of products to retrieve.
 *         example: 10000
 *       - in: query
 *         name: priceTo
 *         schema:
 *           type: string
 *         description: Maximum price of products to retrieve.
 *         example: 50000
 *     responses:
 *       200:
 *         description: Successfully retrieved the list of products.
 *       400:
 *         description: Bad request, invalid input data
 *       500:
 *         description: Internal server error
 */
router.get('/get-product', productController.getProduct)

/**
 * @swagger
 * /api/v2/product/get-one-product/{id}:
 *   get:
 *     tags:
 *       - CHI TIẾT SẢN PHẨM
 *     summary: Get details of a single product
 *     description: Retrieve details of a single product by its ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the product to retrieve.
 *         example: 66b3390f480c5a02a0ad69ec
 *     responses:
 *       200:
 *         description: Successfully retrieved the product details.
 *       400:
 *         description: Bad request, invalid input data
 *       404:
 *         description: Product not found
 *       500:
 *         description: Internal server error
 */
router.get('/get-one-product/:id', productController.getOneProduct)

/**
 * @swagger
 * /api/v2/product/create-product:
 *   post:
 *     tags:
 *       - THÊM, SỬA, XÓA SẢN PHẨM
 *     summary: Create a new product
 *     description: Create a new product with the provided details, including uploading images.
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: The name of the product.
 *                 example: Example Product
 *               categories:
 *                 type: array
 *                 items:
 *                   type: string
 *                 description: The categories of the product.
 *                 example: ["shirts"]
 *               sku:
 *                 type: string
 *                 description: The SKU (Stock Keeping Unit) of the product.
 *                 example: 123
 *               price:
 *                 type: number
 *                 format: float
 *                 description: The price of the product.
 *                 example: 10000
 *               thumbnail:
 *                 type: string
 *                 format: binary
 *                 description: The thumbnail image of the product.
 *               images:
 *                 type: array
 *                 items:
 *                   type: string
 *                   format: binary
 *                 description: The additional images of the product.
 *               brand:
 *                 type: string
 *                 description: The brand of the product.
 *                 example: uniqlo
 *               country:
 *                 type: string
 *                 description: The country of origin or manufacturing.
 *                 example: trung quốc
 *               sex:
 *                 type: string
 *                 description: The target gender for the product.
 *                 example: nam
 *               color:
 *                 type: array
 *                 items:
 *                   type: string
 *                 description: The available colors of the product.
 *                 example: ["WHITE", "GRAY", "BLACK"]
 *               size:
 *                 type: array
 *                 items:
 *                   type: string
 *                 description: The available sizes of the product.
 *                 example: ["M", "L", "XL", "XXL"]
 *               description:
 *                 type: string
 *                 description: A detailed description of the product.
 *                 example: A detailed description of the product.
 *               createdBy:
 *                 type: string
 *                 description: The name or ID of the person creating the product entry.
 *                 example: manh
 *     responses:
 *       201:
 *         description: Successfully created the product.
 *       400:
 *         description: Bad request, invalid input data.
 *       500:
 *         description: Internal server error.
 */
router.post('/create-product', middleware.verifyAdmin, upload.fields([
    { name: 'thumbnail', maxCount: 1 },
    { name: 'images', maxCount: 3 },
]), productController.createProduct)

/**
 * @swagger
 * /api/v2/product/update-product/{id}:
 *   put:
 *     tags:
 *       - THÊM, SỬA, XÓA SẢN PHẨM
 *     summary: Update an existing product
 *     description: Update the details of an existing product by its ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the product to update.
 *         example: 66b3390f480c5a02a0ad69ec
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: The name of the product.
 *                 example: Updated Product Name
 *               categories:
 *                 type: array
 *                 items:
 *                   type: string
 *                 description: The categories of the product.
 *                 example: ["shirts"]
 *               sku:
 *                 type: string
 *                 description: The SKU (Stock Keeping Unit) of the product.
 *                 example: 123
 *               price:
 *                 type: number
 *                 format: float
 *                 description: The price of the product.
 *                 example: 19.99
 *               thumbnail:
 *                 type: string
 *                 description: The URL of the product's thumbnail image.
 *                 example: https://image.uniqlo.com/UQ/ST3/vn/imagesgoods/455388/item/vngoods_56_455388.jpg?width=750
 *               images:
 *                 type: array
 *                 items:
 *                   type: string
 *                 description: The URLs of additional images of the product.
 *                 example: [
 *                   "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/455388/sub/goods_455388_sub14.jpg?width=750",
 *                   "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/455388/sub/goods_455388_sub17.jpg?width=750",
 *                   "https://image.uniqlo.com/UQ/ST3/vn/imagesgoods/455388/sub/vngoods_455388_sub23.jpg?width=750"
 *                 ]
 *               brand:
 *                 type: string
 *                 description: The brand of the product.
 *                 example: uniqlo
 *               country:
 *                 type: string
 *                 description: The country of origin or manufacturing.
 *                 example: trung quốc
 *               sex:
 *                 type: string
 *                 description: The target gender for the product.
 *                 example: nam
 *               color:
 *                 type: array
 *                 items:
 *                   type: string
 *                 description: The available colors of the product.
 *                 example: ["WHITE", "GRAY", "BLACK"]
 *               size:
 *                 type: array
 *                 items:
 *                   type: string
 *                 description: The available sizes of the product.
 *                 example: ["M", "L", "XL", "XXL"]
 *               description:
 *                 type: string
 *                 description: A detailed description of the product.
 *                 example: A detailed description of the product.
 *               updatedBy:
 *                 type: string
 *                 description: The name of the person updating the product
 *                 example: manh
 *     responses:
 *       200:
 *         description: Successfully updated the product.
 *       400:
 *         description: Bad request, invalid input data
 *       404:
 *         description: Product not found
 *       500:
 *         description: Internal server error
 */
router.put('/update-product/:id', middleware.verifyAdmin, productController.updateProduct)

/**
 * @swagger
 * /api/v2/product/delete-product/{id}:
 *   delete:
 *     tags:
 *       - THÊM, SỬA, XÓA SẢN PHẨM
 *     summary: Delete an existing product
 *     description: Deletes a product by its ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the product to delete.
 *         example: 66b3390f480c5a02a0ad69ec
 *     security:
 *       - bearerAuth: [] 
 *     responses:
 *       200:
 *         description: Successfully deleted the product.
 *       400:
 *         description: Bad request, invalid input data.
 *       404:
 *         description: Product not found.
 *       500:
 *         description: Internal server error.
 */
router.delete('/delete-product/:id', middleware.verifyAdmin, productController.deleteProduct)

module.exports = router