import React from "react";
import "./WeatherForm.css";
const WeatherForm = ({ getWeatherApi }) => {
  return (
    <React.Fragment>
      <form onSubmit={getWeatherApi}>
        <input
          type="text"
          name="city"
          placeholder="Enter the city"
          className="formSearch-input"
          autoComplete="off"
        />
        <input
          type="text"
          name="country"
          placeholder="Enter the country"
          className="formSearch-input"
          autoComplete="off"
        />
        <button type="submit" className="formSearch-button">
          Get Weather
        </button>
      </form>
    </React.Fragment>
  );
};

export default WeatherForm;
