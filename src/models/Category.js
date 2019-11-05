const db = require('../config/database');

module.exports = {
	getCategories: (id, name, limit, offset) => {
		return new Promise((resolve, reject) => {
			let sql = 'SELECT * FROM categories';

			// Single job by ID
			if (id) sql += ` WHERE id='${id}'`;

			// Seacrh
			if (name) sql += ` WHERE name like '%${name}%'`;

			// Pagination
			if (limit) sql += ` LIMIT ${limit}`;
			if (offset) sql += ` OFFSET ${offset}`;

			db.query(sql, (err, result) => {
				if (!err) {
					resolve(result);
				} else {
					reject(new Error(err));
				}
			});
		});
	},
	addCategories: name => {
		return new Promise((resolve, reject) => {
			db.query(`INSERT INTO categories (name) value ('${name}')`, (err, result) => {
				if (!err) {
					resolve(result);
				} else {
					reject(new Error(err));
				}
			});
		});
	},
	updateCategories: (name, id) => {
		return new Promise((resolve, reject) => {
			db.query(`UPDATE categories SET name='${name}' WHERE id='${id}'`, (err, result) => {
				if (!err) {
					resolve(result);
				} else {
					reject(new Error(err));
				}
			});
		});
	},
	deleteCategories: id => {
		return new Promise((resolve, reject) => {
			db.query('DELETE FROM categories WHERE id=${id}', (err, result) => {
				if (!err) {
					resolve(result);
				} else {
					reject(new Error(err));
				}
			});
		});
	}
};
