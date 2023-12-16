import React from 'react';
import { useSelector } from 'react-redux';
import {
  selectAllCars,
} from '../carsSlice';
import CarsListElements from './childComponents/CarsListElements';

function CarsList() {
  const cars = useSelector(selectAllCars);

  return (
    <div className="container">
      <CarsListElements
        cars={cars}
      />
    </div>
  );
}

export default CarsList;
