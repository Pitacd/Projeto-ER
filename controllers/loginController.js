const fs = require('fs');
const { login } = require('../models/accounts');

function get(req, res){
    res.render('login.ejs');
}

function post(req, res){
    let { email, password } = req.body;
    let error = login(email, password);
    if(error){
        // TODO: send error to the frontend
        res.redirect('/login');
        return;
    }
    res.redirect('/scehdules');
}

module.exports = { get, post };