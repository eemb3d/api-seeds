const jsonfile = require('jsonfile');
const path = require('path');
const debug = require('debug')('HELPER:Data');

module.exports = {

    directoryPath: '../data/',

    fetchLocal: async (objectParams) => {
        const filepath = path.join(__dirname, module.exports.directoryPath + objectParams.fileName);
        return await jsonfile.readFile(filepath)
            .then(json => json)
            .catch((error) => debug('fetchLocal!', error.message));
    }

};
