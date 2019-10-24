const redis = require('redis');

// Redis Port
const redisPort = process.env.PORT || 6379;

// Create Client
const client = redis.createClient(redisPort);

client.on('connect', () => console.log(`Redis is running on port ${redisPort}`));

module.exports = {
	getCache: (req, res, next) => {
		client.get(req.originalUrl, (err, result) => {
			if (err) console.log(err);

			if (result != null) {
				res.send({ msg: 'From redis', result: JSON.parse(result) });
			} else {
				return next(err);
			}
		});
	},
	addCache: (key, data) => {
		client.setex(key, 60, data);
	},
	deleteCache: key => {
		client.del(key);
	},
	client
};
