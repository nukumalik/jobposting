const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
require('dotenv/config')

// Models
const db = require('../config/database');

const opts = {
	jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
	secretOrKey: process.env.SECRET_OR_KEY
};

module.exports = passport => {
	passport.use(
		new JwtStrategy(opts, (jwt_payload, done) => {
			db.query(`SELECT * FROM users WHERE id = '${jwt_payload.id}'`, (err, result) => {
				if (!err) {
					return done(null, result);
				} else {
					return done(null, false);
				}
			});
		})
	);
};
