const Company = require('../models/Company')
const uuid = require('uuid/v4')
const path = require('path')
const fs = require('fs')
const { validationResult } = require('express-validator')

// JSON response
const successRes = { status: 200, error: false }
const errorRes = { status: 400, error: true }

// Get company
const get = (req, res) => {
	const { id } = req.params
	let { name, location, limit, page, orderby } = req.query
	limit = limit || 5
	page = page || 1
	let offset = limit * (page - 1)
	orderby ? (orderby = 'location') : (orderby = 'name')

	Company.get().then(res1 => {
		Company.get(id, name, location, limit, offset, orderby)
			.then(result => {
				const totalData = res1.length
				const totalPage = Math.ceil(totalData / limit)
				let hasNext = true,
					hasPrev = true,
					Next,
					Prev
				if (page <= totalPage) {
					hasNext = false
					hasPrev = true
				}
				if (totalPage > 1 && page < totalPage) {
					hasNext = true
					hasPrev = false
				}
				if (hasNext) Next = '/companies?page=' + (Number(page) + 1)
				if (hasPrev) Prev = '/companies?page=' + (Number(page) - 1)
				const pagination = { limit, page, totalData, totalPage }
				const pageLink = { hasNext, hasPrev, Next, Prev }

				if (!result) {
					successRes.message = 'Company is empty'
				} else {
					id ? (successRes.message = 'Success to get user data') : (successRes.message = 'Success to get users data')
					successRes.pagination = pagination
					successRes.pageLink = pageLink
				}
				successRes.data = result
				res.status(200).json(successRes)
			})
			.catch(err => {
				errorRes.message = 'Failed to get company'
				errorRes.data = err
				res.status(400).json(errorRes)
			})
	})
}

// Add company
const add = (req, res) => {
	const errors = validationResult(req)
	const id = uuid()
	const logo = req.file.filename
	const { name, location, description } = req.body
	const data = { id, name, logo, location, description }

	if (!errors.isEmpty()) {
		errorRes.message = 'Failed to add company'
		errorRes.data = errorRes.array()
		res.status(400).json(errorRes)
	} else {
		Company.add(data)
			.then(() => {
				successRes.message = 'Success to add company'
				successRes.data = data
				res.status(200).json(successRes)
			})
			.catch(err => {
				errorRes.message = 'Failed to add company'
				errorRes.data = err
				res.status(400).json(errorRes)
			})
	}
}

// Update company
const update = (req, res) => {
	const { id } = req.params
	const { name, location, description } = req.body
	const logo = req.file.filename

	const data = {}
	if (name) data.name = name
	if (logo) {
		data.logo = logo

		Company.get(id).then(result => {
			const dir = path.join(__dirname, `../../public/logos/${result[0].logo}`)
			fs.unlinkSync(dir)
		})
	}
	if (location) data.location = location
	if (description) data.description = description

	Company.update(data, id)
		.then(() => {
			successRes.message = 'Success to update company'
			successRes.data = data
			res.status(200).json(successRes)
		})
		.catch(err => {
			errorRes.message = 'Failed to update company'
			errorRes.data = err
			res.status(400).json(errorRes)
		})
}

// Remove company
const remove = (req, res) => {
	const { id } = req.params
	Company.getCompanies(id).then(result => {
		const dir = path.join(__dirname, `../../public/uploads/${result[0].logo}`)
		fs.unlinkSync(dir)
		Company.deleteCompanies(id)
			.then(() => {
				successRes.message = 'Success to delete company'
				successRes.data = []
				res.status(200).json(successRes)
			})
			.catch(err => {
				errorRes.message = 'Failed to delete company'
				errorRes.data = err
				res.status(400).json(errorRes)
			})
	})
}

module.exports = { get, add, update, remove }
