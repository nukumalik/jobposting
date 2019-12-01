const router = require('express').Router()
const passport = require('passport')
const redis = require('../helpers/redis')
const validation = require('../helpers/validation')

// User Controllers
const users = require('../controllers/users')

// Passport Authenticate
const isAuthenticate = passport.authenticate('jwt', { session: false })

router
	.get('/:id', redis.getCache, users.get)
	.get('/:username', redis.getCache, users.get)
	.get('/', redis.getCache, users.get)
	.post('/login', validation.userLogin, users.login)
	.post('/register', users.register)
	.patch('/:id', isAuthenticate, users.update)
	.delete('/:id', isAuthenticate, users.remove)

module.exports = router
