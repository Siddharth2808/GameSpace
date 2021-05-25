const express = require('express');
const router = express.Router();
const homeController = require('../controller/home_controllers');



router.get('/', homeController.home);
router.use('/chess', require('./chess'));
router.use('/users', require('./users'));
router.use('/tic-tac-toe', require('./tic-tac-toe'));
module.exports = router;