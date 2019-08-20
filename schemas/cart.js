var mongoose = require('mongoose');
var shortID = require('shortid');
var Schema = mongoose.Schema;
// create a schema
var cartSchema = new Schema({
    id: {
        'type': String,
        'default': shortID.generate
    },
    userID: String,
    productID: String,
    quantity: String
}
);

// the schema is useless so far
// we need to create a model using it
var Cart = mongoose.model('Cart', cartSchema);

// make this available to our users in our Node applications
module.exports = Cart;