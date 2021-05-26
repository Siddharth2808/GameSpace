module.exports.play = function(req, res){
    return res.render('Sudoku/sudoku_gameplay', {
                title: "Sudoku | Play"
        });
}

module.exports.home = function(req, res){
        return res.render('Sudoku/sudoku_home', {
                    title: "Sudoku | Home"
            });
    }