var mongoose = require('mongoose');

// define the schema for our user model
var postSchema = mongoose.Schema({
    title: String,
    subtitle: String,
    content: String,
    type: { type: String, enum: ['private', 'public'], default: 'public'},
    updated: { type: Date, default: function() { return new Date().getTime() } },
    created: { type: Date, default: function() { return new Date().getTime() } }
});

module.exports = mongoose.model('Post', postSchema);