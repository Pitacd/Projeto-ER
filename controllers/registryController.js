const fs = require('fs');

function get(req, res){
    res.render('register.ejs');
}

function post(req, res){
    res.render('register.ejs');
}

module.exports = { get, post };