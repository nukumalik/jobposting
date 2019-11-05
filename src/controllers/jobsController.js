const Job = require('../models/Job');
const uuid = require('uuid/v4');
const redis = require('../helpers/redis');
const db = require('../config/database');
const { validationResult } = require('express-validator');

module.exports = {
	getJobs: (req, res) => {
		const { id } = req.params;
		let { name, company, limit, page, orderby } = req.query;

		limit = limit || 3;
		page = page || 1;
		let offset = limit * (page - 1);

		if (typeof orderby == 'undefined') order = 'j.updated_at';
		if (orderby == 'updated_at') orderby = 'j.updated_at';
		if (orderby == 'natoz') orderby = 'j.name ASC';
		if (orderby == 'nztoa') orderby = 'j.name DESC';
		if (orderby == 'catoz') orderby = 'k.name ASC';
		if (orderby == 'cztoa') orderby = 'k.name DESC';

		db.query('select count(id) as totalData from jobs', (err, result1) => {
			const totalData = result1[0].totalData;
			Job.getJobs(id, name, company, limit, offset, orderby)
				.then(result => {
					redis.addCache(req.originalUrl, JSON.stringify(result));
					const totalPage = Math.ceil(totalData / limit);
					let hasNext, hasPrev, Next, Prev;
					if (page <= totalPage) {
						hasNext = false;
						hasPrev = true;
					}
					if (totalPage > 1 && page < totalPage) {
						hasNext = true;
						hasPrev = false;
					}
					if (hasNext) {
						Next = '/jobs?page=' + (page + 1);
					}
					if (hasPrev) {
						Prev = '/jobs?page=' + (page - 1);
					}
					if (result.length < 1) {
						res.json({
							status: 200,
							error: false,
							message: 'Job is empty',
							data: result,
						});
					} else {
						res.json({
							status: 200,
							error: false,
							message: 'Success to get jobs',
							data: result,
							pagination: {
								limit,
								page,
								name,
								company,
								totalData,
								totalPage,
							},
							pageLink: {
								hasNext,
								hasPrev,
								Next,
								Prev,
							},
						});
					}
				})
				.catch(err => console.log(err));
		});
	},
	addJobs: (req, res) => {
		const errors = validationResult(req);

		if (!errors.isEmpty()) {
			return res.status(400).json({
				status: 400,
				error: true,
				message: 'Failed to add new job',
				data: errors.array(),
			});
		} else {
			const id = uuid();
			const { name, description, id_category, salary, location, id_company } = req.body;
			const created_at = new Date();
			const updated_at = new Date();
			const data = { id, name, description, id_category, salary, location, id_company, created_at, updated_at };

			Job.addJobs(data)
				.then(result => {
					res.json({
						status: 200,
						error: false,
						message: 'Success to add new job',
						data,
					});
				})
				.catch(err => console.log(err));
		}
	},
	updateJobs: (req, res) => {
		const { id } = req.params;
		const { name, description, id_category, salary, location, id_company } = req.body;
		const updated_at = new Date();

		const data = {};
		if (name) data.name = name;
		if (description) data.description = description;
		if (id_category) data.id_category = id_category;
		if (salary) data.salary = salary;
		if (location) data.location = location;
		if (id_company) data.id_company = id_company;
		if (updated_at) data.updated_at = updated_at;

		Job.updateJobs(data, id).then(result => {
			res.json({
				status: 200,
				error: false,
				message: `Success to update a job with ID: ${id}`,
				data,
			});
		});
	},
	deleteJobs: (req, res) => {
		const { id } = req.params;

		Job.deleteJobs(id)
			.then(result => {
				res.json({
					status: 200,
					error: false,
					message: `Success to delete a job with ID: ${id}`,
				});
			})
			.catch(err => console.log(err));
	},
};
