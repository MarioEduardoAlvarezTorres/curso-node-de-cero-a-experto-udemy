import * as fs from 'fs';
const archivo = "./db/data.json";

export const guardarDB = (data) =>{
    fs.writeFileSync(archivo,JSON.stringify(data))
}

export const leerDB = () =>{
    if (!fs.existsSync(archivo)) {
        return null;
    }

    const info = fs.readFileSync(archivo,{encoding: 'utf-8'})
    console.log(info);
    const data = JSON.parse(info);
    //HACE LO CONTRARIO AL JSON ANTERIOR (LO PASA A STRING)
    console.log(data)
    
    return null;
}
