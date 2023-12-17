import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { selectCarsById, reserveCar, cancelCarReservation } from './carsSlice';

function Car() {
  const dispatch = useDispatch();
  const { carId } = useParams();
  const car = useSelector((state) => selectCarsById(state, carId));

  if (!car) {
    return <div>Loading...</div>;
  }

  // const { name, description, model, website } = car || {};

  return (
    <div className="main-container">
      <div className="car-card">
        <div className="car" key={`car-${carId}`}>
          <h3>{car?.name}</h3>
          <p>{car?.description}</p>
          <p>{car?.model}</p>
          <p>
            <Link to={car?.website} target="_blank" rel="noopener noreferrer">
              {car?.website}
            </Link>
          </p>
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
