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
                //En casdo de que se de cancelar
                if(id === '0') continue;
                const lugarSet = lugares.find(l => l.id === id)
                //Guardar en DB
                busquedas.agregarHistorial(lugarSet.nombre);
                //Clima
                const clima = await busquedas.climaLugar(lugarSet.lat,lugarSet.lng)
                //Mostrar resultados
                console.log('\n Información de la ciudad\n'.magenta)
                console.log('Ciudad:',lugarSet.nombre)
                console.log('Lat:',lugarSet.lat)
                console.log('Lng',lugarSet.lng)
                console.log('Temperatura',clima.temp)
                console.log('Minima',clima.min)
                console.log('Maxima',clima.max)
                console.log('Descripción',clima.desc)

            break;
                
            case 2:
                busquedas.historialCapitalizado.forEach((lugar,i)=>{
                    const idx = `${i+1}.`.magenta
                    console.log(`${idx} ${lugar}`)
                })
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