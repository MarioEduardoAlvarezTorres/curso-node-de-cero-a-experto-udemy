const { describe } = require('yargs');

const argv  =require('yargs')
                .options('b',{
                    alias:'base',
                    type:'number',
                    demandOption:true,
                    describe:'Es la base de la tabla de multiplicar'                  
                })
                .options('l',{
                    alias:'listar',
                    type:'boolean',
                    default:false,
                    describe: 'muestra la tabla en pantalla'
                })
                .options('h',{
                    alias:'hasta',
                    type: 'number',
                    default: 1,
                    describe:'Hasta donde se repite la multiplicación'
                })
                .check((argv,options) => {
                    if(isNaN(argv.b)){
                        throw 'La Base debe ser un número';
                    }
                    if(isNaN(argv.h)){
                        throw 'La cantidad de repeticiones debe ser un número';
                    }
                    return true
                })
                .argv;
        
module.exports = argv;