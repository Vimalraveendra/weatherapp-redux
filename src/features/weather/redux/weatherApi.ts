import axios from "axios";
import { Weather } from "./weatherTypes";

const API_KEY = process.env.REACT_APP_API_KEY;
const API_URL="http://api.weatherstack.com/current"

export const fetchWeather =async (city:string, country:string) => {
    try{
        const response= await  axios.get(
           `${API_URL}?access_key=${API_KEY}&query=${city}`
         )
         const data:Weather= {
           temperature: response.data.current.temperature,
           humidity: response.data.current.humidity,
           city: response.data.location.name,
           country: response.data.location.country,
           description: response.data.current.weather_descriptions[0],
         }
         return data;

    }catch(error:any){
        throw new Error("Failed to fetch weather")
    }
};