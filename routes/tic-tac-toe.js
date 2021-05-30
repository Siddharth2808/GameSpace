const express = require('express');
const router = express.Router();
//const passport = require('passport');


const tttController = require('../controller/tic-tac-toe_controller');

router.get('/select1', tttController.p1);
router.get('/select2', tttController.p2);
router.get('/play-easy', tttController.playeasy);
router.get('/play-easy-2nd', tttController.playeasyop);
router.get('/play-hard', tttController.playhard);
router.get('/play-hard-2nd', tttController.playhardop);
router.get('/home', tttController.home);


module.exports = router;