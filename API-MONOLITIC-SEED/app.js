const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const compression = require('compression');
const helmet = require('helmet');

const result = require('dotenv').config();
if (result.error) throw result.error;

const app = express();

const { gamesRoutes } = require('./routes');
const { errorsHelper, dbHelper } = require('./helpers');

dbHelper.init();

// log only 4xx and 5xx responses to console
app.use(logger('dev', { skip: function (req, res) { return res.statusCode < 400; } }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(helmet());
app.use(compression()); // Compress all routes

// ROUTES
app.use('/', gamesRoutes);

// ERRORS
app.get('/*', (req, res) => {
    return errorsHelper.notFound({ res: res });
});
app.use(function (err, req, res, next) {
    return errorsHelper.serverCrash({ res: res, err: err });
});

module.exports = app;
