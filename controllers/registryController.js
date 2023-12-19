const { register } = require('../models/accounts');

function get(req, res){
    // Initialize user object in the first call
    if(!req.session.user)
        req.session.user = {};

    // Initialize error message in the first call
    if(req.session.error == undefined)
        req.session.error = '';
    
    let { error } = req.session;
    req.session.error = '';
    res.render('register.ejs', { error });
}

function post(req, res){
    let { email, password, confirmPassword } = req.body; 
    let error = '';

    if(password !== confirmPassword)
        error = 'Passwords diferentes';
    else error = register(email, password);

    if(error){
        req.session.error = error;
        res.redirect('/register');
        return;
    }

    res.redirect('/login');
}

module.exports = { get, post };