const Category = require('../models/Category');
const redis = require('../helpers/redis');

module.exports = {
	getCategories: (req, res) => {
		const { id } = req.params;
		let { name, limit, page } = req.query;

		limit = limit || 5;
		page = page || 1;
		let offset = limit * (page - 1);

		Category.getCategories(id, name, limit, offset)
			.then(result => {
				redis.addCache(req.originalUrl, JSON.stringify(result));
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

		Category.addCategories(name)
			.then(result => {
				redis.deleteCache(req.baseUrl).deleteCache(req.originalUrl);
				res.json({
					status: 200,
					error: false,
					message: 'Success to add new category',
					data: name
				});
			})
			.catch(err => console.log(err));
	},
	updateCategories: (req, res) => {
		const { id } = req.params;
		const { name } = req.body;

		Category.updateCategories(name, id).then(result => {
			redis.deleteCache(req.baseUrl).deleteCache(req.originalUrl);
			res.json({
				status: 200,
				error: false,
				message: `Success to update a category with ID: ${id}`,
				data: name
			});
		});
	},
	deleteCategories: (req, res) => {
		const { id } = req.params;

		Category.deleteCategories(id)
			.then(result => {
				redis.deleteCache(req.baseUrl).deleteCache(req.originalUrl);
				res.json({
					status: 200,
					error: false,
					message: `Success to delete a category with ID: ${id}`
				});
			})
			.catch(err => console.log(err));
	}
};
