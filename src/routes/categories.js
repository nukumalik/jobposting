const router = require('express').Router();
const redis = require('../helpers/redis');
const categoriesController = require('../controllers/categoriesController');

router
	.get('/:id', redis.getCache, categoriesController.getCategories)
	.get('/', redis.getCache, categoriesController.getCategories)
	.post('/', categoriesController.addCategories)
	.patch('/:id', categoriesController.updateCategories)
	.delete('/:id', categoriesController.deleteCategories);

module.exports = router;
