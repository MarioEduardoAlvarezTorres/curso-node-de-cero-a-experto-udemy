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
    
    listadoCompleto(){
        this.listadoArr.forEach((tarea,i) => {
            const idx = `${i+1}`.magenta;
            const {desc,completadoEn} = tarea;
            const estado = (completadoEn)
                ? 'Completada'.green
                : 'Pendiente'.red;
            console.log(idx , desc ,"::", estado)
        });
    }

    listarPedientesCompletos(completadas = true){
        let contador = 0;
        this.listadoArr.forEach((tarea) => {
            const {desc,completadoEn} = tarea;
            const estado = (completadoEn)
                ? 'Completada'.green
                : 'Pendiente'.red;
            if(completadas === true && completadoEn!==null){
                contador++;
                console.log(`${contador}`.magenta , desc ,"::", estado)
            }
                
                
            if(completadas === false && completadoEn===null){
                contador++;
                console.log(`${contador}`.magenta , desc ,"::", estado)
            }
        });
    }

    listarPendientes(){

    }
}

export{Tareas}