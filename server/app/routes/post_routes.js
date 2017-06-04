var Post = require('../models/post');
const passport = require('passport');

function authenticate() {
    return passport.authenticate('jwt', { session: false })
}

module.exports = function(app, db) {

    // get
    app.get('/post/list', (req, res) => {
        Post.find((err, items) => {
            if (err) {
                res.send({ 'error': "An error has occured" });
            } else {
                res.send(items);
            }
        });
    })

    app.get('/post/:id', (req, res) => {
        const id = req.params.id;
        const details = { '_id': id };
        Post.findOne(details, (err, item) => {
            if (err) {
                res.send({ 'error': "An error has occured" });
            } else {
                res.send(item);
            }
        });
    })

    // post
    app.post('/post', (req, res) => {
        var post = new Post();
        post.content = "";
        post.title = req.body.title;
        post.save(function(err) {
            if (err) {
                res.status('500').json({ 'error': "An error has occured" });
            } else {
                res.status('200').json(post);
            }
        });
    })

    // put
    app.put('/post/:id', authenticate(), (req, res) => {
        const id = req.params.id;
        const details = { '_id': id };
        const post = { content: req.body.content, title: req.body.title };

        Post.update(details, post, (err, item) => {
            if (err) {
                res.send({ 'error': "An error has occured" });
            } else {
                res.send(post);
            }
        });
    })

    // delete
    app.delete('/post/:id', (req, res) => {

        const id = req.params.id;
        const details = { '_id': id };

        Post.remove(details, (err, item) => {
            if (err) {
                res.status('500').send({ 'error': "An error has occured" });
            } else {
                res.json({ "message": 'Post ' + id + ' deleted!' });
            }
        });
    })

}