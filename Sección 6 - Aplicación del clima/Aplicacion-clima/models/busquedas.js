import axios from "axios";
export class Busquedas {
    historial = ['Mexico','España']
    constructor(){
        //TODO leer DB si existe
    }
    get paramsMapbox(){
        return{
            'access_token':process.env.MAPBOX_KEY,
            'limit':5,
            'language':'es'
        }
    }
    async ciudad(lugar = ''){
        try {
            //Peticion http
            const instance = axios.create({
                baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${lugar}.json`,
                params:this.paramsMapbox
            })
            const resp = await instance.get();
            console.log(resp.data);

            return [];
        } catch (error) {
            console.log("No se encontró nada")
            return [];
        }
    
        return [];//regresa los lugares que coincida con la busqueda
    }
}