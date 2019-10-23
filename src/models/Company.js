const db = require('../config/database');

module.exports = {
	getCompanies: (id, name, location, limit, offset, orderby) => {
		return new Promise((resolve, reject) => {
			let sql = 'SELECT * FROM companies';

			// Single job by ID
			if (id) sql += ` WHERE id='${id}'`;

			// Seacrh
			if (name && !location) sql += ` WHERE name like '%${name}%'`;
			if (location && !name) sql += ` WHERE location like '%${location}%'`;
			if (name && location) sql += ` WHERE name LIKE '%${name}%' AND location LIKE '%${location}%'`;

			// Sort
			if (orderby) sql += ` ORDER BY ${orderby}`;

			// Pagination
			if (limit) sql += ` LIMIT ${limit}`;
			if (offset) sql += ` OFFSET ${offset}`;

			db.query(sql, (err, result) => {
				!err ? resolve(result) : reject(new Error(err));
			});
		});
	},
	addCompanies: data => {
		return new Promise((resolve, reject) => {
			db.query('INSERT INTO companies SET ?', data, (err, result) => {
				!err ? resolve(result) : reject(new Error(err));
			});
		});
	},
	updateCompanies: (data, id) => {
		return new Promise((resolve, reject) => {
			db.query('UPDATE companies SET ? WHERE id = ?', [data, id], (err, result) => {
				!err ? resolve(result) : reject(new Error(err));
			});
		});
	},
	deleteCompanies: id => {
		return new Promise((resolve, reject) => {
			db.query('DELETE FROM companies WHERE id = ?', id, (err, result) => {
				!err ? resolve(result) : reject(new Error(err));
			});
		});
	}
};
