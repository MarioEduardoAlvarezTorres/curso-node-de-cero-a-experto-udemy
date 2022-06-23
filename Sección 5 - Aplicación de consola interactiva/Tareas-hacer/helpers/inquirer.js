import inquirer from 'inquirer';
import colors from 'colors';

const preguntas = [
    {
        type:'list',
        name: 'opcion',
        message: '¿Qué deseas hacer?',
        choices:[
            {value:'1',
             name:`${'1.'.magenta}Crear tarea`},
            {value:'2',
             name:`${'2.'.magenta}Lista de tareas`},
            {value:'3',
             name:`${'3.'.magenta}Vistar Tareas completadas`},
            {value:'4',
             name:`${'4.'.magenta}Listar tareas pendientes`},
            {value:'5',
             name:`${'5.'.magenta}Completar tarea(s)`},
            {value:'6',
             name:`${'6.'.magenta}Borrar Tarea`},
            {value:'0',
             name:`${'7.'.magenta}Salir`}
        ]
    }
];

const siguiente = [{
    type:'input',
    name:'siguiente',
    message:`Presiones ${'Enter'.magenta} para continuar`,
}];
const inquirerMenu = async() =>{
    console.clear();
    console.log("=====================".magenta);
    console.log("Seleccione una opción".magenta);
    console.log("=====================\n".magenta);

    const {opcion} = await inquirer.prompt(preguntas);
    return opcion;
}   

const pausa = async() =>{
    await inquirer.prompt(siguiente);
    console.log("Estamos en Pausa")
    console.log("\n")
}

const leerInput = async(message) =>{
    const question=[
        {
            type:'input',
            name:'desc',
            message,
            validate(value){
                if(value.length === 0){
                    return 'Por Favor ingrese un valor'
                }
                return true;
            }
        }
    ];
    const {desc} = await inquirer.prompt(question);
    return desc;
}
export {inquirerMenu,pausa,leerInput}