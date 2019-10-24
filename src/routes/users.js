const router = require('express').Router();
const passport = require('passport');
const redis = require('../helpers/redis');

// User Controllers
const usersController = require('../controllers/usersController');

// Passport Authenticate
const isAuthenticate = passport.authenticate('jwt', { session: false });

router
	.get('/:id', redis.getCache, usersController.getUsers)
	.get('/:username', redis.getCache, usersController.getUsers)
	.get('/', redis.getCache, usersController.getUsers)
	.post('/login', usersController.loginUsers)
	.post('/register', usersController.registerUsers)
	.patch('/:id', isAuthenticate, usersController.updateUsers)
	.delete('/:id', isAuthenticate, usersController.deleteUsers);

module.exports = router;
