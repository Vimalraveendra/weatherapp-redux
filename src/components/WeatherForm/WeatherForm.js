import React from "react";
import { connect } from "react-redux";
import { clearWeather } from "../../Actions/Actions";
import "./WeatherForm.css";

const WeatherForm = ({ getWeatherApi }) => {
  return (
    <React.Fragment>
      <form onSubmit={getWeatherApi}>
        <input
          type="text"
          name="city"
          placeholder="City"
          className="formSearch-input"
          autoComplete="off"
        />
        <input
          type="text"
          name="country"
          placeholder="Country"
          className="formSearch-input"
          autoComplete="off"
        />
        <button type="submit" className="formSearch-button">
          Get Weather
        </button>
        <button
          type="reset"
          className="formSearch-button"
          onClick={clearWeather}
        >
          Clear
        </button>
      </form>
    </React.Fragment>
  );
};

const mapDispatchToProps = (dispatch) => ({
  clearWeather: () => dispatch(clearWeather()),
});

export default connect(null, mapDispatchToProps)(WeatherForm);
