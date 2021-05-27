module.exports.playeasy = function (req, res) {
        return res.render('Tic-tac-toe/tic-tac-toe-easy', {
                title: "Tic-tac-toe | Easy"
        });
}

module.exports.playhard = function (req, res) {
        return res.render('Tic-tac-toe/tic-tac-toe-hard', {
                title: "Tic-tac-toe | Hard"
        });
}

module.exports.home = function (req, res) {
        return res.render('Tic-tac-toe/tic-tac-toe-home', {
                title: "Tic-tac-toe | Home"
        });
}