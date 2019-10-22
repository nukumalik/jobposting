const User = require('../models/User');
const uuid = require('uuid/v4');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

module.exports = {
	getUsers: (req, res) => {
		User.getUsers()
			.then(result => {
				if (result.length < 1) {
					res.json({ message: 'User is empty' });
				} else {
					res.json(result);
				}
			})
			.catch(err => console.log(err));
	},
	loginUsers: (req, res) => {
		const { email, password } = req.body;
		User.getUsers()
			.then(result => {
				const arrEmail = result.filter(person => person.email == email);
				bcrypt.compare(password, arrEmail[0].password).then(isMatch => {
					if (isMatch) {
						User.loginUsers(email, password)
							.then(result => {
								console.log(result);
								// Payload
								const payload = {
									id: result.id,
									name: result.name,
									username: result.username,
									email: result.email,
									password: result.password
								};

								// Token
								jwt.sign(payload, 'secret', { expiresIn: 3600 }, (err, token) => {
									if (err) console.log(err);
									res.json({
										status: 200,
										error: false,
										message: 'Success to login',
										token: 'Bearer ' + token
									});
								});
							})
							.catch(err => console.log(err));
					} else {
						res.json({
							status: 400,
							error: true,
							message: 'Password invalid'
						});
					}
				});
			})
			.catch(err => console.log(err));
	},
	registerUsers: (req, res) => {
		const id = uuid();
		const { name, username, born, gender, address, email, password } = req.body;
		const data = { id, name, username, born, gender, address, email, password };
		bcrypt.genSalt(10, (err, salt) => {
			bcrypt.hash(data.password, salt, (err, hash) => {
				data.password = hash;
				User.registerUsers(data)
					.then(result =>
						res.json({
							status: 200,
							error: false,
							message: 'Success to register new user account',
							data
						})
					)
					.catch(err => console.log(err));
			});
		});
	},
	updateUsers: (req, res) => {
		const { id } = req.params;
		const { name, username, born, gender, address, email, password } = req.body;
		const updated_at = new Date();

		const data = {};
		if (name) data.name = name;
		if (username) data.username = username;
		if (born) data.born = born;
		if (gender) data.gender = gender;
		if (address) data.address = address;
		if (email) data.email = email;
		if (password) {
			bcrypt.genSalt(10, (err, salt) => {
				bcrypt.hash(password, salt, (err, hash) => {
					if (err) console.log(err);
					password = hash;
				});
			});
			data.password = password;
		}

		User.updateUsers(data, id).then(result =>
			res.json({
				status: 200,
				error: false,
				message: `Success to update a user with ID: ${id}`,
				data
			})
		);
	},
	deleteUsers: (req, res) => {
		const { id } = req.params;

		User.deleteUsers(id)
			.then(result =>
				res.json({
					status: 200,
					error: false,
					message: `Success to delete a user with ID: ${id}`
				})
			)
			.catch(err => console.log(err));
	}
};
