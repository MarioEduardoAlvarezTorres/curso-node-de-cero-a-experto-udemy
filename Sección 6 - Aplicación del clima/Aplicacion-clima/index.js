import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config()
import {leerInput,pausa,inquirerMenu,listarLugares} from './helpers/inquirer.js';
import { Busquedas } from './models/busquedas.js';


const main = async()=>{
    let opt;
    const busquedas = new Busquedas();
    do {
        //IMPRIME EL MENU
        opt= await inquirerMenu();
        switch (opt) {
            case 1:
                //Mostar mesaje 
                const terminodeBusqueda = await leerInput('Ciudad: ');
               
                //Buscar los lugares
                const lugares = await busquedas.ciudad(terminodeBusqueda);
                //Seleccionar el lugar
                const id = await listarLugares(lugares);
                const lugarSet = lugares.find(l => l.id === id)
                //Clima
                //Mostrar resultados
                console.log('\n Información de la ciudad\n'.magenta)
                console.log('Ciudad:',lugarSet.nombre)
                console.log('Lat:',lugarSet.lat)
                console.log('Lng',lugarSet.lng)
                console.log('Temperatura')
                console.log('Minima')
                console.log('Maxima')

            break;
                
            case 2:
                console.log("Estamos en el Dos");
            break;
            
            case 0: 
                console.log("Estamos en el Salir");
            break;
            default:
                break;
        }
        await pausa();
    } while (opt != 0);
}

main();