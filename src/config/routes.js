const router = require('express').Router();

/**
 * Job Routes
 * =========================
 */
router.use('/jobs', require('../routes/jobs'));

/**
 * Company Routes
 * =========================
 */
router.use('/companies', require('../routes/companies'));

/**
 * Category Routes
 * =========================
 */
router.use('/categories', require('../routes/categories'));

/**
 * User Routes
 * =========================
 */
router.use('/users', require('../routes/users'));

module.exports = router;
