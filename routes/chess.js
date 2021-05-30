const express = require('express');
const router = express.Router();
//const passport = require('passport');


const chessController = require('../controller/chess_controller');

router.get('/AnalysisMode', chessController.play);
router.get('/AnalysisModeb', chessController.playb);
router.get('/home', chessController.home);
router.get('/select_color1', chessController.p1);
router.get('/select_color2', chessController.p2);
router.get('/select_color3', chessController.p3);
router.get('/select_color4', chessController.p4);
router.get('/level-1', chessController.level1);
router.get('/level-1b', chessController.level1b);
router.get('/level-2', chessController.level2);
router.get('/level-2b', chessController.level2b);
router.get('/level-3', chessController.level3);
router.get('/level-3b', chessController.level3b);
router.get('/1v1', chessController.vsPlayer);

module.exports = router;