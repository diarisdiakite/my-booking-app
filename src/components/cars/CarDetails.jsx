import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { fetchCarById, selectCarsById } from '../../features/cars/carsSlice';

const CarDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchCarById(id));
  }, [dispatch, id]);

  const car = useSelector((car) => selectCarsById(car, id));

  return (
    <div className="md:flex gap-8 justify-center items-center h-full">
      <div className="rounded shadow overflow-hidden max-w-[50%]">
        <img src={`${process.env.PUBLIC_URL}/${car.image}`} alt={car?.name} />
      </div>
      <div>
        <h2 className="page-title pb-8">{car?.name}</h2>
        <div className="flex gap-4 flex-col items-end">
          <ul className="text-left">
            <li className="odd:bg-slate-200 p-2 flex items-center">
              <div className="w-[40%] font-bold">Model</div>
              <td>{car?.model}</td>
            </li>
            <li className="odd:bg-slate-200 p-2 flex items-center">
              <div className="w-[40%] font-bold">Website</div>
              <td>
                <Link to={car?.website} target="_blank" rel="noopener noreferrer">
                  {car?.website}
                </Link>
              </td>
            </li>
            <li className="odd:bg-slate-200 p-2 flex items-center">
              <div className="w-[40%] font-bold">Description</div>
              <td>{car?.description}</td>
            </li>
          </ul>
          <Link to="/dashboard/reservation" className="btn px-6">
            Reserve
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CarDetails;
