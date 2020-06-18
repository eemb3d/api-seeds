const { Report } = require('../models');

exports.getReport = async (req, res, next) => {
    try {
        await getReportData(req, res, next);
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
