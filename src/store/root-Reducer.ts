import {combineReducers} from 'redux';
import weatherReducer from '../features/weather/redux/weatherSlice';

export const rootReducer = combineReducers({
  weather: weatherReducer,
});

export type RootState = ReturnType<typeof rootReducer>;