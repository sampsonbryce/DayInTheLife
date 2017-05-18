const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const db = require('./config/db');

// framework
const app = express();

// port
const port = 8000;

var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*'); // TODO: In production change to my sites
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    next();
}

// include dependencies
app.use(allowCrossDomain);
app.use(bodyParser.urlencoded({ extended: true }));

MongoClient.connect(db.url, (err, database) => {
    // error
    if (err) return console.log(err)

    // include routes
    require('./app/routes')(app, database);

    // listen
    app.listen(port, () => {
        console.log('We are live on ' + port);
    });               
})