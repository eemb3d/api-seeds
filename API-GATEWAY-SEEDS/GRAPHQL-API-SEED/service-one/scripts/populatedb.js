const { dataHelper, dbHelper } = require('../helpers');
const { Games } = require('../models');

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
    await insertGamesData();
};

init();
