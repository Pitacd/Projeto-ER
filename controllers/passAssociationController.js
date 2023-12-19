const { addPass } = require("../models/passes");

function get(req, res){
    res.render('connectPass.ejs', { pageTitle : "Passe" });
}

function post(req, res){
    let { id } = req.session.user;
    let { busPassNumber, fullName } = req.body;
    addPass(busPassNumber, id, fullName);
    res.redirect('/pass');
}

module.exports = { get, post };