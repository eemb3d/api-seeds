const { dataHelper, dbHelper } = require('../helpers');
const { Report } = require('../models');

const insertReportData = async () => {
    try {
        await dataHelper.fetchLocal({ fileName: 'report.json' })
            .then(async report => {
                const reportObj = new Report(report);
                await reportObj.save(function (err) {
                    if (err) return console.log(err);
                    console.log('Report Saved!');

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
};

init();
