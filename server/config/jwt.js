const passportJWT = require("passport-jwt");

var ExtractJwt = passportJWT.ExtractJwt;

var jwtOptions = {}
jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeader();
jwtOptions.secretOrKey = 'tasmanianDevil';


module.exports = jwtOptions;