
import { Weather } from '../../features/weather/redux/weatherTypes';
import styles from "./WeatherDetails.module.css"

type WeatherDataProps={
  weatherData:Weather
}

 const WeatherDetails = ({weatherData}:WeatherDataProps) => {
  const {city,country,temperature,humidity,description,}=weatherData;
  return (
     <div className={styles.weather__info}>
            {city && country &&
              <p>Location: <span> {city},{country} </span></p>
            }
            {temperature &&
              <p>Temperature: <span>{temperature} </span></p>
            }
            {humidity &&
              <p>Humidity: <span> {humidity} </span></p>
            }
            {description &&
              <p>Weather: <span>{description} </span></p>
            }
          </div>
  )
}

export default WeatherDetails;