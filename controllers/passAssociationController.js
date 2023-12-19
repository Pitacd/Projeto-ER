const { sendPassToBeVerify, verifyErrorsOnFormAssociatePass } = require("../models/passes");
let error = '';

function get(req, res){
    res.render('connectPass.ejs', {pageTitle : "Passe", error});
    error = '';
}

function post(req, res){
    let { id } = req.session.user;
    let { busPassNumber, fullName, nif} = req.body;
    error = verifyErrorsOnFormAssociatePass(fullName, nif);
    if(error){
        res.redirect('/pass/association');
        return;
    }
    sendPassToBeVerify(busPassNumber, id, fullName, nif);
    res.redirect('/pass');
}

module.exports = { get, post };