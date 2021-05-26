const express = require('express');
const router = express.Router();
//const passport = require('passport');


const chessController = require('../controller/chess_controller');

router.get('/AnalysisMode', chessController.play);
router.get('/home', chessController.home);
router.get('/level-1', chessController.level1);
router.get('/level-2', chessController.level2);
router.get('/level-3', chessController.level3);
router.get('/1v1', chessController.vsPlayer);

module.exports = router;