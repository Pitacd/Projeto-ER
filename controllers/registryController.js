const fs = require('fs');

function get(req, res){
    res.sendFile('register.html', { root : 'views'});
}

function post(req, res){
    res.sendFile('register.html', { root : 'views'});
}

module.exports = { get, post };