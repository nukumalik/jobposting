const db = require('../config/database');

module.exports = {
	getJobs: (id, name, company, limit, offset, orderby) => {
		return new Promise((resolve, reject) => {
			let sql =
				'SELECT j.name AS jobs, j.description, k.name AS categories, j.salary, j.location, c.name AS companies, j.created_at, j.updated_at FROM jobs j INNER JOIN categories k ON j.id_category=k.id INNER JOIN companies c ON j.id_company=c.id';

			// Single job by ID
			if (id) {
				sql += ` WHERE id='${id}'`;
			}

			// Seacrh
			if (name) {
				sql += ` WHERE j.name like '%${name}%'`;
			}
			if (company) {
				sql += ` WHERE c.name like '%${company}%'`;
			}
			if (name && company) {
				sql += ` WHERE j.name like '%${name}% AND c.name like '%${company}%'`;
			}

			// Sort
			if (orderby) {
				sql += ` ORDER BY ${orderby}`;
			}

			// Pagination
			if (limit) {
				sql += ` LIMIT ${limit}`;
			}
			if (offset) {
				sql += ` OFFSET ${offset}`;
			}

			db.query(sql, (err, result) => {
				if (!err) {
					resolve(result);
				} else {
					reject(new Error(err));
				}
			});
		});
	},
	addJobs: data => {
		return new Promise((resolve, reject) => {
			db.query('INSERT INTO jobs SET ?', data, (err, result) => {
				if (!err) {
					resolve(result);
				} else {
					reject(new Error(err));
				}
			});
		});
	},
	updateJobs: (data, id) => {
		return new Promise((resolve, reject) => {
			db.query('UPDATE jobs SET ? WHERE id = ?', [data, id], (err, result) => {
				if (!err) {
					resolve(result);
				} else {
					reject(new Error(err));
				}
			});
		});
	},
	deleteJobs: id => {
		return new Promise((resolve, reject) => {
			db.query('DELETE FROM jobs WHERE id = ?', id, (err, result) => {
				if (!err) {
					resolve(result);
				} else {
					reject(new Error(err));
				}
			});
		});
	}
};
