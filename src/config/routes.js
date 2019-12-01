const router = require('express').Router()

router
	// Job Routes
	.use('/jobs', require('../routes/jobs'))
	// Company Routes
	.use('/companies', require('../routes/companies'))
	// Category Routes
	.use('/categories', require('../routes/categories'))
	// User Routes
	.use('/users', require('../routes/users'))

module.exports = router
