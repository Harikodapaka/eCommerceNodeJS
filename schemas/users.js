var mongoose = require('mongoose');
var shortID = require('shortid');
var Schema = mongoose.Schema;
// create a schema
var userSchema = new Schema({
    id: {
        'type': String,
        'default': shortID.generate
    },
    email: String,
    password: String,
    description: String,
    address: String,
    
}
);

// the schema is useless so far
// we need to create a model using it
var User = mongoose.model('User', userSchema);

// make this available to our users in our Node applications
module.exports = User;