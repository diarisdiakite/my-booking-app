import React from 'react';
import { useSelector } from 'react-redux';
import {
  selectAllCars,
} from '../carsSlice';
import SideNavbar from '../../../components/SideNavbar';
import CarsListElements from './childComponents/CarsListElements';

function CarsList() {
  const cars = useSelector(selectAllCars);

  return (
    <div className="flex">
      <SideNavbar />
      <div className="w-[80%] border-r-2 border-slate-200 p-4">
        <CarsListElements
          cars={cars}
        />
      </div>
    </div>
  );
}

export default CarsList;
