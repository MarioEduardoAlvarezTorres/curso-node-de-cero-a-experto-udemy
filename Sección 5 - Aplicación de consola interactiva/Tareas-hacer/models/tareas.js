import  {Tarea} from './tarea.js';
class Tareas {
    _listado = {}
    //GET LISTAR AAREGLO
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
    //CARGAR TARAS DEL ARRAY
    cargarTareasFromArray(tareas = []){
        tareas.forEach(tarea =>{
            this._listado[tarea.id]= tarea;
        })
    }
    //1.CREAR TAREA
    crearTarea(desc=""){
        const tarea = new Tarea(desc);
        this._listado[tarea.id] = tarea;
    }
    //2.LISTA TODAS LAS TAREAS
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
    //3. Y 4.LISTAR TAREAS COMPLETADAS Y PENDIENTES
    listarPedientesCompletos(completadas = true){
        let contador = 0;
        this.listadoArr.forEach((tarea) => {
            const {desc,completadoEn} = tarea;
            const estado = (completadas)
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
    //5.COMPLETAR TAREAS
    //6.BORRAR TAREAS
    borrarTarea(id=""){
        if(this._listado[id]){
            delete this._listado[id];
        }
    }
}

export{Tareas}