const router = require('express').Router();
const upload = require('../helpers/multer');
const companiesController = require('../controllers/companiesController');
const redis = require('../helpers/redis');

router
	.get('/:id', redis.getCache, companiesController.getCompanies)
	.get('/', redis.getCache, companiesController.getCompanies)
	.post('/', upload, companiesController.addCompanies)
	.patch('/:id', companiesController.updateCompanies)
	.delete('/:id', companiesController.deleteCompanies);

module.exports = router;
