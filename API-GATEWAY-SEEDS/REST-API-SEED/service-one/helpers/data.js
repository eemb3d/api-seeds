const jsonfile = require('jsonfile');
const path = require('path');
const moment = require('moment');
const debug = require('debug')('HELPER:Data');

module.exports = {

    calendarDateFormat: 'YYYY-MM-DD',
    directoryPath: '../data/',

    fetchLocal: async (objectParams) => {
        const filepath = path.join(__dirname, module.exports.directoryPath + objectParams.fileName);
        return await jsonfile.readFile(filepath)
            .then(json => json)
            .catch((error) => debug('fetchLocal!', error.message));
    },

    dataConverter: (data) => {
        try {
            return moment.unix(data).utc().format(module.exports.calendarDateFormat);
        } catch (error) {
            debug('dataConverter!', error.message);
            return data; // TBD Invalid data
        }
    },

    epochToReadableData: (dataObject) => {
        const copiedData = JSON.parse(JSON.stringify(dataObject));

        try {
            copiedData.comments = copiedData.comments.map(x => {
                x.dateCreated = module.exports.dataConverter(x.dateCreated);
                return x;
            });
        } catch (error) {
            debug('epochToReadableData!', error.message);
            return {}; // TBD {data[], error: 'Invalid data' }
        }

        return copiedData;
    }
};
