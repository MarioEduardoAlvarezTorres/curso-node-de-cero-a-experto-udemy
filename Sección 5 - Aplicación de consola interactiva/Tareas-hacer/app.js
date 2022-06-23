import colors from 'colors';
import { guardarDB } from './helpers/guardarArchivo.js';
import { inquirerMenu,pausa,leerInput } from './helpers/inquirer.js';
import  {Tareas} from './models/tareas.js';
console.clear();
const main = async() =>{
    //console.log("Hola mundo");
    let opt = '';
    const tareas = new Tareas();
    do {
        //IMPRIME EL MENU
        opt= await inquirerMenu();
        switch (opt) {
            case '1': 
                const desc = await leerInput('Descripción: ');
                tareas.crearTarea(desc);
                console.log(desc);
            break;
                
            case '2':
                console.log(tareas.listadoArr)   
            break;
            
            case '3':  
            break;
            
            case '4':
            break;
        
            default:
                break;
        }

        //guardarDB(tareas.listadoArr);
        await pausa();
    } while (opt != '0');
}

main();