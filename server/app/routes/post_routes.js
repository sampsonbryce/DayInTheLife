var ObjectID = require('mongodb').ObjectID;

module.exports = function(app, db){

    // get

    app.get('/post/list', (req, res) => {
        db.collection('posts').find({}).toArray((err, items) => {
            if(err){
                res.send({'error': "An error has occured"});
            }else{
                res.send(items);
            }
        });
    })

    app.get('/post/:id', (req, res) => {
        const id = req.params.id;
        const details = { '_id': new ObjectID(id)};
        db.collection('posts').find(details, (err, item) => {
            if(err){
                res.send({'error': "An error has occured"});
            }else{
                res.send(item);
            }
        });
    })

    


    // post
    app.post('/post', (req, res) => {
        const post = { content: req.body.content, title: req.body.title };
        db.collection('posts').insert(details, (err, item) => {
            if(err){
                res.send({'error': "An error has occured"});
            }else{
                res.send(result.ops[0]);
            }
        });
    })

    // put
    app.put('/post/:id', (req, res) => {

        const id = req.params.id;
        const details = { '_id': new ObjectID(id)};
        const post = { content: req.body.content, title: req.body.title };

        db.collection('posts').update(details, post, (err, item) => {
            if(err){
                res.send({'error': "An error has occured"});
            }else{
                res.send(post);
            }
        });
    })

    // delete
    app.delete('/post/:id', (req, res) => {

        const id = req.params.id;
        const details = { '_id': new ObjectID(id)};

        db.collection('posts').remove(details, (err, item) => {
            if(err){
                res.send({'error': "An error has occured"});
            }else{
                res.send('Post ' + id + ' deleted!');
            }
        });
    })

}