const { dataHelper, envHelper, errorsHelper } = require('../helpers');

const SERVICE_ONE_URI = envHelper.env('SERVICE_ONE_URI');
const SERVICE_TWO_URI = envHelper.env('SERVICE_TWO_URI');
const COLLECTION = '/games/';

module.exports = {
    getGame: async (req, res, next) => {
        try {
            if (!req.params || isNaN(req.params.gameId) || req.params.gameId < 0) {
                return errorsHelper.badRequest({ res: res });
            }

            const url = SERVICE_ONE_URI + COLLECTION + req.params.gameId;

            await dataHelper.getData({ url: url, next: next, config: {} })
                .then(dataGame => res.send(dataGame))
                .catch(error => next(error));
        } catch (error) {
            next(error);
        };
    },

    getReport: async (req, res, next) => {
        try {
            const resource = 'report';
            const url = SERVICE_TWO_URI + COLLECTION + resource;

            await dataHelper.getData({ url: url, next: next, body: {}, config: {} })
                .then(report => res.send(report))
                .catch(error => next(error));
        } catch (error) {
            next(error);
        }
    }
};
