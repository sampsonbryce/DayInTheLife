module.exports = function(app, passport) {

    // signup
    app.post('/signup', function(req, res, next) {
        console.log('req', req.body);
        passport.authenticate('local-signup', function(err, user, info) {
            console.log('info', info, user)
            if (err) { console.log('err', err); return next(err); }
            if (!user) {
                console.log('returning user exists json');
                res.status(401);
                res.setHeader('Content-Type', 'application/json');
                return res.send(JSON.stringify({ message: info.registerMessage }, null, 3));
            }
            req.logIn(user, function(err) {
                if (err) { console.log('error', err); return next(err); }

                console.log('returing failed to register json');
                res.status(200);
                res.setHeader('Content-Type', 'application/json');
                return res.send(JSON.stringify({ message: "User Registered" }, null, 3));
            });
        })(req, res, next);
    });

    // login
    app.post('/login', function(req, res, next) {
        passport.authenticate('local-login', function(err, user, info) {
            console.log('info', info)
            if (err) { return next(err); }
            if (!user) {
                console.log('returing user not found json');
                res.status(401);
                res.setHeader('Content-Type', 'application/json');
                return res.send(JSON.stringify({ message: info.loginMessage }, null, 3));
            }
            req.logIn(user, function(err) {
                if (err) { return next(err); }
                console.log('returing failed to login json');
                res.status(200);
                res.setHeader('Content-Type', 'application/json');
                return res.send(JSON.stringify({ message: "Logged in" }, null, 3));
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