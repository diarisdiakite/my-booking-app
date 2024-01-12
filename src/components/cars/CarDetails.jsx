import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { fetchCarById } from '../../features/cars/carsSlice';
import { selectCarsById } from '../../features/cars/carDetailsSlice';

const CarDetails = () => {
  const dispatch = useDispatch();
  const { carId } = useParams();

  useEffect(() => {
    dispatch(fetchCarById(carId));
  }, [dispatch, carId]);

  const car = useSelector((state) => selectCarsById(state, carId));

  if (!car) {
    return <div>Loading...</div>;
  }

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
              <div className="w-[40%] font-bold">Finance fee</div>
              <td>{car?.finance_fee}</td>
            </li>
            <li className="odd:bg-slate-200 p-2 flex items-center">
              <div className="w-[40%] font-bold">Option to purchase Fee</div>
              <td>
                <Link to={car?.option_to_purchase_fee} target="_blank" rel="noopener noreferrer">
                  {car?.website}
                </Link>
              </td>
            </li>
            <li className="odd:bg-slate-200 p-2 flex items-center">
              <div className="w-[40%] font-bold">Total amount payable</div>
              <td>{car?.total_amount_payable}</td>
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
