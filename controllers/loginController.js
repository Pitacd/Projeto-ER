const fs = require('fs');

function get(req, res){
    res.sendFile('login.html', { root : 'views' });
}

function post(req, res){
    res.sendFile('login.html', { root : 'views' });
}

module.exports = { get, post };