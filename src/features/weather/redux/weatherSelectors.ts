import {RootState} from "../../../store/store";

export const selectIsLoading = (state: RootState) => state.weather.isLoading??false;
export const selectWeather = (state: RootState) => state.weather.weatherData??null;   
export const selectError = (state: RootState) => state.weather.error??null;