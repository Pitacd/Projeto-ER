const { addPass } = require("../models/passes");

function get(req, res){
    res.render('connectPass.ejs', { pageTitle : "Passe" });
}

function post(req, res){
    // TODO use cookies to get the userId //
    let userId = 1;
    ////////////////////////////////////////
    let { busPassNumber, fullName } = req.body;
    addPass(busPassNumber, userId, fullName);
    res.redirect('/pass');
}

module.exports = { get, post };