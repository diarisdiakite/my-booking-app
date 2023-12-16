import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './features/store';
import './index.css';
import App from './App';
import {
  fetchCars, setFetchedCars,
} from './features/cars/carsSlice';
import 'bootstrap/dist/css/bootstrap.css';

store.dispatch(fetchCars());
store.dispatch(setFetchedCars());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);
