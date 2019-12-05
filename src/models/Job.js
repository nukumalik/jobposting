const db = require('../config/database')

// Get job
const get = (slug, name, company, limit, offset, orderby) => {
	return new Promise((resolve, reject) => {
		let sql =
			'SELECT j.id, j.name jobs, j.description, k.name categories, j.salary, j.location, c.name companies, c.logo, j.slug, j.created_at, j.updated_at \
			FROM jobs j INNER JOIN categories k ON j.id_category=k.id INNER JOIN companies c ON j.id_company=c.id'

		if (slug) sql += ` WHERE j.slug='${slug}'`
		if (name && !company) sql += ` WHERE j.name like '%${name}%'`
		if (company && !name) sql += ` WHERE c.name like '%${company}%'`
		if (name && company) sql += ` WHERE j.name like '%${name}%' AND c.name like '%${company}%'`
		if (orderby) sql += ` ORDER BY ${orderby}`
		if (limit) sql += ` LIMIT ${limit}`
		if (offset) sql += ` OFFSET ${offset}`

		db.query(sql, (err, result) => {
			err ? reject(new Error(err)) : resolve(result)
		})
	})
}

// Add job
const add = data => {
	return new Promise((resolve, reject) => {
		const sql = 'INSERT INTO jobs SET ?'

		db.query(sql, data, (err, result) => {
			err ? reject(new Error(err)) : resolve(result)
		})
	})
}

// Update job
const update = (data, id) => {
	return new Promise((resolve, reject) => {
		const sql = `UPDATE jobs SET ? WHERE id='${id}'`

		db.query(sql, data, (err, result) => {
			err ? reject(new Error(err)) : resolve(result)
		})
	})
}

// Remove job
const remove = id => {
	return new Promise((resolve, reject) => {
		const sql = `DELETE FROM jobs WHERE id='${id}'`

		db.query(sql, (err, result) => {
			err ? reject(new Error(err)) : resolve(result)
		})
	})
}

module.exports = { get, add, update, remove }
