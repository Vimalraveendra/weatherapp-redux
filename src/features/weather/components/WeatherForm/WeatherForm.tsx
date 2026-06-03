import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../../store/hooks";
import { loadWeather } from "../../redux/weatherThunks";
import styles from "./WeatherForm.module.css";
import { selectError } from "../../redux/weatherSelectors";
import { clearError,clearWeatherData } from "../../redux/weatherSlice";


const WeatherForm = () => {
  const dispatch = useAppDispatch();
  const error = useAppSelector(selectError);
  const [city, setCity] = useState("");
  const [country,setCountry]= useState("")

  const getWeatherApi = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(loadWeather({city,country}))
  };
  const handleClearWeather=()=>{
    setCity("");
    setCountry("");
    dispatch(clearWeatherData());
  }

  const handleChange=(event:React.ChangeEvent<HTMLInputElement>)=>{
    if(error) dispatch(clearError());
    const {name,value}= event.target;
     if(name==="country"){
        setCountry(value);
     }else if(name==="city"){
        setCity(value);
    }
  }

  return (
    <form onSubmit={getWeatherApi} className={styles.form}>
      <div className={styles.form__group}>
              <input
              type="text"
              name="city"
              placeholder="City"
              aria-label="City"
              className="input"
              value={city}
              onChange={handleChange}
              autoComplete="off"
            />
            <input
              type="text"
              name="country"
              value={country}
              placeholder="Country"
              aria-label="Country"
              className="input"
              onChange={handleChange}
              autoComplete="off"
            />
      </div>
     
      <div className="btn-group">
            <button 
            type="submit" 
            className="btn"
             disabled={!city.trim()||!country.trim()}
            >Get Weather</button>
            <button
              type="reset"
              className="btn btn--clear"
              disabled={!city.trim()||!country.trim()}
              onClick={handleClearWeather}
            >
              Clear
            </button>
    </div>
   
    </form>
  );
};



export default WeatherForm;