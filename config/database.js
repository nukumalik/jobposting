const mysql = require('mysql');
require('dotenv');

// Create connection
const db = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'root',
	database: 'jobfindout'
});

db.connect(err => (err ? console.log(err) : console.log('Database connected..')));

module.exports = db;
