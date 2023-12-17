const fs = require('fs');
const { login } = require('../models/accounts');

let error = '';

function get(req, res){
    res.render('login.ejs', { error });
    error = '';
}

function post(req, res){
    let { email, password } = req.body;
    error = login(email, password);
    if(error){
        console.log(error);
        res.redirect('/login');
        return;
    }
    res.redirect('/schedules');
}

module.exports = { get, post };