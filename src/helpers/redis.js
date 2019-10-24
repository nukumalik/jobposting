const redis = require('redis');

// Redis Port
const redisPort = process.env.PORT || 6379;

// Create Client
const client = redis.createClient(redisPort);

client.on('connect', () => console.log(`Redis is running on port ${redisPort}`));

module.exports = {
	getCache: (req, res, next) => {
		let page = 1;
		if (req.query.page !== null) {
			page = req.query.page;
		}

		let { name, company, limit, orderby } = req.query;
		let redis_key = '';
		if (name) {
			redis_key += name;
		}
		if (company) {
			redis_key += company;
		}

		client.get(redis_key, (err, result) => {
			if (err) {
				console.log(err);
			}

			if (result != null) {
				res.send({ msg: 'From redis', result: JSON.parse(result) });
			} else {
				next();
			}
		});
	},
	addCache: (key, data) => {
		client.setex(key, 60, data);
	},
	deleteCache: key => {
		client.del(keys);
	},
	client
};
