import  {Tarea} from './tarea.js';
class Tareas {
    _listado = {}

    get listadoArr(){
        const listado = [];
        Object.keys(this._listado).forEach(key =>{
            listado.push(this._listado[key])
        });
        return listado;
    }
    constructor(){
        this._listado={}
    }

    cargarTareasFromArray(tareas = []){
        tareas.forEach(tarea =>{
            this._listado[tarea.id]= tarea;
        })
    }
    crearTarea(desc=""){
        const tarea = new Tarea(desc);
        this._listado[tarea.id] = tarea;
    }
}

export{Tareas}