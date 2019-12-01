const router = require('express').Router()
const validation = require('../helpers/validation')

// Controller
const categories = require('../controllers/categories')

router
	.get('/:id', categories.get)
	.get('/', categories.get)
	.post('/', validation.addCategories, categories.add)
	.patch('/:id', categories.update)
	.delete('/:id', categories.remove)

module.exports = router
