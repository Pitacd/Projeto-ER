const { getPassByOwner } = require('../models/passes');

function get(req, res){
    pass = getPassByOwner('120');
    res.render('viewPass.ejs', { pageTitle : "Passe", pass });
}

module.exports = { get };