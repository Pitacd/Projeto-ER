function controller(req, res){
    res.sendFile('connectPass.html', { root : 'views' });
}

module.exports = controller;