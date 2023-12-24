import React from 'react';
import PropTypes from 'prop-types';

const CarItem = ({ car }) => (
  <div className="">
    <div className="rounded shadow overflow-hidden">
      <img src={car.image} alt="car thumbnail" />
    </div>
    <div className="pt-5 text-lg">{car.model}</div>
    <div className="text-slate-500 text-sm">{car.description}</div>
  </div>
);

CarItem.propTypes = {
  car: PropTypes.shape({
    image: PropTypes.string,
    model: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
};

export default CarItem;
