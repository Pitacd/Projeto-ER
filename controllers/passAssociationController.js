const { addPass } = require("../models/passes");

function get(req, res){
    res.render('connectPass.ejs', {pageTitle : "Passe"});
}

function post(req, res){
    let { busPassNumber, fullName } = req.body;
    addPass(busPassNumber, fullName);
    res.redirect('/pass');
}

module.exports = { get, post };