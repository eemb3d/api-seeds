const router = require('express').Router();
const { gamesController } = require('../controllers');

// Retrieve summary of the games
router.get('/games/report', gamesController.getReport);

module.exports = router;
