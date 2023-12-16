const busSchedules = require("../model/busSchedules.json");

function get(req, res){
    res.render(`busSchedules.ejs`, {pageTitle: "Transporte", busSchedules});
}

module.exports = { get };