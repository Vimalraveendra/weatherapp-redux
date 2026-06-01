
import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchWeather } from './weatherApi';
import { Weather } from './weatherTypes';    

export const loadWeather= createAsyncThunk<Weather, {city: string,country: string},{rejectValue: string}>(
  "weather/loadWeather",
  async ( {city,country},ThunkAPI) => {
    try {
      return await fetchWeather(city,country);
    } catch (error: any) {
      return ThunkAPI.rejectWithValue(error.message);
    }
  }
);