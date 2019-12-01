const multer = require('multer')
const path = require('path')

// Define folder for images
const storage = multer.diskStorage({
	destination: './public/logos',
	filename: (req, file, cb) => {
		cb(null, `${file.fieldname}-${Date.now()}-${file.originalname}`)
	},
})

// Init upload
const upload = multer({ storage }).single('logo')

module.exports = upload
