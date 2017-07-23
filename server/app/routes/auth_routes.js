var jwt = require('jsonwebtoken');
var jwtOptions = require('../../config/jwt');

module.exports = function(app, passport) {

    // signup
    // app.post('/signup', function(req, res, next) {
    //     console.log('req', req.body);
    //     passport.authenticate('local-signup', function(err, user, info) {
    //         console.log('info', info, user)
    //         if (err) { console.log('err', err); return next(err); }
    //         if (!user) {
    //             console.log('returning user exists json');
    //             res.status(401).json({ message: info.registerMessage });
    //         } else {
    //             console.log('returing failed to register json');
    //             var payload = { id: user._id };
    //             var token = jwt.sign(payload, jwtOptions.secretOrKey);
    //             res.json({ message: "Registered", token: token });
    //         }
    //     })(req, res, next);
    // });

    // login
    app.post('/login', function(req, res, next) {
        passport.authenticate('local-login', function(err, user, info) {
            console.log('info', info)
            if (err) { return next(err); }
            if (!user) {
                console.log('returing user not found json');
                res.status(401).json({ message: info.loginMessage });
            } else {
                console.log('user exists, returing jwt', user);
                var payload = { id: user._id };
                var token = jwt.sign(payload, jwtOptions.secretOrKey, {expiresIn: '1hr'});
                res.json({ message: "Logged in", token: token });
            }
        })(req, res, next);
    });
}