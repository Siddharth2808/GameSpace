module.exports.play = function(req, res){
    return res.render('Chess/chess-gameplay', {
                title: "Chess | Gameplay"
        });
}

module.exports.home = function(req, res){
        return res.render('Chess/chess-home', {
                    title: "Chess | Home"
            });
    }

module.exports.level1 = function(req, res){
        return res.render('Chess/chess-level1', {
                    title: "Chess | level-1"
            });
    }
 module.exports.level2 = function(req, res){
        return res.render('Chess/chess-level2', {
                    title: "Chess | level-2"
            });
    }
module.exports.level3 = function(req, res){
        return res.render('Chess/chess-level3', {
                    title: "Chess | level-3"
            });
    }

module.exports.vsPlayer = function(req, res){
        return res.render('Chess/1v1', {
                    title: "Chess | vsPlayer"
            });
    }