//lectura de argumentos
const {registrar, leer} = require('./operaciones');

const argumento = process.argv.slice(2);
const nombre = argumento[1];
const edad = argumento[2];
const tipo_animal = argumento[3];
const color_animal = argumento[4];
const enfermedad = argumento[5];
//accion dependiendo del argumento
if(argumento[0] === "registrar"){
    registrar(nombre, edad, tipo_animal, color_animal, enfermedad)
};
if(argumento[0] === "leer"){
    leer()
};
//ejemplo
//node index.js registrar benito '1 año' perro blanco otitis
//node index.js registrar julieta '6 años' perro amarillo moquillo 

