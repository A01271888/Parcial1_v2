const eventos = require('../models/eventos.js');

exports.inicio = function(req, res){ 
    res.send(eventos.showAll());
}

exports.destroy = function(req, res){
    res.send(eventos.delete(req.params.id));
}