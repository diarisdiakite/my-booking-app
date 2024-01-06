import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectAllCars } from '../../features/cars/carsSlice';
import CarItem from './CarItem';

const CarsList = () => {
  const cars = useSelector(selectAllCars);

  return (
    <ul className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {cars.map((car) => (
        <li key={car.id}>
          <Link to={`/dashboard/cars/${car.id}`}>
            <CarItem car={car} />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default CarsList;
