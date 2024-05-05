const mongoose = require('mongoose');
const link = 'mongodb+srv://admin:qwerty123@cluster0.yryt18d.mongodb.net/';

const connectDb = () => {
    return mongoose.connect(link, {useNewUrlParser: true})
}

module.exports = connectDb;
