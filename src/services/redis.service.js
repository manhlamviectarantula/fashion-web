const redisClient = require('../dbs/redis')

const getListProductWithCache = async (params = {}) => {
    const products = await redisClient.get('products');
    if (products) {
        return JSON.parse(products);
    }

    return null;
}

const setProductsCache = async (products) => {
    return redisClient.set('products', JSON.stringify(products));
}

const getUserLoginCache = async (params = {}) => {
    const user = await redisClient.get('user');
    if (user) {
        return JSON.parse(user);
    }

    return null;
}

const setUserLoginCache = async (user) => {
    return redisClient.set('user', JSON.stringify(user));
}

module.exports = {
    getListProductWithCache,
    setProductsCache,
    getUserLoginCache,
    setUserLoginCache
};