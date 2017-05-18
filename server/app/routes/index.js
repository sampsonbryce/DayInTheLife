const postRoutes = require('./post_routes');
const authRoutes = require('./auth_routes');

module.exports = function(app, passport){
    postRoutes(app, passport);
    authRoutes(app, passport);
};