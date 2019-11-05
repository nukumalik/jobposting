const db = require('../config/database');

module.exports = {
	getUsers: (id, name, username, limit, offset, orderby) => {
		return new Promise((resolve, reject) => {
			let sql = 'SELECT * FROM users';

			// Single job by ID
			if (id) sql += ` WHERE id='${id}'`;
			if (username) sql += ` WHERE username='${username}'`;

			// Seacrh
			if (name) sql += ` WHERE name like '%${name}%'`;

			// Sort
			if (orderby) sql += ` ORDER BY ${orderby}`;

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
	loginUsers: (email, password) => {
		return new Promise((resolve, reject) => {
			db.query('SELECT * FROM users WHERE email=? AND password=?', [email, password], (err, result) => {
				if (!err) {
					resolve(result);
				} else {
					reject(new Error(err));
				}
			});
		});
	},
	registerUsers: data => {
		return new Promise((resolve, reject) => {
			db.query('INSERT INTO users SET ?', data, (err, result) => {
				if (!err) {
					resolve(result);
				} else {
					reject(new Error(err));
				}
			});
		});
	},
	updateUsers: (data, id) => {
		return new Promise((resolve, reject) => {
			db.query('UPDATE users SET ? WHERE id = ?', [data, id], (err, result) => {
				if (!err) {
					resolve(result);
				} else {
					reject(new Error(err));
				}
			});
		});
	},
	deleteUsers: id => {
		return new Promise((resolve, reject) => {
			db.query('DELETE FROM users WHERE id = ?', id, (err, result) => {
				if (!err) {
					resolve(result);
				} else {
					reject(new Error(err));
				}
			});
		});
	}
};
