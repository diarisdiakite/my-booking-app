import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectAllCars, fetchCarById } from './carsSlice';
import SideNavbar from '../../components/SideNavbar';
import '../../assets/css/item.css';

function CarsListHome() {
  const cars = useSelector(selectAllCars);
  const dispatch = useDispatch();

  const handleCarClick = (carId) => {
    dispatch(fetchCarById(carId));
  };

  return (
    <div className="flex">
      <SideNavbar />
      <div className="w-[80%] border-r-2 border-slate-200 p-4">
        <h3>Cars</h3>
        <div className="grid grid-cols-3 gap-4">
          {cars.map((car) => (
            <div key={car.id} className="item-card">
              <div key={`frontend-car-${car.id}-${car.name}`} className="item-card-img">
                <img src={`${process.env.PUBLIC_URL}/${car.image}`} alt={car.name} />
              </div>
              <div className="item-card-text-no-line-height">
                <div className="car">
                  {/* Wrap the content with a button */}
                  <button
                    type="button"
                    className="no-style"
                    onClick={() => handleCarClick(car.id)}
                  >
                    <h4>
                      <Link className="no-style" to={`/cars/${car.id}`}>
                        {car.name}
                      </Link>
                    </h4>
                  </button>
                  <p>{car.description}</p>
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
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CarsListHome;
