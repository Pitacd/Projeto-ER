function get(req, res){
    res.sendFile('connectPass.html', { root : 'views' });
}

module.exports = { get };