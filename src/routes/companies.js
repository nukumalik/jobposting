const router = require('express').Router()
const upload = require('../helpers/multer')
// const redis = require('../helpers/redis')
// const validation = require('../helpers/validation')

// Controller
const companies = require('../controllers/companies')

router
	.get('/:id', companies.get)
	.get('/', companies.get)
	.post('/', upload, companies.add)
	.patch('/:id', companies.update)
	.delete('/:id', companies.remove)

module.exports = router
