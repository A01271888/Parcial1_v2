
const actividades = [
    {
        id: 1,
        nombre: "Recepción",
        inicio: "2017-09-18 T16:00",
        fin: "2017-09-18 T17:00"
    },
    {
        id: 2,
        nombre: "Comida",
        inicio:  "2017-09-18 T15:00",
        fin: "2017-09-18 T16:00"
    },
    {
        id: 1,
        nombre: "Piñata",
        inicio: "2017-09-18 T18:00",
        fin: "2017-09-18 T19:00"
    },
]

exports.showAll = function(){
    return actividades;
};
