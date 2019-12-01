const db = require('../config/database')

// Get company
const get = (id, name, location, limit, offset, orderby) => {
	return new Promise((resolve, reject) => {
		let sql = 'SELECT * FROM companies'
		if (id) sql += ` WHERE id='${id}'`
		if (name && !location) sql += ` WHERE name LIKE '%${name}%'`
		if (!name && location) sql += ` WHERE location LIKE '%${location}%'`
		if (name && location) sql += ` WHERE name LIKE '%${name}%' AND location LIKE '%${location}%'`
		if (orderby) sql += ` ORDER BY ${orderby}`
		if (limit) sql += ` LIMIT ${limit}`
		if (offset) sql == ` OFFSET ${offset}`

		db.query(sql, (err, result) => {
			err ? reject(new Error(err)) : resolve(result)
		})
	})
}

// Add company
const add = data => {
	return new Promise((resolve, reject) => {
		const sql = 'INSERT INTO companies SET ?'

		db.query(sql, data, (err, result) => {
			err ? reject(new Error(err)) : resolve(result)
		})
	})
}

// Update company
const update = (data, id) => {
	return new Promise((resolve, reject) => {
		const sql = `UPDATE companies SET ? WHERE id='${id}'`

		db.query(sql, data, (err, result) => {
			err ? reject(new Error(err)) : resolve(result)
		})
	})
}

// Remove company
const remove = id => {
	return new Promise((resolve, reject) => {
		const sql = `DELETE FROM companies WHERE id='${id}'`
		db.query(sql, (err, result) => {
			err ? reject(new Error(err)) : resolve(result)
		})
	})
}

module.exports = { get, add, update, remove }
