const { check } = require('express-validator');

module.exports = {
	userLogin: [
		check('email', 'must be filled').not().isEmpty().trim(),
		check('email', 'is not valid').isEmail().trim(),
		check('password', 'must be filled').not().isEmpty(),
		check('password', 'min 8 character').isLength({ min: 8 })
	],
	userRegister: [
		check('name', 'must be filled').not().isEmpty().trim(),
		check('username', 'must be filled').not().isEmpty().trim(),
		check('username', 'min 8 character').isLength({ min: 8 }).trim(),
		check('born', 'must be filled').not().isEmpty().trim(),
		check('gender', 'must be filled').not().isEmpty().trim(),
		check('address', 'must be filled').not().isEmpty().trim(),
		check('email', 'must be filled').not().isEmpty().trim(),
		check('email', 'is not valid').isEmail().trim(),
		check('password', 'must be filled').not().isEmpty(),
		check('password', 'min 8 character').isLength({ min: 8 })
	],
	addJobs: [
		check('name', 'must be filled').not().isEmpty().trim(),
		check('description', 'must be filled').not().isEmpty().trim(),
		check('id_category', 'must be filled').not().isEmpty().trim(),
		check('salary', 'must be filled').not().isEmpty().trim(),
		check('location', 'must be filled').not().isEmpty().trim(),
		check('id_company', 'must be filled').not().isEmpty().trim(),
	],
	addCompanies: [
		check('name', 'must be filled').not().isEmpty().trim(),
		check('logo', 'must be filled').not().isEmpty().trim(),
		check('location', 'must be filled').not().isEmpty().trim(),
		check('description', 'must be filled').not().isEmpty().trim(),
	],
	addCategories: [
		check('name', 'must be filled').not().isEmpty().trim(),
	]
}