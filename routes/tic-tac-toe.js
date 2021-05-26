const express = require('express');
const router = express.Router();
//const passport = require('passport');


const tttController = require('../controller/tic-tac-toe_controller');

router.get('/play', tttController.play);
router.get('/home',tttController.home);


module.exports = router;