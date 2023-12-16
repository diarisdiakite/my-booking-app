import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { selectCarsById, reserveCar, cancelCarReservation } from './carsSlice';

function Car() {
  const dispatch = useDispatch();
  const { carId } = useParams();
  const car = useSelector((state) => selectCarsById(state, carId));

  return (
    <div className="main-container">
      <div className="car-card">
        <div className="car" key={`car-${carId}`}>
          <h3>{car?.car_name}</h3>
          <p>{car?.description}</p>
          <p><Link to={car?.website}>{car?.website}</Link></p>
          <button
            type="button"
            aria-label="Update car"
            onClick={() => dispatch(reserveCar())}
          >
            Reserve Car
          </button>
          <button
            type="button"
            aria-label="Remove car"
            onClick={() => dispatch(cancelCarReservation())}
          >
            Cancel Reservation
          </button>
        </div>
      </div>
    </div>
  );
}

export default Car;
