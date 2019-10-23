const redis = require('redis');

// Redis Port
const redisPort = process.env.PORT || 6379;

// Create Client
const client = redis.createClient(redisPort);

client.on('connect', () => console.log(`Redis is running on port ${redisPort}`));

module.exports = {
	getCache: (req, res, next) => {
		let page = 1;  
		req.query.page !== null ? page = req.query.page : page;

		let { name, company, limit, orderby } = req.query;
		let check = { name, company, limit, page, orderby }

		client.get(check, (err, result) => {
			if (err) console.log(err);

			if(result != null) {
				res.send({msg: 'From redis', result: JSON.parse(result)})
				console.log(`From redis:\n${result}`)
			} else {
				next();
			}
		})
	},
	addCache: (key, data) => {
		client.setex(key, 60, data)
	},
	deleteCache: (key) => {
		client.del(keys)
	},
	client
};
