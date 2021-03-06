const debug = require('debug')('HELPER:Errors');

module.exports = {

    connectionStartError: 'Connection start error',
    connectionError: 'MongoDB connection error:',

    httpServerEACCES: ' requires elevated privileges',
    httpServerEADDRINUSE: ' is already in use',

    errorHandler: (error, message) => {
        return debug(message, error);
    },

    notFound: (objectParams) => {
        return objectParams.res.status(404).send('');
    },

    badRequest: (objectParams) => {
        return objectParams.res.status(400).send('');
    },

    // Send 404 over 5**
    serverCrash: (objectParams) => {
        if (objectParams.err) debug('ERROR_SIGF: ', objectParams.err.stack);
        return objectParams.res.status(404).send('Something went wrong!');
    }

};
