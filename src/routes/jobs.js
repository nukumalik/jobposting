const router = require('express').Router()
// const redis = require('../helpers/redis')
const validation = require('../helpers/validation')

// Controler
const jobs = require('../controllers/jobs')

router
	.get('/:id', jobs.get)
	.get('/', jobs.get)
	.post('/', validation.addJobs, jobs.add)
	.patch('/:id', jobs.update)
	.delete('/:id', jobs.remove)

module.exports = router
