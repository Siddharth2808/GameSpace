module.exports.play = function(req, res){
    return res.render('Minesweeper/minesweeper-gameplay', {
                title: "Minesweeper | Gameplay"
        });
}

module.exports.home = function(req, res){
        return res.render('Minesweeper/minesweeper-home', {
                    title: "Minesweeper | Home"
            });
    }