const express = require('express');
const router = express.Router();
//const passport = require('passport');


const sudokuController = require('../controller/sudoku_controller');

router.get('/home', sudokuController.home);
router.get('/puzzle1', sudokuController.puzzle1);
router.get('/puzzle2', sudokuController.puzzle2);


module.exports = router;