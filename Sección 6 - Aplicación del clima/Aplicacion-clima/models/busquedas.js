import axios from "axios";
export class Busquedas {
    historial = ['Mexico','España']
    constructor(){
        //TODO leer DB si existe
    }
    async ciudad(lugar = ''){
        //peticion http
        //console.log('Ciudad: ',lugar);
        const resp = await axios.get('https://reqres.in/api/users?page=2')
        console.log(resp.data);
        return [];//regresa los lugares que coincida con la busqueda
    }
}