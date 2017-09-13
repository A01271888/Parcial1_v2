const actividades = require('../models/actividades.js');

exports.inicio = function(req, res){ 
    res.send(actividades.showAll());
}