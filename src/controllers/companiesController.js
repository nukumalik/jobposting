const Company = require('../models/Company');
const uuid = require('uuid/v4');
const redis = require('../helpers/redis');
const path = require('path');
const fs = require('fs');
const { validationResult } = require('express-validator');

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
		const errors = validationResult(req);

		if(!errors.isEmpty()) {
			return res.status(400).json({
				status: 400,
				error: true,
				message: 'Failed to add new company',
				data: errors.array()
			});
		} else {
			const id = uuid();
			const logo = req.file.filename;
			const { name, location, description } = req.body;
			const data = { id, name, logo, location, description };

			Company.addCompanies(data)
				.then(result => {
					redis.client.get(req.baseUrl, (err, result) => {
						redis.deleteCache(req.baseUrl);
					});
					redis.client.get(req.originalUrl, (err, result) => {
						redis.deleteCache(req.originalUrl);
					});
					res.json({
						status: 200,
						error: false,
						message: 'Success to add new company',
						data
					});
				})
				.catch(err => console.log(err));
		}
	},
	updateCompanies: (req, res) => {
		const { id } = req.params;
		const { name, location, description } = req.body;
		const logo = req.file.filename;

		const data = {};
		if (name) data.name = name;
		if (logo) {
			data.logo = logo;

			Company.getCompanies(id).then(result => {
				const dir = path.join(__dirname, `../../public/uploads/${result[0].logo}`);
				fs.unlinkSync(dir);
			});
		}
		if (location) data.location = location;
		if (description) data.description = description;
				
		Company.updateCompanies(data, id).then(result => {
			redis.client.get(req.baseUrl, (err, result) => {
				redis.deleteCache(req.baseUrl);
			});
			redis.client.get(req.originalUrl, (err, result) => {
				redis.deleteCache(req.originalUrl);
			});
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
		Company.getCompanies(id).then(result => {
			const dir = path.join(__dirname, `../../public/uploads/${result[0].logo}`);
			fs.unlinkSync(dir);
			Company.deleteCompanies(id)
				.then(result => {
					redis.client.get(req.baseUrl, (err, result) => {
						redis.deleteCache(req.baseUrl);
					});
					redis.client.get(req.originalUrl, (err, result) => {
						redis.deleteCache(req.originalUrl);
					});
					res.json({
						status: 200,
						error: false,
						message: `Success to delete a company with ID: ${id}`
					});
				})
				.catch(err => console.log(err));
		});
	}
};
