const db = require('../config/database')

// Get user data
const get = id => {
	return new Promise((resolve, reject) => {
		let sql = 'SELECT * FROM users'
		id ? (sql += ` WHERE id='${id}'`) : sql

		db.query(sql, (err, result) => {
			err ? reject(new Error(err)) : resolve(result)
		})
	})
}

// Login to user account
const login = (email, password) => {
	return new Promise((resolve, reject) => {
		const sql = `SELECT * FROM users WHERE email='${email}' AND password='${password}'`

		db.query(sql, (err, result) => {
			err ? reject(new Error(err)) : resolve(result)
		})
	})
}

// Register new account
const register = data => {
	return new Promise((resolve, reject) => {
		const sql = 'INSERT INTO users set ?'

		db.query(sql, data, (err, result) => {
			err ? reject(new Error(err)) : resolve(result)
		})
	})
}

// Update an user account
const update = (data, id) => {
	return new Promise((resolve, reject) => {
		const sql = `UPDATE users SET ? WHERE id='${id}'`

		db.query(sql, data, (err, result) => {
			err ? reject(new Error(err)) : resolve(result)
		})
	})
}

// Remove user account
const remove = id => {
	return new Promise((resolve, reject) => {
		const sql = `DELETE FROM users WHERE id='${id}'`

		db.query(sql, (err, result) => {
			err ? reject(new Error(err)) : resolve(result)
		})
	})
}

module.exports = { get, login, register, update, remove }
