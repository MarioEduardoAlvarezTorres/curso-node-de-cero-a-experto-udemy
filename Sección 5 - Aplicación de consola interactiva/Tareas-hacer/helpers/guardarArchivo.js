import * as fs from 'fs';

export const guardarDB = (data) =>{
    const archivo = "./db/data.json";
    fs.writeFileSync(archivo,JSON.stringify(data))
}
