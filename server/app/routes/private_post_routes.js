var Post = require('../models/post');
const passport = require('passport');

function authenticate() {
    return passport.authenticate('jwt', { session: false })
}

module.exports = function(app, db) {

    // get
    app.get('/post/private/list', authenticate(), (req, res) => {
            Post.find({type: 'private'}, (err, items) => {
            if (err) {
                res.send({ 'error': "An error has occured" });
            } else {
                res.send(items);
            }
        });
    })

    app.get('/post/private/:id', authenticate(), (req, res) => {
        const id = req.params.id;
        const details = { '_id': id, type: 'private'};
        Post.findOne(details, (err, item) => {
            if (err) {
                res.send({ 'error': "An error has occured" });
            } else {
                res.send(item);
            }
        });
    })
}