const router = require('express').Router();
const redis = require('../helpers/redis');

const jobsController = require('../controllers/jobsController');

router
	.get('/:id', redis.getCache, jobsController.getJobs)
	.get('/', redis.getCache, jobsController.getJobs)
	.post('/', jobsController.addJobs)
	.patch('/:id', jobsController.updateJobs)
	.delete('/:id', jobsController.deleteJobs);

module.exports = router;
