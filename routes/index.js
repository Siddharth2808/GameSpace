const express = require('express');
const router = express.Router();
const homeController = require('../controller/home_controllers');



router.get('/', homeController.home);


module.exports = router;