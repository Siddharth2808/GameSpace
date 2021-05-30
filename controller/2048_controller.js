module.exports.home = function(req, res){
    return res.render('2048game/2048_home', {
                title: "2048 | Home"
        });
}

module.exports.play = function(req, res){
        return res.render('2048game/2048_gameplay', {
                    title: "2048 | Play"
            });
    }