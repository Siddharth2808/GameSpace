const express = require('express');
const router = express.Router();
//const passport = require('passport');


const tttController = require('../controller/tic-tac-toe_controller');

router.get('/play-easy', tttController.playeasy);
router.get('/play-hard', tttController.playhard);
router.get('/home', tttController.home);


module.exports = router;