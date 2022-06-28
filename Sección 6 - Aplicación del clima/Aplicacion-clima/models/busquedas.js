import axios from "axios";
export class Busquedas {
    historial = ['Mexico','España']
    constructor(){
        //TODO leer DB si existe
    }
    async ciudad(lugar = ''){
        try {
            //peticion http
            //console.log('Ciudad: ',lugar);
            const resp = await axios.get('https://api.mapbox.com/geocoding/v5/mapbox.places/mexico.json?proximity=ip&types=place%2Cpostcode%2Caddress&language=es&access_token=pk.eyJ1IjoibWFyaW9lZHVhcmRvIiwiYSI6ImNsNHhvbGkyczFxdm8zZW9iMm12c3VoaGEifQ.G5VzUnnwlD9su-T4FgchpQ')
            console.log(resp.data);

            return [];
        } catch (error) {
            console.log("No se encontró nada")
            return [];
        }
    
        return [];//regresa los lugares que coincida con la busqueda
    }
}