const express = require('express');
const router = express.Router();
//const passport = require('passport');


const BlogController = require('../controller/Blog_controller');

router.get('/home', BlogController.home);

module.exports = router;