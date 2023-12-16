const fs = require('fs');
const { register } = require('../models/accounts');

function get(req, res){
    res.render('register.ejs');
}

function post(req, res, next){
    let { email, password, confirmPassword } = req.body;
    let error = ''; 
    if(password != confirmPassword){
        error = 'Passwords diferentes';
    }
    error = register(email, password);
    if(error){
        console.log(error);

        // TODO: send error to the fronted
        
        res.redirect('/register');
        return;
    }
    res.redirect('/login');
}

module.exports = { get, post };