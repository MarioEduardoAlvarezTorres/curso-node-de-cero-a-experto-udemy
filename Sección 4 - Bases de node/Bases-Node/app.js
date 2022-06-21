const { demandOption, options } = require('yargs');
const argv = require('./config/yargs');
const colors = require('colors');

const {crearArchivo} = require('./helpers/multiplicar')
console.clear();
 crearArchivo(argv.b,argv.l,argv.h)
     .then(nombreArchivo => console.log(nombreArchivo.rainbow,'creado'))
     .catch(err => console.log(err));









