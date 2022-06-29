import fs from "fs";
import axios from "axios";
export class Busquedas {
    historial = []
    dbPath = "./db/database.json"
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

    get paramsOpenweather(){
        return{
            'appid': process.env.OPENWEATHER_KEY,
            'units':'metric',
            'lang':'es'
        }
        
    }
    async climaLugar(lat,lon){
        try {
            //instance axions.create()
            const instance = axios.create({
                baseURL: `https://api.openweathermap.org/data/2.5/weather`,
                params:{...this.paramsOpenweather, lat, lon}
            })
            const resp = await instance.get();
            const {weather,main} = resp.data;
            return {
                desc:weather[0].description,
                min:main.temp_min,
                max:main.temp_max,
                temp:main.temp,
            }
            
            
        } catch (error) {
            console.log(error);
            
        }
    }

    agregarHistorial(lugar =''){
        if(this.historial.includes(lugar.toLocaleLowerCase)){
            return;
        }
        this.historial.unshift(lugar);
        //Grabar en DB
        this.guardarDB();

    }

    guardarDB(){
        const payload = {
            historial:this.historial
        }
        fs.writeFileSync(this.dbPath,JSON.stringify(payload));
    }

    leerDB(){

    }
}