
import {
	REQUEST_WEATHER_PENDING,
	REQUEST_WEATHER_SUCCESS,
	REQUEST_WEATHER_FAILED
} from '../Constants/Constants';

const initialState={
	        temperature:'',
          humidity:'',
          city:'',
          country:'',
          description:'',
          error:'',
          isPending:false
}


export const requestWeather=(state=initialState, action={})=>{
	const newState={...state}
     switch(action.type){
     	case REQUEST_WEATHER_PENDING:
     	return {
     		...newState,
     		isPending:true
     	}
     
           case REQUEST_WEATHER_SUCCESS:
     	  return {
     		...newState,
     		  isPending:false,
     		  temperature:action.payload.main.temp,
          humidity:action.payload.main.humidity,
          city:action.payload.name,
          country:action.payload.sys.country,
          description:action.payload.weather[0].description,
     	}
         case REQUEST_WEATHER_FAILED:
            return {
               ...newState,
               isPending:false,
               error:"Sorry! Please Enter a valid city and country"
          }
      default:
	return newState;
}
}