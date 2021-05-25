module.exports.play = function(req, res){
    return res.render('tic-tac-toe-gameplay', {
                title: "Tic-tac-toe | Home"
        });
}