import React from 'react';
import PropTypes from 'prop-types';

const CarItem = ({ car }) => (
  <div className="">
    <div className="rounded shadow overflow-hidden">
      <img src={`${process.env.PUBLIC_URL}/${car.image}`} alt={car?.name} />
    </div>
    <div className="pt-5 text-lg">{car?.finance_fee}</div>
    <div className="text-slate-500 text-sm">{car?.description}</div>
  </div>
);

CarItem.propTypes = {
  car: PropTypes.shape({
    name: PropTypes.string,
    image: PropTypes.string,
    finance_fee: PropTypes.number,
    option_to_purchase_fee: PropTypes.number,
    duration: PropTypes.number,
    description: PropTypes.string,
  }).isRequired,
};

export default CarItem;
