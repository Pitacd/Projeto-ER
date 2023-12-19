const { getPassByOwner } = require('../models/passes');

function get(req, res){
    let { id } = req.session.user;
    let pass = getPassByOwner(id);
    res.render('viewPass.ejs', { pageTitle : "Passe", pass : pass});
}

module.exports = { get };