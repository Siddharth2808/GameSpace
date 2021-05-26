module.exports.play = function(req, res){
    return res.render('Tic-tac-toe/tic-tac-toe-gameplay', {
                title: "Tic-tac-toe | Play"
        });
}

module.exports.home = function(req, res){
        return res.render('Tic-tac-toe/tic-tac-toe-home', {
                    title: "Tic-tac-toe | Home"
            });
    }