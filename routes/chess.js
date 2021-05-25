const express = require('express');
const router = express.Router();
//const passport = require('passport');


const chessController = require('../controller/chess_controller');

router.get('/vsComputer', chessController.play);
router.get('/home', chessController.home);



module.exports = router;