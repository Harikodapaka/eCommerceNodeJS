var mongoose = require('mongoose');
var shortID = require('shortid');
var Schema = mongoose.Schema;
// create a schema
var commentsSchema = new Schema({
    id: {
        'type': String,
        'default': shortID.generate
    },
    userID: String,
    productID: String,
    commentDesctiption: String,
    rating: int
}
);

// the schema is useless so far
// we need to create a model using it
var Comments = mongoose.model('Comments', commentsSchema);

// make this available to our users in our Node applications
module.exports = Comments;