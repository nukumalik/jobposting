const Company = require('../models/Company');
const uuid = require('uuid/v4');
const redis = require('../helpers/redis');

module.exports = {
	getCompanies: (req, res) => {
		const { id } = req.params;
		let { name, location, limit, page, orderby } = req.query;

		limit = limit || 5;
		page = page || 1;
		let offset = limit * (page - 1);

		if (orderby == 'location') order = 'location';
		if (typeof orderby == 'undefined') order = 'name';

		Company.getCompanies(id, name, location, limit, offset, orderby)
			.then(result => {
				redis.addCache(req.originalUrl, JSON.stringify(result));
				if (result.length < 1) {
					res.json({
						status: 200,
						error: false,
						message: 'Company is empty',
						data: result
					});
				} else {
					res.json(result);
				}
			})
			.catch(err => console.log(err));
	},
	addCompanies: (req, res) => {
		const id = uuid();
		const { name, logo, location, description } = req.body;
		const data = { id, name, logo, location, description };

		Company.addCompanies(data)
			.then(result => {
				redis.deleteCache(req.baseUrl).deleteCache(req.originalUrl);
				res.json({
					status: 200,
					error: false,
					message: 'Success to add new company',
					data
				});
			})
			.catch(err => console.log(err));
	},
	updateCompanies: (req, res) => {
		const { id } = req.params;
		const { name, logo, location, description } = req.body;

		const data = {};
		if (name) data.name = name;
		if (logo) data.logo = logo;
		if (location) data.location = location;
		if (description) data.description = description;

		Company.updateCompanies(data, id).then(result => {
			redis.deleteCache(req.baseUrl).deleteCache(req.originalUrl);
			res.json({
				status: 200,
				error: false,
				message: `Success to update a company with ID: ${id}`,
				data
			});
		});
	},
	deleteCompanies: (req, res) => {
		const { id } = req.params;

		Company.deleteCompanies(id)
			.then(result => {
				redis.deleteCache(req.baseUrl).deleteCache(req.originalUrl);
				res.json({
					status: 200,
					error: false,
					message: `Success to delete a company with ID: ${id}`
				});
			})
			.catch(err => console.log(err));
	}
};
