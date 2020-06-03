const { errorsHelper } = require('../helpers');
const { Games, Report } = require('../models');

exports.getGame = async (req, res, next) => {
    try {
        if (!req.params || isNaN(req.params.gameId) || req.params.gameId < 0) {
            return errorsHelper.badRequest({ res: res });
        }
        await getGameData(req, res, next);
    } catch (error) {
        next(error);
    }
};

exports.getReport = async (req, res, next) => {
    try {
        await getReportData(req, res, next);
    } catch (error) {
        next(error);
    }
};

const getGameData = async (req, res, next) => {
    try {
        Games
            .find({ _id: req.params.gameId }, { _id: 0, 'comments._id': 0 })
            .then(data => res.json(data))
            .catch(error => next(error));
    } catch (error) {
        next(error);
    }
};

const getReportData = async (req, res, next) => {
    try {
        Report
            .find({}, { _id: 0, 'average_likes_per_game._id': 0 })
            .then(data => res.json(data))
            .catch(error => next(error));
    } catch (error) {
        next(error);
    }
};
