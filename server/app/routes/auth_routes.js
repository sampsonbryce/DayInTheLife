module.exports = function(app, passport){
    app.post('/signup', passport.authenticate('local-signup', {failureFlash: true}));
    app.post('/login', passport.authenticate('local-login', {failureFlash: true}));

    function isLoggedIn(req, res, next) {
        console.log('is logged in?');
        // if user is authenticated in the session, carry on 
        if (req.isAuthenticated())
            return next();

        // if they aren't redirect them to the home page
        res.redirect('/');
    }    
}