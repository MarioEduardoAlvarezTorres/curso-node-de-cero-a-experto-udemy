import {leerInput,pausa,inquirerMenu} from './helpers/inquirer.js';
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
                const lugar = await leerInput('Ciudad: ');
                await busquedas.ciudad(lugar);
                //Buscar los lugares
                //Seleccionar el lugar
                //Clima
                //Mostrar resultados
                console.log('\n Información de la ciudad\n'.magenta)
                console.log('Ciudad:')
                console.log('Lat:')
                console.log('Lng')
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