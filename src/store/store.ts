import {configureStore} from '@reduxjs/toolkit';
import {rootReducer} from './root-Reducer';
import reduxLogger from 'redux-logger';

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => (
    process.env.NODE_ENV === 'development'? 
    getDefaultMiddleware().concat(reduxLogger) : 
    getDefaultMiddleware()
)
});

export type AppDispatch = typeof store.dispatch;    