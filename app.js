const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');
const cors = require('cors');
const morgan = require('morgan');

// Main App
const app = express();

// Body Parser Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Passport Middleware
app.use(passport.initialize());
require('./src/helpers/passport')(passport);

// CORS
app.use(cors());

// Logger
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));

// Routes
app.use('/api/v1', require('./src/config/routes'));

// Port
const port = process.env.PORT || 5000;

// Connect to Server
app.listen(port, () => console.log(`Server is running on port ${port}`));
