import {leerInput,pausa,inquirerMenu} from './helpers/inquirer.js';

const main = async()=>{
    let opt;
    do {
        //IMPRIME EL MENU
        opt= await inquirerMenu();
        switch (opt) {
            case 1: 
                console.log("Estamos en el Uno");
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