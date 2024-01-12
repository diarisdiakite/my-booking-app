import React from 'react';
import ReactDOM from 'react-dom/client';
// import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
// import { BrowserRouter } from 'react-router-dom';
import store from './features/store';
import './index.css';
import App from './App';
// import { fetchCars } from './features/cars/carsSlice';
// import { fetchReservations } from './features/reservations/reservationsSlice';

/* const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
); */

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);
