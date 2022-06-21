import inquirer from 'inquirer';
import colors from 'colors';

const preguntas = [
    {
        type:'list',
        name: 'opcion',
        message: '¿Qué deseas hacer?',
        choices:['opt1','opt2','opt3']
    }
];
const inquirerMenu = async() =>{
    console.clear();
    console.log("=====================".magenta);
    console.log("Seleccione una opción".magenta);
    console.log("=====================\n".magenta);

    const opt= await inquirer.prompt(preguntas);
    return opt;
}   

export {inquirerMenu}