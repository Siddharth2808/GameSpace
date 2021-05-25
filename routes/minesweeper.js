const express = require('express');
const router = express.Router();
//const passport = require('passport');


const minesweeperController = require('../controller/minesweeper_controller');

router.get('/play', minesweeperController.play);
router.get('/home', minesweeperController.home);


module.exports = router;