var mongoose = require('mongoose');
var shortID = require('shortid');
var Schema = mongoose.Schema;
// create a schema
var productSchema = new Schema({
    id: {
        'type': String,
        'default': shortID.generate
    },
    image: String,
    price: String,
    title: String,
    description: String
}
);

// the schema is useless so far
// we need to create a model using it
var Product = mongoose.model('Product', productSchema);

// make this available to our users in our Node applications
module.exports = Product;