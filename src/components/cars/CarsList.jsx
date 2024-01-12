import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchCars, selectAllCars } from '../../features/cars/carsSlice';
import CarItem from './CarItem';

const CarsList = () => {
  const dispatch = useDispatch();
  const cars = useSelector(selectAllCars);

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

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
