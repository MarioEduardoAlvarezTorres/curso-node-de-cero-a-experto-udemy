const fs = require('fs');
const crearArchivo = async ( base = 0 ,lista=false,hasta=1) => {
const colors = require('colors');
    try {
         let salida ="";
            for (let i = 0; i < hasta; i++) {
                salida += `${base} x ${i+1} = ${base*(i+1)}\n`.yellow
            }
        if(lista){
            console.log("================".blue);
            console.log('Tabla del',colors.green(`${base}`));
            console.log("================".grey);
            console.log(salida);
            fs.writeFileSync(`./salida/tabla-${base}.txt`,salida);
        }
        return (`tabla-${base}.txt creado`);
    } catch (err) {
        throw err
    }
        
}

module.exports = {
    crearArchivo
}