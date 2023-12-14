function get(req, res){
    res.sendFile('transportTitlePayment.html', { root : 'views'});
}

module.exports = { get };