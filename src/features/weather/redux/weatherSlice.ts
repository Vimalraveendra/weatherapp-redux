import {createSlice} from '@reduxjs/toolkit';
import {WeatherState} from './weatherTypes';
import {loadWeather} from './weatherThunks';

const initialState: WeatherState = {
  isLoading: false,
  weatherData: null,
  error: null,
};
export const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    clearWeatherData: (state) => {
     state.isLoading = false;
      state.weatherData = null;
      state.error = null;
    },
    clearError: (state) => {
        state.error = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadWeather.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loadWeather.fulfilled, (state, action) => {
        state.isLoading = false;
        state.weatherData = action.payload;
        state.error = null;
      })
      .addCase(loadWeather.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });
  },
});

export const {clearWeatherData, clearError} = weatherSlice.actions;
export default weatherSlice.reducer;