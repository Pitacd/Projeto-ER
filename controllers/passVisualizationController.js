const { getPassByOwner } = require('../models/passes');

function get(req, res){
    pass = getPassByOwner('120');
    res.render('viewPass.ejs', { pass });
}

module.exports = { get };