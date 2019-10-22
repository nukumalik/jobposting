const Job = require('../models/Job');
const uuid = require('uuid/v4');

module.exports = {
	getJobs: (req, res) => {
		const { id } = req.params;
		let { name, company, limit, page, orderby } = req.query;

		limit = limit || 5;
		page = page || 1;
		let offset = limit * (page - 1);

		if (orderby == 'name') orderby = 'j.name';
		if (orderby == 'category') order = 'k.name';
		if (typeof orderby == 'undefined') order = 'j.updated_at';

		Job.getJobs(id, name, company, limit, offset, orderby)
			.then(result => {
				if (result.length < 1) {
					res.json({
						status: 200,
						error: false,
						message: 'Job is empty',
						data: result
					});
				} else {
					res.json(result);
				}
			})
			.catch(err => console.log(err));
	},
	addJobs: (req, res) => {
		const id = uuid();
		const { name, description, id_category, salary, location, id_company } = req.body;
		const created_at = new Date();
		const updated_at = new Date();
		const data = { id, name, description, id_category, salary, location, id_company, created_at, updated_at };

		Job.addJobs(data)
			.then(result =>
				res.json({
					status: 200,
					error: false,
					message: 'Success to add new job',
					data
				})
			)
			.catch(err => console.log(err));
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

		Job.updateJobs(data, id).then(result =>
			res.json({
				status: 200,
				error: false,
				message: `Success to update a job with ID: ${id}`,
				data
			})
		);
	},
	deleteJobs: (req, res) => {
		const { id } = req.params;

		Job.deleteJobs(id)
			.then(result =>
				res.json({
					status: 200,
					error: false,
					message: `Success to delete a job with ID: ${id}`
				})
			)
			.catch(err => console.log(err));
	}
};
