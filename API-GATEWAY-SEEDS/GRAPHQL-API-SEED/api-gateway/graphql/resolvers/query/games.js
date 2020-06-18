const gamesController = require('../../../controllers');

module.exports = {
    getGame: async (args) => {
        return await gamesController.getGame(args);
    },
    getReport: async () => {
        return await gamesController.getReport();
    }
};
