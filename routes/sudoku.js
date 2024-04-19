const express = require("express");
const router = express.Router();
//const passport = require('passport');

const sudokuController = require("../controller/sudoku_controller");

router.get("/home", sudokuController.home);
router.get("/solver", sudokuController.solver);
router.get("/easy", sudokuController.easy);
router.get("/medium", sudokuController.medium);
router.get("/hard", sudokuController.hard);
router.get("/puzzle1", sudokuController.puzzle1);
router.get("/puzzle2", sudokuController.puzzle2);
router.get("/puzzle3", sudokuController.puzzle3);
router.get("/puzzle4", sudokuController.puzzle4);
router.get("/puzzle5", sudokuController.puzzle5);
router.get("/puzzle6", sudokuController.puzzle6);

module.exports = router;
