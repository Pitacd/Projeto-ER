function get(req, res){
    let pass = {
        owner : 'João Pedro Alves',
        titleType : 'Sub23',
        paymentState : 'Pago',
        validity : '12-12-2030'
    };
    res.render('viewPass.ejs', { pageTitle: "Passe", pass });
}

module.exports = { get };