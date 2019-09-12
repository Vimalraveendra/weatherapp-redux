
import {
	REQUEST_WEATHER_PENDING,
	REQUEST_WEATHER_SUCCESS,
	REQUEST_WEATHER_FAILED
} from '../Constants/Constants';


export const setWeather=(API_KEY,city,country)=>dispatch=>{
		dispatch({type:REQUEST_WEATHER_PENDING})
		fetch(`https://cors-anywhere.herokuapp.com/https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`)
		.then(response=> response.json())
		.then(data=>dispatch({type:REQUEST_WEATHER_SUCCESS,payload:data}))
		.catch(error=>dispatch({type:REQUEST_WEATHER_FAILED,payload:error}))
	}
