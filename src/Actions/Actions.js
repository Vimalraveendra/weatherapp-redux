import {
  REQUEST_WEATHER_PENDING,
  REQUEST_WEATHER_SUCCESS,
  REQUEST_WEATHER_FAILED,
} from "../Constants/Constants";

const API_KEY = process.env.REACT_APP_API_KEY;
export const setWeather = (city, country) => (dispatch) => {
  dispatch({ type: REQUEST_WEATHER_PENDING });

  fetch(
    `http://api.weatherstack.com/current?access_key=${API_KEY}&query=${city}`
  )
    .then((response) => response.json())
    .then((data) => dispatch({ type: REQUEST_WEATHER_SUCCESS, payload: data }))
    .catch((error) =>
      dispatch({ type: REQUEST_WEATHER_FAILED, payload: error })
    );
};
