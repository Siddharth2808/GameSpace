const express = require('express');
const router = express.Router();
//const passport = require('passport');


const opController = require('../controller/2048_controller');


router.get('/home', opController.home);
router.get('/play', opController.play);

module.exports = router;