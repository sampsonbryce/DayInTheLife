module.exports = function (app, passport) {
    app.post('/signup', passport.authenticate('local-signup', { failureFlash: true }));
    app.post('/login', function (req, res, next) {
        passport.authenticate('local-login', function (err, user, info) {
            console.log('info', info)
            if (err) { return next(err); }
            if (!user) { 
                console.log('returing user not found json');
                res.status(401);
                res.setHeader('Content-Type', 'application/json');
                return res.send(JSON.stringify({ message: info.loginMessage }, null, 3));
            }
            req.logIn(user, function (err) {
                if (err) { return next(err); }
                console.log('returing failed to login json');
                res.status(401);
                res.setHeader('Content-Type', 'application/json');
                return res.send(JSON.stringify({ message: "Failed to log in" }, null, 3));
            });
        })(req, res, next);
    });

    function isLoggedIn(req, res, next) {
        console.log('is logged in?');
        // if user is authenticated in the session, carry on 
        if (req.isAuthenticated())
            return next();

        // if they aren't redirect them to the home page
        res.redirect('/');
    }
}