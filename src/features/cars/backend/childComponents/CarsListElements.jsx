import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Button, Table } from 'react-bootstrap';
// import { reserveCar } from '../../carsSlice';

function CarsListElements({ cars }) {
  if (!cars || cars.length === 0) {
    return (
      <div>
        Cars not found
      </div>
    );
  }

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Car</th>
          <th>Category</th>
          <th>Description</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {cars.map((car) => (
          <tr key={car.id}>
            <td><Link to={`/cars/${car.id}`} className="no-style bolded">{car?.name}</Link></td>
            <td>{car?.category}</td>
            <td>{car?.description}</td>
            <td className="fixed-width">
              <Button
                type="button"
                variant="outline-secondary"
                aria-label="Join car"
              >
                Delete Car
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

CarsListElements.propTypes = {
  cars: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      facebook: PropTypes.string,
      twitter: PropTypes.string,
      website: PropTypes.string,
    }),
  ).isRequired,
};

export default CarsListElements;
