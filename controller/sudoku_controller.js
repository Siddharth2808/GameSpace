module.exports.home = function(req, res){
        return res.render('Sudoku/sudoku_home', {
                    title: "Sudoku | Home"
            });
    }

 module.exports.puzzle1 = function(req, res){
        return res.render('Sudoku/puzzles/puzzle-1', {
                    title: "Sudoku | Puzzle-1 (Easy)"
            });
    }

    module.exports.puzzle2 = function(req, res){
        return res.render('Sudoku/puzzles/puzzle-2', {
                    title: "Sudoku | Puzzle-2 (Easy)"
            });
    }
    module.exports.puzzle3 = function(req, res){
        return res.render('Sudoku/puzzles/puzzle-3', {
                    title: "Sudoku | Puzzle-1 (Medium)"
            });
    }
    module.exports.puzzle4 = function(req, res){
        return res.render('Sudoku/puzzles/puzzle-4', {
                    title: "Sudoku | Puzzle-2 (Medium)"
            });
    }
    module.exports.puzzle5 = function(req, res){
        return res.render('Sudoku/puzzles/puzzle-5', {
                    title: "Sudoku | Puzzle-1 (Hard)"
            });
    }
    module.exports.puzzle6 = function(req, res){
        return res.render('Sudoku/puzzles/puzzle-6', {
                    title: "Sudoku | Puzzle-2 (Hard)"
            });
    }