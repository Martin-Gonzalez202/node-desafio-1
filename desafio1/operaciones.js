//funciones
const fs = require('fs');
const registrar = (nombre, edad, tipo_animal, color_animal, enfermedad) =>{
    console.log("Ejecucion funcion registrar");
    const aux = fs.readFileSync('citas.json','utf8');
    const registros = JSON.parse(aux);
    const nuevoRegistro = {
        "nombre" : nombre, 
        "edad" : edad,
        "tipo de animal" : tipo_animal,
        "color del animal" : color_animal,
        "enfermedad" : enfermedad,
    };
    registros.push(nuevoRegistro);
    fs.writeFileSync('citas.json', JSON.stringify(registros));
};

const leer = () =>{
    console.log("Ejecucion funcion leer");
    const citas = fs.readFileSync('citas.json','utf8');
    console.log(citas);
};
module.exports = {registrar, leer};