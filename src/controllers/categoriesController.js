const Category = require('../models/Category');
const { validationResult } = require('express-validator');

module.exports = {
	getCategories: (req, res) => {
		const { id } = req.params;
		let { name, limit, page } = req.query;

		limit = limit || 5;
		page = page || 1;
		let offset = limit * (page - 1);

		Category.getCategories(id, name, limit, offset)
			.then(result => {
				if (result.length < 1) {
					res.json({
						status: 200,
						error: false,
						message: 'Category is empty',
						data: result
					});
				} else {
					res.json(result);
				}
			})
			.catch(err => console.log(err));
	},
	addCategories: (req, res) => {
		const { name } = req.body;
		const errors = validationResult(req);

		if(!errors.isEmpty()) {
			return res.status(400).json({
				status: 400,
				error: true,
				message: 'Failed to add new category',
				data: errors.array()
			});
		} else {
			Category.addCategories(name)
				.then(result => {
					res.json({
						status: 200,
						error: false,
						message: 'Success to add new category',
						data: name
					});
				})
				.catch(err => console.log(err));
		}
	},
	updateCategories: (req, res) => {
		const { id } = req.params;
		const { name } = req.body;

		Category.getCategories(id).then(result => {
			if(result) {
				Category.updateCategories(name, id).then(result => {
					res.status(200).json({
						status: 200,
						error: false,
						message: `Success to update a category with ID: ${id}`,
						data: name
					});
				});
			} else {
				throw new Error('ID not found')
			}
		});
	},
	deleteCategories: (req, res) => {
		const { id } = req.params;

		Category.deleteCategories(id)
			.then(result => {
				res.json({
					status: 200,
					error: false,
					message: `Success to delete a category with ID: ${id}`
				});
			})
			.catch(err => console.log(err));
	}
};
