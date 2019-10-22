const router = require('express').Router();

const usersController = require('../controllers/usersController');

router
	.get('/', usersController.getUsers)
	.post('/login', usersController.loginUsers)
	.post('/register', usersController.registerUsers)
	.patch('/:id', usersController.updateUsers)
	.delete('/:id', usersController.deleteUsers);

module.exports = router;
