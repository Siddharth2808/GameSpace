module.exports.play = function(req, res){
    return res.render('minesweeper-gameplay', {
                title: "Minesweeper | Gameplay"
        });
}

module.exports.home = function(req, res){
        return res.render('minesweeper-home', {
                    title: "Minesweeper | Home"
            });
    }