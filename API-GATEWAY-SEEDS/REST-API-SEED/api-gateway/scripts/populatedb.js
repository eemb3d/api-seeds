/* eslint-disable no-unused-vars */
// const path = require('path');
// const result = require('dotenv').config({ path: path.join(__dirname, '../.env') });
// if (result.error) throw result.error;

const { dataHelper, dbHelper } = require('../helpers');
const { Games, Report } = require('../models');

const insertReportData = async () => {
    try {
        await dataHelper.fetchLocal({ fileName: 'report.json' })
            .then(async report => {
                const reportObj = new Report(report);
                await reportObj.save(function (err) {
                    if (err) return console.log(err);
                    console.log('Report Saved!');
                });
            })
            .catch(error => console.log(error));
    } catch (error) {
        console.log(error);
    }
};

const insertGamesData = async () => {
    try {
        await dataHelper.fetchLocal({ fileName: 'games.json' })
            .then(async games => {
                await Games.create(games, function (err) {
                    if (err) return console.log(err);
                    console.log('Games Saved!');

                    dbHelper.close();
                });
            })
            .catch(error => console.log(error));
    } catch (error) {
        console.log(error);
    }
};

const init = async () => {
    await dbHelper.init();
    await insertReportData();
    await insertGamesData();
};

init();
