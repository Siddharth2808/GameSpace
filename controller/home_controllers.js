module.exports.home = function(req, res){
    return res.render('home', {
                title: "Home"
        });
}

module.exports.AboutUs = function(req, res){
        return res.render('AboutUs', {
                    title: "About Us"
            });
    }