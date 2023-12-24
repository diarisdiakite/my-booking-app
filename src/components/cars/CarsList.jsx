import React from 'react';
import { Link } from 'react-router-dom';
import CarItem from './CarItem';
import cars from '../../data';

const CarsList = () => (
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

export default CarsList;
