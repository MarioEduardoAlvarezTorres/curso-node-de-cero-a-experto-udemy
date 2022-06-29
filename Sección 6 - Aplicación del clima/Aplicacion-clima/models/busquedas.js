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
            return resp.data.features.map(lugar =>({
                id: lugar.id,
                nombre:lugar.place_name,
                lng:lugar.center[0],
                lat: lugar.center[1],
            }))

            
        } catch (error) {
            console.log("No se encontró nada")
            return [];
        }
    
        return [];//regresa los lugares que coincida con la busqueda
    }
}