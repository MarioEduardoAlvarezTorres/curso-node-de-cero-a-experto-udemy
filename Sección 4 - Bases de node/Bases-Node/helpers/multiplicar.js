const fs = require('fs');
const crearArchivo = async ( base = 0) => {
    try {
        console.log("================");
        console.log(`Tabla del ${base}`);
        console.log("================");

        let salida ="";
        for (let i = 0; i < 10; i++) {
            salida += `${base} x ${i+1} = ${base*(i+1)}\n`
        }
        console.log(salida);
        fs.writeFileSync(`tabla-${base}.txt`,salida);
        return (`tabla-${base}.txt creado`);
    } catch (err) {
        throw err
    }
        
}

module.exports = {
    crearArchivo
}