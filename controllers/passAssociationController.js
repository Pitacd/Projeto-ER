function get(req, res){
    res.render('connectPass.ejs', {pageTitle : "Passe"});
}

module.exports = { get };