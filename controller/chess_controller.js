module.exports.play = function(req, res){
    return res.render('chess-gameplay', {
                title: "Chess | Gameplay"
        });
}

module.exports.home = function(req, res){
        return res.render('chess-home', {
                    title: "Chess | Home"
            });
    }