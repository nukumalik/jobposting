const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');
const cors = require('cors');

// Main App
const app = express();

// Body Parser Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Passport Middleware
app.use(passport.initialize());
require('./src/helpers/passport')(passport);

// CORS
app.use(cors());

// Routes
app.use(require('./src/config/routes'));

// Port
const port = process.env.PORT || 3000;

// Connect to Server
app.listen(port, () => console.log(`Server is running on port ${port}`));
