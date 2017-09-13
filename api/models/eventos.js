
const eventos = [
    {
        id: 1,
        nombre: "MxTrasciende",
        inicio: "2017-09-10 T08:00",
        fin: "2017-09-10 T17:00"
    },
    {
        id: 2,
        nombre: "Fiesta Mexicana",
        inicio: "2017-09-18 T15:00",
        fin: "2017-09-18 T20:00" 
    },
    {
        id: 3,
        nombre: "Fiesta Mexicana",
        inicio: "2017-09-18 T15:00",
        fin: "2017-09-18 T20:00" 
    }
]

exports.showAll = function(){
    return eventos;
};

exports.delete = function(id){
    let evt = eventos.filter((evt)=> evt.id == id)[0];
    if(evt){
        eventos.splice(eventos.indexOf(evt), 1);
        return true;
    }
    return false;
}