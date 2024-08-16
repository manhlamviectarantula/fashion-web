const express = require('express')
const router = express.Router()
const authController = require('../../controllers/auth.controller')

/**
 * @swagger
 * components:
 *   schemas:
 *     User Register:
 *       type: object
 *       required:
 *         - name
 *         - email
 *         - password
 *         - phone
 *         - address
 *       properties:
 *         name:
 *           type: string
 *           description: The name of the user
 *         email:
 *           type: string
 *           description: The email of the user
 *         password:
 *           type: string
 *           description: The password of the account
 *         phone:
 *           type: string
 *           description: The phone number of the user
 *         address:
 *           type: string
 *           description: The address of the user
 *       example:
 *         _id: 60b8d295f1c8d2d5c7eab9e5
 *         name: John Doe
 *         email: john.doe@gmail.com
 *         password: $2b$10$olu1qXv8tgMrgBlq7isaz.JZWTWxUAsVdkN2rzB/1tDlzTZgxMRZi
 *         phone: +1234567890
 *         address: 123 Main St, Anytown, USA
 */

/**
 * @swagger
 * tags:
 *   - name: ĐĂNG NHẬP | ĐĂNG KÝ
 */

/**
 * @swagger
 * /api/v0/auth/register-user:
 *   post:
 *     tags:
 *       - ĐĂNG NHẬP | ĐĂNG KÝ
 *     summary: Register
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - email
 *               - password
 *               - cPassword
 *               - phone
 *               - address
 *             properties:
 *               name:
 *                 type: string
 *                 description: The full name of the user.
 *                 example: Manh123
 *               email:
 *                 type: string
 *                 description: The email address of the user.
 *                 example: manh123@gmail.com
 *               password:
 *                 type: string
 *                 description: The password for the user account.
 *                 example: manh123
 *               cPassword:
 *                 type: string
 *                 description: Confirmation of the password.
 *                 example: manh123
 *               phone:
 *                 type: string
 *                 description: The phone number of the user.
 *                 example: +1234567890
 *               address:
 *                 type: string
 *                 description: The address of the user.
 *                 example: 123 Main St, Anytown, USA
 *     responses:
 *       200:
 *         description: User successfully registered
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User Register'
 *       400:
 *         description: Bad request, invalid input data
 *       500:
 *         description: Internal server error
 */
router.post('/register-user', authController.registerUser)

/**
 * @swagger
 * /api/v0/auth/login-user:
 *   post:
 *     tags:
 *       - ĐĂNG NHẬP | ĐĂNG KÝ
 *     summary: Login
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *                 description: The email address of the user.
 *                 example: john.doe@gmail.com
 *               password:
 *                 type: string
 *                 description: The password for the user account.
 *                 example: john123
 *     responses:
 *       200:
 *         description: User successfully logged in
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                   description: The id of the account.
 *                   example: 6676594f345f42a447633d04
 *                 name:
 *                   type: string
 *                   description: The full name of the user.
 *                   example: Nguyễn Hữu Mạnh
 *                 email:
 *                   type: string
 *                   description: The email address of the user.
 *                   example: manh123@gmail.com
 *                 phone:
 *                   type: string
 *                   description: The phone number of the user.
 *                   example: 0383054321
 *                 address:
 *                   type: string
 *                   description: The address of the user.
 *                   example: 123 Main St, Anytown, USA
 *                 status:
 *                   type: number
 *                   description: The status of the account.
 *                   example: 1
 *                 isAdmin:
 *                   type: boolean
 *                   description: Indicates if the user has admin privileges.
 *                   example: true
 *                 createdAt:
 *                   type: string
 *                   description: The date and time when the user was created.
 *                   example: 2024-06-22T04:55:43.675+00:00
 *                 updatedAt:
 *                   type: string
 *                   description: The date and time when the user was last updated.
 *                   example: 2024-06-22T04:55:43.675+00:00
 *                 __v:
 *                   type: integer
 *                   description: The version number of the user document.
 *                   example: 0
 *                 accessToken:
 *                   type: string
 *                   description: The authentication token for the user.
 *                   example: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2NzY1OTRmMzQ1ZjQyYTQ0NzYzM2QwNCIsImFkbWluIjp0cnVlLCJpYXQiOjE3MjI5NjE4MjEsImV4cCI6MTcyMjk2OTAyMX0.bnqRIVifNUqLK9f9DRfCROK6Fojule4QTnnlhJ7aUI0
 *       400:
 *         description: Bad request, invalid input data
 *       500:
 *         description: Internal server error
 */
router.post('/login-user', authController.loginUser)

router.post('/logout-user', authController.logoutUser)

module.exports = router