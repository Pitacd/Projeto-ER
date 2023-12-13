function controller(req, res){
    res.sendFile(`busSchedules.html`, { root: 'views' });
}

module.exports = controller