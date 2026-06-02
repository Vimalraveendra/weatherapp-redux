
import styles from "./WeatherHero.module.css";

 const WeatherHero = () => {
  return (
        <div>
             <h1 className={styles.title}>Find weather</h1>
             <p className={styles.subtitle}>Get weather details for any city in the world.</p>
        </div>
  )
}
export default WeatherHero;
