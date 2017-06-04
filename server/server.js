const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const db = require('./config/db');
const passport = require('passport');
const morgan = require('morgan');
const flash = require('connect-flash');
const jwt = require('jsonwebtoken');

// framework
const app = express();

// port
const port = 8000;

// database
mongoose.connect(db.url);

// config passport
require('./config/passport')(passport);

var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*'); // TODO: In production change to my sites
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type,Authorization');

    next();
}

var log = function(req, res, next) {
    console.log('LOG');
    next();
}

// include Middleware
app.use(morgan('dev'));
app.use(allowCrossDomain);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(passport.initialize());
app.use(flash());


// include routes
require('./app/routes')(app, passport);

// listen
app.listen(port, () => {
    console.log('We are live on ' + port);
});