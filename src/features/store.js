import { configureStore } from '@reduxjs/toolkit';
import carsReducer from './cars/carsSlice';
import carDetailsReducer from './cars/carDetailsSlice';
import reservationsReducer from './reservations/reservationsSlice';
import { loginReducer } from './authentication/loginSlice';
import { logoutReducer } from './authentication/logoutSlice';
import { registerReducer } from './authentication/registerSlice';

const store = configureStore({
  reducer: {
    login: loginReducer,
    logout: logoutReducer,
    register: registerReducer,
    cars: carsReducer,
    carDetail: carDetailsReducer,
    reservations: reservationsReducer,
  },
});

export default store;
