const busSchedules = require("../model/busSchedules.json");

function get(req, res){
    res.render(`busSchedules.ejs`, {busSchedules});
}

module.exports = { get };