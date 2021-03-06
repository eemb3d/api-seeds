const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const compression = require('compression');
const helmet = require('helmet');

const result = require('dotenv').config();
if (result.error) throw result.error;

const app = express();

const { errorsHelper } = require('./helpers');
const gamesRoutes = require('./graphql/route');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(helmet());
app.use(compression()); // Compress all routes

// ROUTES
app.use('/games', gamesRoutes);

// ERRORS
app.get('/*', (req, res) => {
    return errorsHelper.notFound({ res: res });
});
app.use(function (err, req, res, next) {
    return errorsHelper.serverCrash({ res: res, err: err });
});

module.exports = app;
