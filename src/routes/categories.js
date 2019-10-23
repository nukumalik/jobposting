const router = require('express').Router();

const categoriesController = require('../controllers/categoriesController');

router
	.get('/:id', categoriesController.getCategories)
	.get('/', categoriesController.getCategories)
	.post('/', categoriesController.addCategories)
	.patch('/:id', categoriesController.updateCategories)
	.delete('/:id', categoriesController.deleteCategories);

module.exports = router;
