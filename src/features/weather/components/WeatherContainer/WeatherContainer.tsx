
import  WeatherDetails  from '../../../../components/WeatherDetails/WeatherDetails'
import { useAppSelector } from '../../../../store/hooks'
import { selectError, selectIsLoading, selectWeatherData } from '../../redux/weatherSelectors';
import styles from "./WeatherContainer.module.css"

 const WeatherContainer = () => {
    const loading = useAppSelector(selectIsLoading)
    const weatherData= useAppSelector(selectWeatherData)
    const error = useAppSelector(selectError)

    if (loading) return <p className={styles.status__loading}>Loading...</p>;
    if (error) return <p className={styles.status__error}>{error}</p>;
  return (
     <>
      { weatherData && <WeatherDetails weatherData={weatherData} /> }
     </>
  ) 
}
export default WeatherContainer;