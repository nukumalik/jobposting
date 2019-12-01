const User = require('../models/User')
const uuid = require('uuid/v4')
const { genSaltSync, hashSync, compareSync } = require('bcryptjs')
const { sign } = require('jsonwebtoken')
const { validationResult } = require('express-validator')

// JSON response
const successRes = { status: 200, error: false }
const errorRes = { status: 400, error: true }

// Get user
const get = (req, res) => {
	let { id } = req.params

	User.get(id)
		.then(result => {
			if (!result) {
				successRes.message = 'User is empty'
			} else {
				id ? (successRes.message = 'Success to get user data') : (successRes.message = 'Success to get users data')
			}
			successRes.data = result
			res.status(200).json(successRes)
		})
		.catch(err => console.log(err))
}

// Login user
const login = (req, res) => {
	let { email, password } = req.body
	const errors = validationResult(req)

	if (!errors.isEmpty()) {
		errorRes.message = 'Failed to login'
		errorRes.data = errors.array()
		res.status(400).json(errorRes)
	} else {
		User.get().then(result => {
			const user = result.filter(person => person.email == email)
			const isMatch = compareSync(password, user[0].password)
			if (isMatch) {
				User.login(email, password)
					.then(result => {
						// Payload
						const payload = {
							id: result.id,
							name: result.name,
							username: result.username,
							email: result.email,
						}

						// Token
						sign(payload, 'GunungTidar', { expiresIn: 3600 }, (err, token) => {
							if (err) console.log(err)
							successRes.message = 'Success to login'
							successRes.id = result.id
							successRes.token = 'Bearer ' + token
							res.status(200).json(successRes)
						})
					})
					.catch(err => console.log(err))
			} else {
				errorRes.message = 'Password invalid'
				res.status(400).json(errorRes)
			}
		})
	}
}

// Register user
const register = (req, res) => {
	let { name, username, email, password } = req.body
	let data = { id: uuid(), name, username, email, password }
	const errors = validationResult(req)

	if (!errors.isEmpty()) {
		errorRes.message = 'Failed to register new user'
		errorRes.data = errors.array()
		return res.status(400).json(errorRes)
	} else {
		const salt = genSaltSync(10)
		const hash = hashSync(password, salt)
		data.password = hash
		User.register(data)
			.then(() => {
				successRes.message = 'Success to register new user account'
				successRes.data = data
				res.status(200).json(successRes)
			})
			.catch(err => console.log(err))
	}
}

// Update user
const update = (req, res) => {
	const { id } = req.params
	const { role, name, username, born, gender, address, avatar, email, password } = req.body
	const data = { role, name, username, born, gender, address, avatar, email, password }
	if (data.password) {
		const salt = genSaltSync(10)
		const hash = hashSync(data.password, salt)
		data.password = hash
	}
	User.update(data, id)
		.then(() => {
			successRes.message = 'Success to update user data'
			successRes.data = data
			res.status(200).json(successRes)
		})
		.catch(err => {
			errorRes.message = 'Failed to update user data'
			errorRes.data = err
			res.status(400).json(errorRes)
		})
}

// Remove user
const remove = (req, res) => {
	const { id } = req.params

	User.remove(id)
		.then(() => {
			successRes.message = 'Success to delete user account'
			res.status(200).json(successRes)
		})
		.catch(err => console.log(err))
}

module.exports = { get, login, register, update, remove }
