const fs = require('fs');
const { register } = require('../models/accounts');

let error = '';

function get(req, res){
    res.render('register.ejs', { error });
    error = '';
}

function post(req, res, next){
    let { email, password, confirmPassword } = req.body; 
    if(password != confirmPassword){
        error = 'Passwords diferentes';
    }
    error = register(email, password);
    if(error){
        console.log(error);
        res.redirect('/register');
        return;
    }
    res.redirect('/login');
}

module.exports = { get, post };