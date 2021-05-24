const express = require('express');
const router = express.Router();
const homeController = require('../controller/home_controllers');

// setting up the view engine
app.set('view engine', 'ejs');
app.set('views', './views');


router.get('/', homeController.home);


module.exports = router;