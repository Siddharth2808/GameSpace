const express = require('express');
const router = express.Router();
//const passport = require('passport');


const BlogController = require('../controller/Blog_controller');

router.get('/home', BlogController.home);
router.get('/blog1',BlogController.blog1);

module.exports = router;