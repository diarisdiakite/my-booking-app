import React from 'react';
// import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Button, Table } from 'react-bootstrap';

function ReservationsListElements({ reservations }) {
  // const dispatch = useDispatch();

  if (!reservations || reservations.length === 0) {
    return (
      <div>
        Reservations not found
      </div>
    );
  }

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Reservation</th>
          <th>Category</th>
          <th>Description</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {reservations.map((reservation) => (
          <tr key={reservation.id}>
            <td><Link to={`/reservations/${reservation.id}`} className="no-style bolded">{reservation.name}</Link></td>
            <td>{reservation.category}</td>
            <td>{reservation.description}</td>
            <td className="fixed-width">
              <Button
                type="button"
                variant="outline-secondary"
                aria-label="Join reservation"
                // onClick={() => dispatch(reserveReservation(reservation.id))}
              >
                Delete Reservation
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

ReservationsListElements.propTypes = {
  reservations: PropTypes.arrayOf(
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

export default ReservationsListElements;
