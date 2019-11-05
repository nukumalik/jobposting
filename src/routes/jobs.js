const router = require('express').Router();
const redis = require('../helpers/redis');
const validation = require('../helpers/validation');

// Controler
const jobsController = require('../controllers/jobsController');

router
	.get('/:id', jobsController.getJobs)
	.get('/', jobsController.getJobs)
	.post('/', validation.addJobs, jobsController.addJobs)
	.patch('/:id', jobsController.updateJobs)
	.delete('/:id', jobsController.deleteJobs);

module.exports = router;
