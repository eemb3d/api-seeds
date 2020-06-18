const axios = require('axios');
const debug = require('debug')('HELPER:Data');

const TIMEOUT = 1000;

module.exports = {

    getData: async (objectParams) => {
        return await axios.get(objectParams.url, { timeout: TIMEOUT })
            .then(res => res.data)
            .catch((error) => debug('getData', error.message));
    },

    putData: async (objectParams) => {
        return await axios.put(objectParams.url, objectParams.body, { timeout: TIMEOUT })
            .then(res => res.data)
            .catch((error) => debug('putData', error.message));
    },

    deleteData: async (objectParams) => {
        return await axios.delete(objectParams.url, { timeout: TIMEOUT })
            .then(res => res.data)
            .catch((error) => debug('deleteData', error.message));
    },

    postData: async (objectParams) => {
        return await axios.post(objectParams.url, objectParams.body, { timeout: TIMEOUT })
            .then(res => res.data)
            .catch((error) => debug('postData', error.message));
    }

};
