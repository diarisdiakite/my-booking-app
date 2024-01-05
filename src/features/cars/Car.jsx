import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import {
  selectCarsById, reserveCar, cancelCarReservation, fetchCarById,
} from './carsSlice';

function Car() {
  const dispatch = useDispatch();
  const { carId } = useParams();

  useEffect(() => {
    dispatch(fetchCarById(carId));
  }, [dispatch, carId]);

  const car = useSelector((state) => selectCarsById(state, carId));

  console.log('Car:', car);

  /* if (!car) {
    return <div>Loading...</div>;
  }
 */
  // const { name, description, model, website } = car || {};

  return (
    <div className="main-container">
      <div className="car-card">
        <div className="car" key={`car-${carId}`}>
          <img src={`${process.env.PUBLIC_URL}/${car.image}`} alt={car.name} />
          <h3>{car?.name}</h3>
          <p>{car?.description}</p>
          <p>{car?.model}</p>
          <p>
            <Link to={car?.website} target="_blank" rel="noopener noreferrer">
              {car?.website}
            </Link>
          </p>
          <Button
            type="button"
            aria-label="Update car"
            onClick={() => dispatch(reserveCar())}
          >
            Reserve Car
          </Button>
          <Button
            type="button"
            aria-label="Cancel car reservation"
            onClick={() => dispatch(cancelCarReservation())}
          >
            Cancel Reservation
          </Button>
          <Link to={`/${carId}/update`}>
            <Button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700 ml-2">
              Update Car
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Car;
