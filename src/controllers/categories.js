const Category = require('../models/Category')
const { validationResult } = require('express-validator')

// JSON response
const successRes = { status: 200, error: false, message: '' }
const errorRes = { status: 400, error: true, message: '' }

// Get category
const get = (req, res) => {
	const { id } = req.params

	Category.get(id)
		.then(result => {
			if (!result) {
				successRes.message = 'Category is empty'
			} else {
				id ? (successRes.message = 'Success to get category') : (successRes.message = 'Success to get categories')
			}
			successRes.data = result
			res.status(200).json(successRes)
		})
		.catch(err => {
			errorRes.message = 'Failed to get categories'
			errorRes.data = err
			res.status(400).json(errorRes)
		})
}

// Add category
const add = (req, res) => {
	const { name } = req.body
	const errors = validationResult(req)

	if (!errors.isEmpty()) {
		errorRes.message = 'Failed to add category'
		errorRes.data = errors.array()
		res.status(400).json(errorRes)
	} else {
		Category.add(name)
			.then(() => {
				successRes.message = 'Success to add category'
				successRes.data = name
				res.status(200).json(successRes)
			})
			.catch(err => {
				errorRes.message = 'Failed to add category'
				errorRes.data = err
				res.status(400).json(errorRes)
			})
	}
}

// Update category
const update = (req, res) => {
	const { id } = req.params
	const { name } = req.body

	Category.get(id)
		.then(() => {
			Category.update(name, id).then(result => {
				successRes.message = 'Success to update category'
				successRes.data = name
				res.status(200).json(successRes)
			})
		})
		.catch(err => {
			errorRes.message = 'Failed to update category'
			errorRes.data = err
			res.status(404).json(errorRes)
		})
}

// Remove category
const remove = (req, res) => {
	const { id } = req.params

	Category.deleteCategories(id)
		.then(() => {
			successRes.message = 'Success to delete category'
			res.status(200).json(successRes)
		})
		.catch(err => {
			errorRes.message = 'Failed to delete category'
			errorRes.data = err
			res.status(404).json(errorRes)
		})
}

module.exports = { get, add, update, remove }
