const router = require('express').Router();

const companiesController = require('../controllers/companiesController');

router
	.get('/:id', companiesController.getCompanies)
	.get('/', companiesController.getCompanies)
	.post('/', companiesController.addCompanies)
	.patch('/:id', companiesController.updateCompanies)
	.delete('/:id', companiesController.deleteCompanies);

module.exports = router;
