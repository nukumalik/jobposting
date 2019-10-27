const router = require('express').Router();
const upload = require('../helpers/multer');
const redis = require('../helpers/redis');
const validation = require('../helpers/validation');

// Controller
const companiesController = require('../controllers/companiesController');

router
	.get('/:id', redis.getCache, companiesController.getCompanies)
	.get('/', redis.getCache, companiesController.getCompanies)
	.post('/', validation.addCompanies, upload, companiesController.addCompanies)
	.patch('/:id', companiesController.updateCompanies)
	.delete('/:id', companiesController.deleteCompanies);

module.exports = router;
