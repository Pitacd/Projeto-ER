function controller(req, res){
    res.sendFile('transportTitlePayment.html', { root : 'views'});
}

module.exports = controller;