module.exports.home = function(req, res){
        return res.render('Sudoku/sudoku_home', {
                    title: "Sudoku | Home"
            });
    }

 module.exports.puzzle1 = function(req, res){
        return res.render('Sudoku/puzzles/puzzle-1', {
                    title: "Sudoku | Puzzle-1"
            });
    }

    module.exports.puzzle2 = function(req, res){
        return res.render('Sudoku/puzzles/puzzle-2', {
                    title: "Sudoku | Puzzle-2"
            });
    }