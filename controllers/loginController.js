const fs = require('fs');

function get(req, res){
    res.render('login.ejs');
}

function post(req, res){
    res.render('login.ejs');
}

module.exports = { get, post };