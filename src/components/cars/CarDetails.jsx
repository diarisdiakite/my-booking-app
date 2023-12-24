import React from 'react';
import { Link, useParams } from 'react-router-dom';
import cars from '../../data';

const CarDetails = () => {
  const { id } = useParams();
  const car = cars.find((car) => car.id === parseInt(id, 10));
  return (
    <div className="md:flex gap-8 justify-center items-center h-full">
      <div className="rounded shadow overflow-hidden">
        <img src={car.image} alt="car divumbnail" />
      </div>
      <div>
        <h2 className="page-title pb-8">{car.model}</h2>
        <div className="flex gap-4 flex-col items-end">
          <ul className="text-left">
            <li className="odd:bg-slate-200 p-2 flex items-center">
              <div className="w-[40%] font-bold">Color</div>
              <td>red</td>
            </li>
            <li className="odd:bg-slate-200 p-2 flex items-center">
              <div className="w-[40%] font-bold">Year</div>
              <td>2024</td>
            </li>
            <li className="odd:bg-slate-200 p-2 flex items-center">
              <div className="w-[40%] font-bold">Cost</div>
              <td>1800</td>
            </li>
            <li className="odd:bg-slate-200 p-2 flex items-center">
              <div className="w-[40%] font-bold">Options</div>
              <td>300</td>
            </li>
            <li className="odd:bg-slate-200 p-2 flex items-center">
              <div className="w-[40%] font-bold">Duration</div>
              <td>30 days</td>
            </li>
            <li className="odd:bg-slate-200 p-2 flex items-center">
              <div className="w-[40%] font-bold">Total to purchase</div>
              <td>4000</td>
            </li>
            <li className="odd:bg-slate-200 p-2 flex items-center">
              <div className="w-[40%] font-bold">Description</div>
              <td>{car.description}</td>
            </li>
          </ul>
          <Link to="/dashboard/reservation" className="btn px-6">Reserve</Link>
        </div>
      </div>
    </div>
  );
};

export default CarDetails;
