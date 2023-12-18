const fs = require('fs');
const { login, getNumberEmail } = require('../models/accounts.js');

function get(req, res, next){
    // Initialize user object in the first call
    if(!req.session.user)
        req.session.user = {};

    // Initialize error message in the first call
    if(req.session.error == undefined)
        req.session.error = '';

    let { error } = req.session;
    req.session.error = '';
    res.render('login.ejs', { error });
}

function post(req, res){
    let { email, password } = req.body;
    let error = login(email, password);

    if(error && !error.includes("sucesso")){
        req.session.error = error;
        res.redirect('/login');
        return;
    }

    res.redirect('/schedules?user=' + getNumberEmail(email));
}

module.exports = { get, post };