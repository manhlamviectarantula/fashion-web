const AuthService = require('../services/auth.service')
const { getUserLoginCache, setUserLoginCache } = require('../services/redis.service')

class authController {
    registerUser = async (req, res) => {
        const { name, email, password, cPassword, phone, address } = req.body
        try {
            const userResigtered = await AuthService.registerUser(name, email, password, cPassword, phone, address)
            res.send(userResigtered)
        } catch (error) {
            return res.status(400).json({ error: error.message })
        }
    }

    loginUser = async (req, res) => {
        const { email, password } = req.body
        try {
            // const userCache = await getUserLoginCache()
            // if (userCache) {
            //     return res.send(userCache)
            // }

            const result = await AuthService.loginUser(email, password, res)
            // setUserLoginCache(result)
            return res.send(result)
        } catch (error) {
            return res.status(400).json({ error: error.message })
        }
    }

    logoutUser = async (req, res) => {
        console.log('req.cookies.refreshToken', req.cookies.refreshToken)
        try {
            res.clearCookie('refreshToken')
            return res.status(200).json({
                status: 'OK',
                message: 'Logout Success'
            });
        } catch (error) {
            return res.status(400).json({ error: error.message })
        }
    }
}
module.exports = new authController()