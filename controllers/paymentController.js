function get(req, res){
    let payment = {
        state : 'Pago',
        reference : 123123123,
        price : 16.00
    };
    res.render('transportTitlePayment.ejs', { pageTitle: "Passe", payment });
}

module.exports = { get };