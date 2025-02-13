import {
  REQUEST_WEATHER_PENDING,
  REQUEST_WEATHER_SUCCESS,
  REQUEST_WEATHER_FAILED,
} from "../Constants/Constants";

const initialState = {
  temperature: "",
  humidity: "",
  city: "",
  country: "",
  description: "",
  error: "",
  isPending: false,
};

export const requestWeather = (state = initialState, action = {}) => {
  switch (action.type) {
    case REQUEST_WEATHER_PENDING:
      return {
        ...state,
        isPending: true,
      };

    case REQUEST_WEATHER_SUCCESS:
      return {
        ...state,
        isPending: false,
        temperature: action.payload.current.temperature,
        humidity: action.payload.current.humidity,
        city: action.payload.location.name,
        country: action.payload.location.country,
        description: action.payload.current.weather_descriptions[0],
      };
    case REQUEST_WEATHER_FAILED:
      return {
        ...state,
        isPending: false,
        error: "Sorry! Please Enter a valid city and country",
      };
    default:
      return state;
  }
};
