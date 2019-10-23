const router = require('express').Router();
const passport = require('passport');

// User Controllers
const usersController = require('../controllers/usersController');

// Passport Authenticate
const isAuthenticate = passport.authenticate('jwt', { session: false });

router
	.get('/:id', usersController.getUsers)
	.get('/:username', usersController.getUsers)
	.get('/', usersController.getUsers)
	.post('/login', usersController.loginUsers)
	.post('/register', usersController.registerUsers)
	.patch('/:id', isAuthenticate, usersController.updateUsers)
	.delete('/:id', isAuthenticate, usersController.deleteUsers);

module.exports = router;
