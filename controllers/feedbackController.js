const {storageFeedback} = require('../models/feedback');

function get(req, res){
    res.render('feedback.ejs', {pageTitle : "Feedback"});
}
function post(req,res){
    let { about, classification, feedback } = req.body;
    storageFeedback(about, classification, feedback);

    res.redirect('/schedules');
}

module.exports = { get, post};