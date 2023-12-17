import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Table from 'react-bootstrap/Table';
import { Button } from 'react-bootstrap';
import Badge from 'react-bootstrap/Badge';
import { reserveCar } from '../../carsSlice';

function CarsListElements({ cars }) {
  const dispatch = useDispatch();

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
          <th>Description</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {cars.map((car) => (
          <tr key={car.id}>
            <td><Link to={`/cars/${car.id}`} className="no-style bolded">{car.name}</Link></td>
            <td>{car.description}</td>
            <td className="fixed-width">
              {!car.reserved && (
              <Badge bg="secondary">
                Not Reserved
              </Badge>
              )}
              {car.reserved && (
              <Badge bg="success">
                Reserved Car
              </Badge>
              )}
            </td>
            <td className="fixed-width">
              <Button
                type="button"
                variant="outline-secondary"
                aria-label="Join car"
                onClick={() => dispatch(reserveCar(car.id))}
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
