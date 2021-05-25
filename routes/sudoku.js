const express = require('express');
const router = express.Router();
//const passport = require('passport');


const sudokuController = require('../controller/sudoku_controller');

router.get('/play', sudokuController.play);
router.get('/home', sudokuController.home);


module.exports = router;