const mongoose = require('mongoose')

class MongoDB {
    constructor() {
        this._connect()
    }

    _connect() {
        let URL = process.env.DATABASE_DEV_URL
            || 'mongodb+srv://cknguyenmanh:admin@cluster0.coj0a6e.mongodb.net/final-be-dev';
        const ENV = process.env.NODE_ENV || 'development';
        if (ENV === 'production') {
            URL = process.env.DATABASE_PROD_URL;
        }
        console.log(ENV)
        mongoose.connect(URL, { useNewUrlParser: true })
            .then(() => {
                console.log('Ket noi thanh cong');
            })
            .catch(err => {
                console.log('Ket noi that bai')
            })
    }
}

module.exports = new MongoDB();