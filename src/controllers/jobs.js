const Job = require('../models/Job')
const uuid = require('uuid/v4')
const { addCache, deleteCache } = require('../helpers/redis')
const { validationResult } = require('express-validator')

// JSON response
const successRes = { status: 200, error: false }
const errorRes = { status: 400, error: true }

// Get job
const get = (req, res) => {
	const { id } = req.params
	let { name, company, limit, page, orderby } = req.query
	limit = limit || 20
	page = page || 1
	let offset = limit * (page - 1)

	if (typeof orderby == 'undefined') orderby = 'j.updated_at'
	if (orderby == 'updated_at') orderby = 'j.updated_at'
	if (orderby == 'natoz') orderby = 'j.name ASC'
	if (orderby == 'nztoa') orderby = 'j.name DESC'
	if (orderby == 'catoz') orderby = 'k.name ASC'
	if (orderby == 'cztoa') orderby = 'k.name DESC'

	Job.get().then(res1 => {
		Job.get(id, name, company, limit, offset, orderby)
			.then(result => {
				addCache(req.originalUrl, JSON.stringify(result))
				const totalData = res1.length
				const totalPage = Math.ceil(totalData / limit)
				let hasNext = true,
					hasPrev = true,
					Next,
					Prev
				if (page == totalPage) {
					hasPrev = false
					hasNext = false
				}
				if (hasNext) Next = '/api/v1/jobs?page=' + (Number(page) + 1)
				if (hasPrev) Prev = '/api/v1/jobs?page=' + (Number(page) - 1)
				const pagination = { limit, page, name, company, totalData, totalPage }
				const pageLink = { hasNext, hasPrev, Next, Prev }
				if (!result) {
					successRes.message = 'Job is empty'
				} else {
					successRes.message = 'Success to get jobs'
					successRes.pagination = pagination
					successRes.pageLink = pageLink
				}
				successRes.data = result
				res.status(200).json(successRes)
			})
			.catch(err => {
				errorRes.message = 'Failed to get job'
				errorRes.data = err
				res.status(400).json(errorRes)
			})
	})
}

// Add job
const add = (req, res) => {
	const id = uuid()
	const { name, description, id_category, salary, location, id_company } = req.body
	const created_at = new Date()
	const updated_at = new Date()
	const data = { id, name, description, id_category, salary, location, id_company, created_at, updated_at }
	const errors = validationResult(req)

	if (!errors.isEmpty()) {
		errorRes.message = 'Failed to add job'
		errorRes.data = errors.array()
		res.status(400).json(errorRes)
	} else {
		Job.add(data)
			.then(() => {
				successRes.message = 'Success to add job'
				successRes.data = data
				res.status(200).json(successRes)
			})
			.catch(err => {
				errorRes.message = 'Failed to add job'
				errorRes.data = err
				res.status(400).json(errorRes)
			})
	}
}

// Update job
const update = (req, res) => {
	const { id } = req.params
	const { name, description, id_category, salary, location, id_company } = req.body
	const updated_at = new Date()

	const data = {}
	if (name) data.name = name
	if (description) data.description = description
	if (id_category) data.id_category = id_category
	if (salary) data.salary = salary
	if (location) data.location = location
	if (id_company) data.id_company = id_company
	if (updated_at) data.updated_at = updated_at

	Job.update(data, id)
		.then(() => {
			successRes.message = 'Success to update job'
			successRes.data = data
			res.status(200).json(successRes)
		})
		.catch(err => {
			errorRes.message = 'Failed to update job'
			errorRes.data = err
			res.status(400).json(errorRes)
		})
}

// Remove job
const remove = (req, res) => {
	const { id } = req.params

	Job.delete(id)
		.then(() => {
			successRes.message = 'Success to delete job'
			successRes.data = []
			res.status(200).json(successRes)
		})
		.catch(err => {
			errorRes.message = 'Failed to delete job'
			errorRes.data = err
			res.status(400).json(errorRes)
		})
}

module.exports = { get, add, update, remove }
