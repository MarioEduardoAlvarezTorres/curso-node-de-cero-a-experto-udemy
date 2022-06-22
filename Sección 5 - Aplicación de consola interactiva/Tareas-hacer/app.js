import colors from 'colors';
import { inquirerMenu, pausa } from './helpers/inquirer.js';
//import {Tarea} from './helpers/tarea.js';
import  {Tarea} from './models/tarea.js';
import  {Tareas} from './models/tareas.js';
console.clear();
const main = async() =>{
    //console.log("Hola mundo");
    let opt = '';
    do {
        // opt= await inquirerMenu();
        // console.log({opt})
        const tarea = new Tarea('Comparar comida');
        const tareas = new Tareas();
        tareas._listado[tarea.id] = tarea;
        console.log(tareas);
        await pausa();
    } while (opt != '0');
}

main();