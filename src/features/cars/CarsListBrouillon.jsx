import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Badge } from 'react-bootstrap';
import {
  selectAllCars, reserveCar, cancelCarReservation
  // removeCar, updateCar,
} from './carsSlice';
// import image from '../../assets/img/image_not_available.png'
import '../../assets/css/item.css'

function CarsListHome() {
  const dispatch = useDispatch()
  const cars = useSelector(selectAllCars);

  return (
    <div className="flex w-full h-screen">
      <h3>
        Cars
      </h3>
      <div className="display-grid-3">
        {cars.map((car) => (
          <div key={car.id} className="item-card">
            <div key={`frontend-car-${car.id}-${car.name}`} className="item-card-img">
              <img src={car.img} alt="" />
            </div>
            <div className="item-card-text-no-line-height">
              <div className="car">
                <h4><Link className="no-style" to={`/cars/${car.id}`}>{car.name}</Link></h4>
                <p>
                  {!car.reserved && (
                  <Badge
                    bg="secondary"
                  >
                    Not Reserved
                  </Badge>
                  )}
                  {car.reserved && (
                  <Badge
                    bg="success"
                  >
                    Reserve
                  </Badge>
                  )}
                </p>
                <p>{car.model}</p>
                <p className="bolded">{car.category}</p>
                <div>
                  <p className="bolded">
                    {' Facebook: '}
                    {car.facebook}
                     ,
                    {' Twitter: '}
                    {car.twitter}
                    ,
                    {' Website: '}
                    {car.website}
                  </p>
                </div>
                {!car.reserved && (
                <Badge
                  type="button"
                  bg="secondary"
                  aria-label="Reserve car"
                  onClick={() => dispatch(reserveCar(car.id))}
                >
                  Reserve
                </Badge>
                )}
                {car.reserved && (
                <Badge
                  type="button"
                  bg="danger"
                  aria-label="cancel car Reservation"
                  onClick={() => dispatch(cancelCarReservation(car.id))}
                >
                  Cancel Reservation
                </Badge>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CarsListHome;
