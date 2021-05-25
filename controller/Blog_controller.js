module.exports.home = function(req, res){
    return res.render('Blog-home', {
                title: "Blog | Home"
        });
}