const jwt = require('jsonwebtoken');

class middleware {
    // Static method for user authentication
    static verifyToken(req, res, next) {
        const token = req.headers.authorization;
        if (token) {
            const accessToken = token.split(" ")[1];
            jwt.verify(accessToken, process.env.JWT_ACCESS_KEY, (err, user) => {
                if (err) {
                    console.log(token)
                    return res.status(403).json("Token is not valid");
                }
                req.user = user;
                next();
            });
        } else {
            return res.status(401).json("You are not authenticated");
        }
    }

    // Static method for user and admin authentication
    static verifyTokenAndAdmin(req, res, next) {
        middleware.verifyToken(req, res, () => {
            if (req.user.id === req.params.id || req.user.admin) {
                next();
            } else {
                return res.status(403).json("You are not allowed");
            }
        });
    }

    static verifyAdmin(req, res, next) {
        middleware.verifyToken(req, res, () => {
            if (req.user.admin) {
                next()
            } else {
                return res.status(401).json("You are not allowed");
            }
        })
    }
}

module.exports = middleware;
