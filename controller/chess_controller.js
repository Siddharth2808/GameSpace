module.exports.play = function(req, res){
    return res.render('Chess/chess-gameplay', {
                title: "Chess | Gameplay"
        });
}

module.exports.playb = function(req, res){
        return res.render('Chess/chess-gameplay-1', {
                    title: "Chess | Gameplay"
            });
    }

module.exports.home = function(req, res){
        return res.render('Chess/chess-home', {
                    title: "Chess | Home"
            });
    }
module.exports.p1 = function(req, res){
        return res.render('Chess/select_color1', {
                    title: "Chess | Page-1"
            });
}
module.exports.p2 = function(req, res){
        return res.render('Chess/select_color2', {
                    title: "Chess | Page-2"
            });
}
module.exports.p3 = function(req, res){
        return res.render('Chess/select_color3', {
                    title: "Chess | Page-3"
            });
}
module.exports.p4 = function(req, res){
        return res.render('Chess/select_color4', {
                    title: "Chess | Page-4"
            });
}

module.exports.level1 = function(req, res){
        return res.render('Chess/chess-level1', {
                    title: "Chess | level-1"
            });
    }

    module.exports.level1b = function(req, res){
        return res.render('Chess/chess-level1-1', {
                    title: "Chess | level-1"
            });
    }

 module.exports.level2 = function(req, res){
        return res.render('Chess/chess-level2', {
                    title: "Chess | level-2"
            });
    }

    module.exports.level2b = function(req, res){
        return res.render('Chess/chess-level2-1', {
                    title: "Chess | level-2"
            });
    }

module.exports.level3 = function(req, res){
        return res.render('Chess/chess-level3', {
                    title: "Chess | level-3"
            });
    }

    module.exports.level3b = function(req, res){
        return res.render('Chess/chess-level3-1', {
                    title: "Chess | level-3"
            });
    }

module.exports.vsPlayer = function(req, res){
        return res.render('Chess/1v1', {
                    title: "Chess | vsPlayer"
            });
    }