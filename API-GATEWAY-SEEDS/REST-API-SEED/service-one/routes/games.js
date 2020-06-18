const router = require('express').Router();
const { gamesController } = require('../controllers');

// Retrieve single game info by game_id
router.get('/games/:gameId', gamesController.getGame);

module.exports = router;
