var mongoose = require('mongoose');

// define the schema for our user model
var postSchema = mongoose.Schema({
        title: String,
        content: String,
});

module.exports = mongoose.model('Post', postSchema);