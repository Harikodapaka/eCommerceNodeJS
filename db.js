//database
const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');
const connectionString = 'mongodb://localhost:27017/mydb';
const connectionOptions = { useNewUrlParser: true };
mongoose.connect(connectionString, connectionOptions);
var localDB = mongoose.connection;
var productModel = require('./schemas/product');
var productsList = require('./public/data/products');
module.exports.conn = localDB;

module.exports.init = async function () {
    try {
        localDB.on('error', console.error.bind(console, 'connection error:'));
        localDB.once('open', async function () {
            console.log('Connected to mongo server.');
            let count = await productModel.estimatedDocumentCount().exec();
            console.log('Products count: ' + count);
            if (count === 0) {
                // Add some entries so it's not empty...
                productsList.forEach(async (product) =>{
                    let createResponse = await productModel.create(product);
                });
                console.log('Populated Database');
            }
        });
    } catch (err) {
        console.log(err);
    }
}