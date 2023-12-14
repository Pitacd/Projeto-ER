function get(req, res){
    res.sendFile(`busSchedules.html`, { root: 'views' });
}

module.exports = { get };