const fs = require('fs');
const { register } = require('../models/accounts');

function get(req, res){
    res.render('register.ejs');
}

function post(req, res){
    let { email, password, confirmPassword } = req.body;
    let error = ''; 
    if(password != confirmPassword){
        error = 'Passwords diferentes';
    }
    erro = register(email, password);
    if(error){
        // TODO: send error to the fronted
        res.redirect('/register');
        return;
    }
    res.redirect('/login');
}

module.exports = { get, post };