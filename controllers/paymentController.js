const { getTitlePrice, getPassByOwner } = require("../models/passes");

function get(req, res){
    let { id } = req.session.user;
    let { titleType, paymentState } = getPassByOwner(id);;
    let price = getTitlePrice(titleType);
    let payment = {
        titleType,
        state : paymentState,
        reference : 123020101,
        price
    }
    res.render('transportTitlePayment.ejs', { pageTitle: "Passe", payment });
}

module.exports = { get };