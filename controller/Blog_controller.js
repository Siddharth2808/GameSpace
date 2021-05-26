module.exports.home = function(req, res){
    return res.render('Blogs/Blog-home', {
                title: "Blog | Home"
        });
}

module.exports.blog1 = function(req, res){
        return res.render('Blogs/Blog1', {
                    title: "Blog1"
            });
    }