const db = require('../config/database')

// Get category
const get = id => {
	return new Promise((resolve, reject) => {
		let sql = 'SELECT * FROM categories'
		id ? (sql += ` WHERE id='${id}'`) : sql

		db.query(sql, (err, result) => {
			err ? reject(new Error(err)) : resolve(result)
		})
	})
}

// Add category
const add = name => {
	return new Promise((resolve, reject) => {
		const sql = 'INSERT INTO categories SET ?'

		db.query(sql, name, (err, result) => {
			err ? reject(new Error(err)) : resolve(result)
		})
	})
}

// Update category
const update = (name, id) => {
	return new Promise((resolve, reject) => {
		const sql = `UPDATE categories SET name='${name}' WHERE id='${id}'`

		db.query(sql, (err, result) => {
			err ? reject(new Error(err)) : resolve(result)
		})
	})
}

// Remove category
const remove = id => {
	return new Promise((resolve, reject) => {
		const sql = `DELETE FROM categories WHERE id='${id}'`

		db.query(sql, (err, result) => {
			err ? reject(new Error(err)) : resolve(result)
		})
	})
}

module.exports = { get, add, update, remove }
