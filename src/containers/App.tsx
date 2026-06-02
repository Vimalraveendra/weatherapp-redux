
import  WeatherHero  from "../components/WeatherHero/WeatherHero";
import WeatherForm from "../features/weather/components/WeatherForm/WeatherForm";
import  WeatherContainer  from "../features/weather/components/WeatherContainer/WeatherContainer";
import styles from  "./App.module.css";

export const App = () => {
  return (
     <div>
          <header className={styles.header}>
            <h1 className={styles.header__title}>Weather App</h1>
          </header>
          <div className={styles.container}>
               <main className={styles.main}>
                      <section className={styles.main__hero}>
                          <WeatherHero/>
                      </section>
                      <section className={styles.main__form}>
                          <WeatherForm/>
                        <WeatherContainer />
                      </section>
               </main>
           </div>
      </div>
  )
}

export default App;