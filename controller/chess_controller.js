module.exports.play = function(req, res){
    return res.render('chess-gameplay', {
                title: "Chess | Home"
        });
}