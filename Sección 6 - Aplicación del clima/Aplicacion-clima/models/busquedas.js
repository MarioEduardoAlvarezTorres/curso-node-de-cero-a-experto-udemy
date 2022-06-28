export class Busquedas {
    historial = ['Mexico','España']
    constructor(){
        //TODO leer DB si existe
    }
    async ciudad(lugar = ''){
        //peticion http
        console.log(lugar);
        return [];//regresa los lugares que coincida con la busqueda
    }
}