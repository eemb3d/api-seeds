/* eslint-disable no-unused-vars */
const mongoose = require('mongoose');
const envHelper = require('./env');
const debug = require('debug')('HELPER:DB');

const MONGO_HOST = envHelper.env('DB_HOST');
const MONGO_USENAME = envHelper.env('DB_USER');
const MONGO_PASSWORD = envHelper.env('DB_PASS');
const MONGO_PORT = envHelper.env('DB_PORT');
const MONGO_DB_NAME = envHelper.env('DB_NAME');
const MONGODB_URI = 'mongodb://' + MONGO_USENAME + ':' + MONGO_PASSWORD + '@' + MONGO_HOST + ':' + MONGO_PORT + '/' + MONGO_DB_NAME;
const RBAC_OPTIONS = {
    useNewUrlParser: true,
    useUnifiedTopology: true
};

// http://mongodb.github.io/node-mongodb-native/driver-articles/mongoclient.html#mongoclient-connection-pooling
const DB_CONNECTION = {}; // Do not move from this file. Is already hard to have a GlobalObj, sparse is TOO much

// if (process.env.NODE_ENV !== 'production') mongoose.set('debug', true);
// mongoose.set('toJSON', {virtuals: true});

const db = {
    init: async () => {
        try {
            await mongoose.connect(MONGODB_URI, RBAC_OPTIONS);

            DB_CONNECTION.db = mongoose.connection;
            DB_CONNECTION.db.on('error', console.error.bind(console, 'MongoDB connection error:'));
            debug('Connected to the Database successfully');
        } catch (error) {
            console.error(MONGODB_URI);
            console.error(error, 'catch init()');
        }
    },
    close: async () => {
        try {
            if (DB_CONNECTION.connection) await DB_CONNECTION.connection.close();
            if (DB_CONNECTION.db) await DB_CONNECTION.db.close();
            debug('Connection CLOSED');
        } catch (error) {
            console.error(error, 'catch close()');
        }
    }
};

module.exports = db;

// Handle nodejs process exit dbconnection cleanup
// Better with systemd directives
process.on('exit', db.close);
