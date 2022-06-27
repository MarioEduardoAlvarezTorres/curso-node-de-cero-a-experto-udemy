import colors from 'colors';
import { guardarDB, leerDB } from './helpers/guardarArchivo.js';
import { inquirerMenu,pausa,leerInput,listadoTareasBorrar} from './helpers/inquirer.js';
import  {Tareas} from './models/tareas.js';
console.clear();
const main = async() =>{
    let opt = '';
    const tareas = new Tareas();
    //LEER DB DE ARCHIVO "GUARDARARCHIVO.JS"
    const tareasDB = leerDB();
    if (tareasDB){
        tareas.cargarTareasFromArray(tareasDB);
    }
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
                tareas.listadoCompleto();
            break;
            
            case '3': 
                tareas.listarPedientesCompletos(true); 
            break;
            
            case '4':
                tareas.listarPedientesCompletos(false); 
            break;
            
            case '6':
                const id =  await listadoTareasBorrar(tareas.listadoArr);
                console.log({id})
            break;
        
            default:
                break;
        }

        guardarDB(tareas.listadoArr);
        await pausa();
    } while (opt != '0');
}

main();